/// <reference lib="webworker" />
import loadMujoco from '@mujoco/mujoco'
import type { ActuatorMeta, FromWorker, ToWorker } from './protocol'

// MuJoCo lives here so the UI thread never stalls. The UI sends a model and
// controls; we post back geometry poses at up to 60 Hz.

type MujocoModule = Awaited<ReturnType<typeof loadMujoco>>
let mujoco: MujocoModule
let model: any = null
let data: any = null
let actuators: ActuatorMeta[] = []
let running = false
let driveOn = true
let speed = 1
let energy = 0
let lastTick = 0
let frameTimer: ReturnType<typeof setTimeout> | null = null
let rootBodyId = 1
let payloadBodyId = -1
let bodyNames: string[] = []
let startX = 0, startY = 0
let maxPayloadZ = -1
let modelCounter = 0

const post = (m: FromWorker, transfer?: Transferable[]) => (self as unknown as Worker).postMessage(m, transfer ?? [])

function dispose() {
  try { data?.delete() } catch { /* already gone */ }
  try { model?.delete() } catch { /* already gone */ }
  model = null; data = null
}

function load(xml: string, acts: ActuatorMeta[], names: string[]) {
  dispose()
  const path = `/w/model_${++modelCounter}.xml`
  try { mujoco.FS.mkdir('/w') } catch { /* exists */ }
  mujoco.FS.writeFile(path, xml)
  try {
    model = mujoco.MjModel.mj_loadXML(path)
  } catch (e) {
    post({ type: 'error', message: String((e as Error).message ?? e).replace(/^Error: MuJoCo Error: /, '') })
    return
  } finally {
    try { mujoco.FS.unlink(path) } catch { /* ignore */ }
  }
  data = new mujoco.MjData(model)
  actuators = acts
  bodyNames = names
  energy = 0
  running = false
  const n: number = model.ngeom
  rootBodyId = n > 0 && model.nbody > 1 ? 1 : 0
  const pi = names.indexOf('payload')
  payloadBodyId = pi >= 0 ? pi + 1 : -1
  maxPayloadZ = -1
  post({
    type: 'loaded',
    geoms: {
      n,
      type: Int32Array.from(model.geom_type),
      size: Float32Array.from(model.geom_size),
      rgba: Float32Array.from(model.geom_rgba),
      bodyId: Int32Array.from(model.geom_bodyid),
    },
    nu: model.nu,
    timestep: model.opt.timestep,
    rootBodyId,
    nbody: model.nbody,
    bodyNames: names,
  })
  mujoco.mj_forward(model, data)
  startX = data.xpos[rootBodyId * 3]; startY = data.xpos[rootBodyId * 3 + 1]
  sendFrame()
}

function applyDrive() {
  if (!driveOn) return
  const t: number = data.time
  for (let i = 0; i < actuators.length && i < model.nu; i++) {
    const d = actuators[i].drive
    if (!d) continue
    let v = d.amp * Math.sin(2 * Math.PI * d.freq * t + d.phase)
    const a = actuators[i]
    v = Math.max(a.ctrlMin, Math.min(a.ctrlMax, v))
    data.ctrl[i] = v
  }
}

function stepN(n: number) {
  const dt: number = model.opt.timestep
  const qv = data.actuator_velocity
  for (let k = 0; k < n; k++) {
    applyDrive()
    mujoco.mj_step(model, data)
    const f = data.actuator_force
    let p = 0
    for (let i = 0; i < model.nu; i++) p += Math.abs(f[i] * qv[i])
    energy += p * dt
  }
}

function sendFrame() {
  if (!model || !data) return
  const nu: number = model.nu
  const f = data.actuator_force
  const qv = data.actuator_velocity
  let power = 0
  for (let i = 0; i < nu; i++) power += Math.abs(f[i] * qv[i])
  const xm = data.xmat
  const rootUp = model.nbody > 1 ? xm[rootBodyId * 9 + 8] : 1
  const xp = data.xpos
  const dx = xp[rootBodyId * 3] - startX, dy = xp[rootBodyId * 3 + 1] - startY
  const payloadZ = payloadBodyId > 0 ? xp[payloadBodyId * 3 + 2] : -1
  if (payloadZ > maxPayloadZ) maxPayloadZ = payloadZ
  const frame = {
    type: 'frame' as const,
    time: data.time as number,
    xpos: Float32Array.from(data.geom_xpos),
    xmat: Float32Array.from(data.geom_xmat),
    ctrl: Float32Array.from(data.ctrl),
    force: Float32Array.from(f),
    rootPos: Float32Array.of(xp[rootBodyId * 3], xp[rootBodyId * 3 + 1], xp[rootBodyId * 3 + 2]),
    rootUp,
    bodyPos: Float32Array.from(xp),
    bodyMat: Float32Array.from(xm),
    travel: Math.hypot(dx, dy),
    payloadZ,
    maxPayloadZ,
    power,
    energy,
    contacts: data.ncon as number,
    running,
  }
  post(frame, [frame.xpos.buffer, frame.xmat.buffer, frame.ctrl.buffer, frame.force.buffer, frame.rootPos.buffer, frame.bodyPos.buffer, frame.bodyMat.buffer])
}

function loop() {
  frameTimer = null
  if (!model || !data) return
  const now = performance.now()
  if (running) {
    const dt: number = model.opt.timestep
    let elapsed = Math.min((now - lastTick) / 1000, 0.1) * speed
    const steps = Math.min(Math.round(elapsed / dt), 200)
    if (steps > 0) stepN(steps)
    // Blow-up guard: if anything is NaN, reset so the user sees a message-free recovery.
    if (!Number.isFinite(data.xpos[rootBodyId * 3 + 2])) { mujoco.mj_resetData(model, data); mujoco.mj_forward(model, data); running = false }
  }
  lastTick = now
  sendFrame()
  if (running) frameTimer = setTimeout(loop, 1000 / 60)
}

function start() {
  if (!model || running) return
  running = true
  lastTick = performance.now()
  if (!frameTimer) loop()
}

self.onmessage = (ev: MessageEvent<ToWorker>) => {
  const m = ev.data
  if (!mujoco) return
  switch (m.type) {
    case 'load': load(m.xml, m.actuators, m.bodyNames); break
    case 'run': start(); break
    case 'pause': running = false; sendFrame(); break
    case 'step': if (model) { running = false; stepN(Math.round(1 / 60 / model.opt.timestep)); sendFrame() } break
    case 'reset': if (model) { running = false; mujoco.mj_resetData(model, data); energy = 0; maxPayloadZ = -1; mujoco.mj_forward(model, data); sendFrame() } break
    case 'ctrl': if (data && m.index < model.nu) { data.ctrl[m.index] = m.value; if (!running) sendFrame() } break
    case 'drive': driveOn = m.on; break
    case 'speed': speed = Math.max(0.05, Math.min(4, m.value)); break
  }
}

loadMujoco().then(mod => { mujoco = mod; post({ type: 'ready' }) })
  .catch(e => post({ type: 'error', message: 'Physics engine failed to load: ' + String(e) }))
