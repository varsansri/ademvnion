import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

// The Unitree Go2 on /inside/unitree-go2/: Unitree's own published model
// (via MuJoCo Menagerie), with numbered pins for the parts read from the FCC
// filing, an X-ray mode that fades the shell and shows where they sit, and a
// walk cycle. Loaded by the static page with a fixed filename, like hero.js.

const DIR = '/inside/unitree-go2/'

interface Body { name: string; parent: string | null; pos: number[]; joint: { name: string; axis: number[]; range: number[] } | null }
interface Geom { body: string; mesh: string; color: number[]; pos: number[]; quat: number[] }
interface Data { bodies: Body[]; geoms: Geom[]; home: Record<string, number>; home_height: number }

type Status = 'Read' | 'Matched' | 'Hidden' | 'Inferred'
interface Part { n: number; id: string; name: string; status: Status; text: string; at: number[]; box?: number[]; card: string }

// Positions are in the body frame (x forward, y left, z up, metres). The filing
// shows the parts, not where they sit, so board positions are approximate; the
// leg motors and the LiDAR follow the model's real geometry.
const PARTS: Part[] = [
  { n: 1, id: 'brain', name: 'Core board: Rockchip RK3588S', status: 'Matched', card: 'p-brain',
    text: 'The computer: 8-core Arm with an AI accelerator, 8 GB memory, 64 GB storage, on a plug-in board under a heatsink. Chip markings ground off; identified from the identical board in Unitree’s humanoid.',
    at: [0.0, 0, 0.03], box: [0.075, 0.06, 0.012] },
  { n: 2, id: '4g', name: '4G: Quectel EG25-G', status: 'Read', card: 'p-4g',
    text: 'An M.2 cellular card with a Qualcomm MDM9207 modem, so the app can reach the dog away from home Wi-Fi.',
    at: [-0.075, 0.02, 0.034], box: [0.052, 0.03, 0.004] },
  { n: 3, id: 'wifi', name: 'Wi-Fi 6 + Bluetooth: Realtek RTL8852BU', status: 'Read', card: 'p-wifi',
    text: 'A soldered module (LB-Link BL-M8852BU1) with two antennas. The phone app and controller connect here.',
    at: [0.08, -0.022, 0.034], box: [0.03, 0.026, 0.004] },
  { n: 4, id: 'radio', name: 'Remote radio “YS.PPRF”', status: 'Hidden', card: 'p-radio',
    text: 'A separate 2.4 GHz link to the handheld remote, plus a LoRa antenna. Its two main chips were ground blank.',
    at: [0.1, 0.024, 0.03], box: [0.032, 0.024, 0.004] },
  { n: 5, id: 'uwb', name: 'UWB positioning board', status: 'Hidden', card: 'p-uwb',
    text: 'Four antennas measure distance and angle to the remote for follow-me mode. Chip markings ground off.',
    at: [-0.14, 0, 0.045], box: [0.05, 0.05, 0.004] },
  { n: 6, id: 'lidar', name: 'Small motor “LD BOT V0.2.6”', status: 'Inferred', card: 'p-lidar',
    text: 'A compact brushless motor on its own board. The Go2’s spinning LiDAR sits under its chin, so this is most likely what spins it.',
    at: [0.293, 0, -0.06] },
  { n: 7, id: 'fans', name: 'Two 12 V blower fans', status: 'Read', card: 'p-fans',
    text: 'DC brushless blowers from Shenzhen Zhuoming Electronics; one sits beside the core board’s heatsink.',
    at: [0.035, -0.03, 0.005], box: [0.04, 0.012, 0.04] },
  { n: 8, id: 'motors', name: '12 leg motors, one driver each', status: 'Read', card: 'p-motors',
    text: 'Three per leg: hip side-swing, hip, knee. Each outrunner motor has its own driver board (M12_MDRV_V1.9.1) inside the joint. In X-ray they glow at the joints.',
    at: [0, 0, 0] },
]
const STATUS_COLOR: Record<Status, string> = { Read: '#4ade80', Matched: '#fbbf24', Hidden: '#f87171', Inferred: '#c084fc' }

const root = document.getElementById('go2-3d')
const stage = document.getElementById('go2stage')
if (root && stage) main(root, stage).catch(err => { console.error(err); root.classList.add('failed') })

async function main(root: HTMLElement, stage: HTMLElement) {
  const [data, pack] = await Promise.all([
    fetch(DIR + 'go2.json').then(r => r.json()) as Promise<Data>,
    (() => { const l = new GLTFLoader(); l.setMeshoptDecoder(MeshoptDecoder); return l.loadAsync(DIR + 'go2.glb') })(),
  ])

  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  stage.prepend(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(34, 1, 0.01, 20)
  camera.up.set(0, 0, 1)                                  // MuJoCo is Z-up
  const HOME_CAM = new THREE.Vector3(0.7, -0.75, 0.46), HOME_TGT = new THREE.Vector3(0.0, 0, 0.18)
  camera.position.copy(HOME_CAM)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.copy(HOME_TGT)
  controls.enableDamping = true
  controls.enableZoom = false                             // the wheel belongs to the page
  controls.enablePan = false
  controls.minPolarAngle = 0.3
  controls.maxPolarAngle = 1.62

  scene.add(new THREE.HemisphereLight('#dfe7ff', '#0b0d12', 1.25))
  const sun = new THREE.DirectionalLight('#ffffff', 2.4)
  sun.position.set(0.8, -1.2, 1.8)
  sun.castShadow = true
  sun.shadow.mapSize.set(small ? 512 : 1024, small ? 512 : 1024)
  const sc = sun.shadow.camera as THREE.OrthographicCamera
  sc.left = sc.bottom = -0.8; sc.right = sc.top = 0.8; sc.near = 0.2; sc.far = 5
  sun.shadow.bias = -0.0004
  scene.add(sun)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(1.0, 48), new THREE.ShadowMaterial({ opacity: 0.4 }))
  floor.receiveShadow = true
  scene.add(floor)

  // --- meshes by node name (same unpacking as hero.ts: quantised → float) ---
  const geos = new Map<string, THREE.BufferGeometry>()
  pack.scene.updateMatrixWorld(true)
  pack.scene.traverse(o => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    let named: THREE.Object3D | null = o
    while (named && (!named.name || /^mesh_\d+$/.test(named.name))) named = named.parent
    if (!named) return
    const rel = new THREE.Matrix4().copy(named.matrixWorld).invert().multiply(m.matrixWorld)
    const src = m.geometry.attributes.position
    const pos = new Float32Array(src.count * 3)
    for (let i = 0; i < src.count; i++) { pos[i * 3] = src.getX(i); pos[i * 3 + 1] = src.getY(i); pos[i * 3 + 2] = src.getZ(i) }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    if (m.geometry.index) geo.setIndex(m.geometry.index.clone())
    geo.applyMatrix4(rel)
    geo.computeVertexNormals()
    if (!geos.has(named.name)) geos.set(named.name, geo)
  })

  // --- body tree: carrier at the body's position, pivot turns about the joint axis ---
  const pivots = new Map<string, THREE.Group>()
  const joints = new Map<string, { pivot: THREE.Group; axis: THREE.Vector3; range: number[] }>()
  const robot = new THREE.Group()
  scene.add(robot)
  for (const b of data.bodies) {
    const carrier = new THREE.Group()
    carrier.position.fromArray(b.pos)
    const pivot = new THREE.Group()
    carrier.add(pivot)
    ;(b.parent ? pivots.get(b.parent)! : robot).add(carrier)
    pivots.set(b.name, pivot)
    if (b.joint) joints.set(b.joint.name, { pivot, axis: new THREE.Vector3().fromArray(b.joint.axis), range: b.joint.range })
  }
  const base = pivots.get('base')!
  base.parent!.position.z = data.home_height

  const shell: THREE.MeshStandardMaterial[] = []
  const matFor = (c: number[]) => {
    const dark = c[0] + c[1] + c[2] < 0.3
    const m = new THREE.MeshStandardMaterial({
      color: dark ? new THREE.Color('#1b1e25') : new THREE.Color(c[0], c[1], c[2]).multiplyScalar(0.92),
      roughness: dark ? 0.55 : 0.5, metalness: dark ? 0.2 : 0.15,
    })
    shell.push(m)
    return m
  }
  for (const g of data.geoms) {
    const geo = geos.get(g.mesh)
    if (!geo) continue
    const m = new THREE.Mesh(geo, matFor(g.color))
    m.position.fromArray(g.pos)
    m.quaternion.set(g.quat[1], g.quat[2], g.quat[3], g.quat[0])   // MuJoCo quat is w,x,y,z
    m.castShadow = m.receiveShadow = true
    pivots.get(g.body)!.add(m)
  }

  // --- the inside: board blocks and motor rings, shown in X-ray ---
  const inner = new THREE.Group()
  inner.visible = false
  base.add(inner)
  const blocks = new Map<string, THREE.Mesh>()
  // Drawn through the faded shell: no depth test, drawn after it.
  const glow = (color: string, o = 0.9) => new THREE.MeshStandardMaterial({ color, emissive: color, emissiveIntensity: 0.9, transparent: true, opacity: o, depthWrite: false, depthTest: false })
  // The main board everything plugs into ("712 MAIN BOARD-RK").
  const mainBoard = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.075, 0.003), glow('#2dd4bf', 0.35))
  mainBoard.position.set(0, 0, 0.022)
  inner.add(mainBoard)
  for (const p of PARTS) {
    if (!p.box) continue
    const b = new THREE.Mesh(new THREE.BoxGeometry(p.box[0], p.box[1], p.box[2]), glow(STATUS_COLOR[p.status]))
    b.position.fromArray(p.at)
    b.renderOrder = 10
    inner.add(b)
    blocks.set(p.id, b)
  }
  const lidar = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.03, 24), glow(STATUS_COLOR.Inferred))
  lidar.position.fromArray(PARTS.find(p => p.id === 'lidar')!.at)
  inner.add(lidar)
  blocks.set('lidar', lidar)

  const rings: THREE.Mesh[] = []
  const ringMat = glow(STATUS_COLOR.Read, 0.55)
  for (const [name, j] of joints) {
    const r = new THREE.Mesh(new THREE.TorusGeometry(0.03, 0.0035, 8, 36), ringMat)
    r.renderOrder = 5
    // A torus lies in its XY plane; turn its hole onto the joint axis.
    r.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), j.axis)
    // Hip rings sit just outboard of the side-swing axis, like the real motor.
    if (name.endsWith('hip_joint')) r.position.x = name.startsWith('F') ? -0.045 : 0.045
    r.visible = false
    j.pivot.add(r)
    rings.push(r)
  }

  // --- pose: stand, breathe, walk ---
  const q: Record<string, number> = { ...data.home }
  const apply = () => joints.forEach((j, name) => {
    const v = Math.min(j.range[1], Math.max(j.range[0], q[name] ?? 0))
    j.pivot.quaternion.setFromAxisAngle(j.axis, v)
  })
  // Trot in place: diagonal pairs move together, a foot lifts while it swings forward.
  const PHASE: Record<string, number> = { FL: 0, RR: 0, FR: Math.PI, RL: Math.PI }
  const poseAt = (t: number, walking: boolean) => {
    for (const leg of ['FL', 'FR', 'RL', 'RR']) {
      const h = data.home
      if (walking) {
        const s = t * 2 * Math.PI * 1.6 + PHASE[leg]
        const lift = Math.max(0, Math.sin(s))
        q[`${leg}_thigh_joint`] = h[`${leg}_thigh_joint`] - 0.22 * Math.cos(s) - 0.18 * lift
        q[`${leg}_calf_joint`] = h[`${leg}_calf_joint`] - 0.45 * lift
        q[`${leg}_hip_joint`] = 0
      } else {
        const b = Math.sin(t * 1.1) * 0.035
        q[`${leg}_thigh_joint`] = h[`${leg}_thigh_joint`] + b
        q[`${leg}_calf_joint`] = h[`${leg}_calf_joint`] - 2 * b
        q[`${leg}_hip_joint`] = 0
      }
    }
    base.parent!.position.z = data.home_height - (walking ? 0 : Math.sin(t * 1.1) * 0.006)
    base.rotation.x = walking ? Math.sin(t * 2 * Math.PI * 1.6) * 0.03 : 0
  }
  apply()

  // --- pins: numbered buttons that follow their 3D point ---
  const pinsEl = stage.querySelector('.pins') as HTMLElement
  const info = root.querySelector('.info') as HTMLElement
  const pinFor = new Map<string, HTMLButtonElement>()
  for (const p of PARTS) {
    const b = document.createElement('button')
    b.className = 'pin'
    b.type = 'button'
    b.textContent = String(p.n)
    b.style.setProperty('--c', STATUS_COLOR[p.status])
    b.setAttribute('aria-label', `${p.n}. ${p.name}`)
    b.addEventListener('click', () => select(p.id))
    pinsEl.appendChild(b)
    pinFor.set(p.id, b)
  }
  const list = root.querySelector('.plist') as HTMLElement
  for (const p of PARTS) {
    const li = document.createElement('li')
    li.innerHTML = `<button type="button" data-id="${p.id}"><i style="--c:${STATUS_COLOR[p.status]}">${p.n}</i>${p.name}</button>`
    li.querySelector('button')!.addEventListener('click', () => select(p.id))
    list.appendChild(li)
  }

  const worldOf = (p: Part, out: THREE.Vector3) => {
    if (p.id === 'motors') return pivots.get('FL_thigh')!.getWorldPosition(out)
    return base.localToWorld(out.fromArray(p.at))
  }

  let selected: string | null = null
  function select(id: string) {
    selected = selected === id ? null : id
    const p = PARTS.find(x => x.id === selected)
    pinFor.forEach((b, k) => b.classList.toggle('on', k === selected))
    list.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === selected))
    blocks.forEach((m, k) => ((m.material as THREE.MeshStandardMaterial).emissiveIntensity = k === selected ? 2.2 : 0.9))
    ringMat.emissiveIntensity = selected === 'motors' ? 2.2 : 0.9
    if (p && !xray) setXray(true)
    info.innerHTML = p
      ? `<p class="k"><span class="chip" style="--c:${STATUS_COLOR[p.status]}">${p.status}</span> Part ${p.n}</p><h3>${p.name}</h3><p>${p.text}</p><p><a href="#${p.card}">Full details and FCC page ↓</a></p>`
      : `<p class="k">Tap a number</p><p>Each number is a part read from the FCC filing. X-ray fades the shell to show where it sits.</p>`
    invalidate()
  }

  // --- X-ray ---
  let xray = false
  const xrayBtn = root.querySelector('[data-act="xray"]') as HTMLButtonElement
  function setXray(on: boolean) {
    xray = on
    inner.visible = on
    rings.forEach(r => (r.visible = on))
    for (const m of shell) {
      m.transparent = on
      m.opacity = on ? 0.16 : 1
      m.depthWrite = !on
      m.needsUpdate = true
    }
    root.classList.toggle('xr', on)
    xrayBtn.classList.toggle('on', on)
    xrayBtn.setAttribute('aria-pressed', String(on))
    invalidate()
  }
  xrayBtn.addEventListener('click', () => setXray(!xray))

  let walking = false
  const walkBtn = root.querySelector('[data-act="walk"]') as HTMLButtonElement
  walkBtn.addEventListener('click', () => {
    walking = !walking
    walkBtn.classList.toggle('on', walking)
    walkBtn.setAttribute('aria-pressed', String(walking))
    walkBtn.textContent = walking ? 'Stop' : 'Walk'
    invalidate()
  })
  ;(root.querySelector('[data-act="reset"]') as HTMLButtonElement).addEventListener('click', () => {
    camera.position.copy(HOME_CAM); controls.target.copy(HOME_TGT); controls.update()
    if (selected) select(selected)
    setXray(false)
  })

  // --- size, render on demand ---
  let w = 1, h = 1
  const resize = () => {
    w = stage.clientWidth; h = stage.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    // Pull back on narrow screens so the whole dog stays in view.
    camera.zoom = Math.min(1, camera.aspect / 1.35)
    camera.updateProjectionMatrix()
  }
  resize()

  let dirty = true
  const invalidate = () => { dirty = true }
  controls.addEventListener('change', invalidate)
  new ResizeObserver(() => { resize(); invalidate() }).observe(stage)
  let visible = true
  new IntersectionObserver(es => { visible = es[0].isIntersecting; invalidate() }, { rootMargin: '100px' }).observe(stage)

  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  const v = new THREE.Vector3()
  const placePins = () => {
    for (const p of PARTS) {
      worldOf(p, v).project(camera)
      const b = pinFor.get(p.id)!
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05
      b.style.transform = `translate(${((v.x * 0.5 + 0.5) * w).toFixed(1)}px, ${((-v.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%, -50%)`
      b.style.visibility = off ? 'hidden' : 'visible'
    }
  }

  const t0 = performance.now()
  renderer.setAnimationLoop(() => {
    if (!visible) return
    const moving = walking || !calm
    if (moving) {
      poseAt((performance.now() - t0) / 1000, walking)
      apply()
      dirty = true
    }
    if (!dirty) return
    dirty = false
    controls.update()
    scene.updateMatrixWorld()
    placePins()
    renderer.render(scene, camera)
  })

  select(PARTS[0].id); select(PARTS[0].id)   // write the empty-state panel text
  setXray(false)
  ;(window as any).__go2 = { q, joints, camera, controls, setXray, select, invalidate, poseAt, apply }
  root.classList.add('ready')
}
