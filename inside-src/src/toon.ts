import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

// The cartoon 3D view on every photo-teardown page (/inside/<slug>/).
// One file for all robots: the page carries its own settings in
// <script id="toon-data">, written by build_teardowns.py from teardowns.py.
//   kind 'menagerie' -> Unitree's published model from /3d/<slug>.json + .glb
//   kind 'mower' / 'vacuum' -> an approximate shape built here, sized from the
//   teardown photos (the page says it is approximate).
// Style rules for this site: flat cartoon shading, no outlines, one accent
// colour; status is shown by pin shape, never by colour.

type Shape = 'h' | 'm' | 'x' | 'i' | 'n'
interface Pin { n: number; part: string; name: string; text: string; status: Shape; at: number[]; body?: string; box?: number[] }
interface Cfg { slug: string; kind: 'menagerie' | 'mower' | 'vacuum'; play: string; view: number[]; pins: Pin[] }
interface Robot {
  group: THREE.Group
  shell: THREE.Material[]                       // faded in X-ray
  inner: THREE.Object3D[]                       // shown in X-ray
  anchor: (body?: string) => THREE.Object3D
  tick: (t: number, playing: boolean) => boolean // true when something moved
}

const ACCENT = '#7dd3fc'

// --- cartoon shading: three flat steps of light, no gradients in between ---
const RAMP = (() => {
  const t = new THREE.DataTexture(new Uint8Array([88, 88, 88, 255, 165, 165, 165, 255, 255, 255, 255, 255]), 3, 1, THREE.RGBAFormat)
  t.minFilter = t.magFilter = THREE.NearestFilter
  t.generateMipmaps = false
  t.needsUpdate = true
  return t
})()
const toon = (color: THREE.ColorRepresentation, shell?: THREE.Material[]) => {
  const m = new THREE.MeshToonMaterial({ color, gradientMap: RAMP })
  shell?.push(m)
  return m
}
const innerMat = () => new THREE.MeshToonMaterial({ color: ACCENT, gradientMap: RAMP, emissive: ACCENT, emissiveIntensity: 0.15 })

async function main(root: HTMLElement, stage: HTMLElement, cfg: Cfg) {
  const robot = cfg.kind === 'menagerie' ? await menagerie(cfg) : cfg.kind === 'mower' ? mower(cfg) : vacuum(cfg)
  stage.querySelector('.load')?.remove()

  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  stage.prepend(renderer.domElement)

  const scene = new THREE.Scene()
  scene.add(robot.group)
  robot.group.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh && !m.userData.noShadow) m.castShadow = true })
  scene.add(new THREE.HemisphereLight('#ffffff', '#2a2f3a', 1.35))
  const sun = new THREE.DirectionalLight('#ffffff', 2.2)
  scene.add(sun, sun.target)

  // Frame the robot from its own size, looking from cfg.view.
  scene.updateMatrixWorld(true)
  const bb = new THREE.Box3()
  robot.group.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh && m.visible) bb.expandByObject(m) })
  const sphere = bb.getBoundingSphere(new THREE.Sphere())
  const FOV = 30
  const camera = new THREE.PerspectiveCamera(FOV, 1, sphere.radius * 0.05, sphere.radius * 20)
  camera.up.set(0, 0, 1)
  const HOME_TGT = sphere.center.clone()
  const dist = sphere.radius / Math.sin(THREE.MathUtils.degToRad(FOV / 2)) * 1.1
  const HOME_CAM = HOME_TGT.clone().add(new THREE.Vector3().fromArray(cfg.view).normalize().multiplyScalar(dist))
  camera.position.copy(HOME_CAM)

  sun.position.copy(sphere.center).add(new THREE.Vector3(0.6, -0.9, 1.6).multiplyScalar(sphere.radius * 2))
  sun.target.position.copy(sphere.center)
  sun.castShadow = true
  sun.shadow.mapSize.set(small ? 512 : 1024, small ? 512 : 1024)
  const sc = sun.shadow.camera as THREE.OrthographicCamera
  sc.left = sc.bottom = -sphere.radius * 1.4; sc.right = sc.top = sphere.radius * 1.4
  sc.near = sphere.radius * 0.2; sc.far = sphere.radius * 6
  sun.shadow.bias = -0.0005
  const floor = new THREE.Mesh(new THREE.CircleGeometry(sphere.radius * 1.6, 48), new THREE.ShadowMaterial({ opacity: 0.35 }))
  floor.receiveShadow = true
  scene.add(floor)

  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.copy(HOME_TGT)
  controls.enableDamping = true
  controls.enableZoom = false                             // the wheel belongs to the page
  controls.enablePan = false
  controls.minPolarAngle = 0.25
  controls.maxPolarAngle = 1.62

  // --- inside parts: shown in X-ray, one colour ---
  for (const o of robot.inner) o.visible = false
  const boxFor = new Map<string, THREE.Mesh>()
  for (const p of cfg.pins) {
    if (!p.box) continue
    const m = new THREE.Mesh(new RoundedBoxGeometry(p.box[0], p.box[1], p.box[2], 2, Math.min(...p.box) * 0.35), innerMat())
    m.position.fromArray(p.at)
    m.visible = false
    m.userData.noShadow = true
    robot.anchor(p.body).add(m)
    robot.inner.push(m)
    boxFor.set(p.part, m)
  }

  // --- pins: numbered buttons that follow their 3D point; shape = status ---
  const pinsEl = stage.querySelector('.pins') as HTMLElement
  const info = root.querySelector('.info') as HTMLElement
  const list = root.querySelector('.plist') as HTMLElement
  const pinFor = new Map<number, HTMLButtonElement>()
  for (const p of cfg.pins) {
    const b = document.createElement('button')
    b.type = 'button'
    b.className = 'pin s-' + p.status
    b.textContent = String(p.n)
    b.style.setProperty('--c', '#e9edf3')
    b.setAttribute('aria-label', `${p.n}. ${p.name}`)
    b.addEventListener('click', () => select(p.n))
    pinsEl.appendChild(b)
    pinFor.set(p.n, b)
    const li = document.createElement('li')
    li.innerHTML = `<button type="button" data-n="${p.n}"><i class="s-${p.status}" style="--c:#e9edf3">${p.n}</i>${p.name}</button>`
    li.querySelector('button')!.addEventListener('click', () => select(p.n))
    list.appendChild(li)
  }
  const worldOf = (p: Pin, out: THREE.Vector3) => robot.anchor(p.body).localToWorld(out.fromArray(p.at))

  const LABEL: Record<Shape, string> = { h: 'Read', m: 'Matched', x: 'Ground blank', i: 'Inferred', n: 'Not visible' }
  let selected: number | null = null
  function select(n: number) {
    selected = selected === n ? null : n
    const p = cfg.pins.find(x => x.n === selected)
    pinFor.forEach((b, k) => b.classList.toggle('on', k === selected))
    list.querySelectorAll('button').forEach(b => b.classList.toggle('on', Number(b.dataset.n) === selected))
    boxFor.forEach((m, part) => { (m.material as THREE.MeshToonMaterial).emissiveIntensity = p && p.part === part ? 0.9 : 0.15 })
    if (p && p.box && !xray) setXray(true)
    focus(p ?? null)
    info.innerHTML = p
      ? `<p class="k"><span class="chip"><i class="st ${p.status}"></i>${LABEL[p.status]}</span> Part ${p.n}</p><h3>${p.name}</h3><p>${p.text}</p><p><a href="#p-${p.part}">Full details ↓</a></p>`
      : `<p class="k">Tap a number</p><p>Each number is a part found in the teardown. X-ray fades the shell to show where the parts sit inside.</p>`
    invalidate()
  }

  // --- camera glide to a picked part ---
  let goal: { pos: THREE.Vector3; tgt: THREE.Vector3 } | null = null
  function focus(p: Pin | null) {
    if (!p) { goal = { pos: HOME_CAM.clone(), tgt: HOME_TGT.clone() }; return }
    const at = worldOf(p, new THREE.Vector3())
    const dir = camera.position.clone().sub(controls.target).normalize()
    goal = { pos: at.clone().addScaledVector(dir, dist * 0.62), tgt: at }
  }

  // --- X-ray ---
  let xray = false
  const xrayBtn = root.querySelector('[data-act="xray"]') as HTMLButtonElement
  function setXray(on: boolean) {
    xray = on
    for (const o of robot.inner) o.visible = on
    for (const m of robot.shell) {
      m.transparent = on
      m.opacity = on ? 0.14 : 1
      m.depthWrite = !on
      m.needsUpdate = true
    }
    xrayBtn.classList.toggle('on', on)
    xrayBtn.setAttribute('aria-pressed', String(on))
    invalidate()
  }
  xrayBtn.addEventListener('click', () => setXray(!xray))

  let playing = false
  const playBtn = root.querySelector('[data-act="play"]') as HTMLButtonElement
  playBtn.textContent = cfg.play
  playBtn.addEventListener('click', () => {
    playing = !playing
    playBtn.classList.toggle('on', playing)
    playBtn.setAttribute('aria-pressed', String(playing))
    playBtn.textContent = playing ? 'Stop' : cfg.play
    invalidate()
  })
  ;(root.querySelector('[data-act="reset"]') as HTMLButtonElement).addEventListener('click', () => {
    goal = null; camera.position.copy(HOME_CAM); controls.target.copy(HOME_TGT); controls.update()
    if (selected !== null) select(selected)
    setXray(false)
  })

  // --- size, render on demand ---
  let w = 1, h = 1
  const resize = () => {
    w = stage.clientWidth; h = stage.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.zoom = Math.min(1, camera.aspect / 1.35)
    camera.updateProjectionMatrix()
  }
  resize()
  let dirty = true
  const invalidate = () => { dirty = true }
  controls.addEventListener('change', invalidate)
  controls.addEventListener('start', () => { goal = null })
  new ResizeObserver(() => { resize(); invalidate() }).observe(stage)
  let visible = true
  new IntersectionObserver(es => { visible = es[0].isIntersecting; invalidate() }, { rootMargin: '100px' }).observe(stage)

  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  const v = new THREE.Vector3()
  const placePins = () => {
    for (const p of cfg.pins) {
      worldOf(p, v).project(camera)
      const b = pinFor.get(p.n)!
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05
      b.style.transform = `translate(${((v.x * 0.5 + 0.5) * w).toFixed(1)}px, ${((-v.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%, -50%)`
      b.style.visibility = off ? 'hidden' : 'visible'
    }
  }

  const t0 = performance.now()
  renderer.setAnimationLoop(() => {
    if (!visible) return
    if (goal) {
      camera.position.lerp(goal.pos, 0.12); controls.target.lerp(goal.tgt, 0.12)
      if (camera.position.distanceTo(goal.pos) < dist * 0.002) goal = null
      dirty = true
    }
    if ((playing || !calm) && robot.tick((performance.now() - t0) / 1000, playing)) dirty = true
    if (!dirty) return
    dirty = false
    controls.update()
    scene.updateMatrixWorld()
    placePins()
    renderer.render(scene, camera)
  })

  select(cfg.pins[0].n); select(cfg.pins[0].n)   // write the empty-state panel
  setXray(false)
  root.classList.add('ready')
  ;(window as any).__toon = { camera, controls, setXray, select, invalidate, robot, play: (on: boolean) => { if (on !== playing) playBtn.click() } }
}

// ---------------------------------------------------------------------------
// Unitree's published models (MuJoCo Menagerie): body tree + one packed GLB.
interface Body { name: string; parent: string | null; pos: number[]; quat: number[]; joint: { name: string; axis: number[]; range: number[] } | null }
interface Geom { body: string; mesh: string; color: number[]; pos: number[]; quat: number[] }
interface MData { bodies: Body[]; geoms: Geom[]; home: Record<string, number>; home_height: number }

async function menagerie(cfg: Cfg): Promise<Robot> {
  const loader = new GLTFLoader()
  loader.setMeshoptDecoder(MeshoptDecoder)
  const [data, pack] = await Promise.all([
    fetch(`/3d/${cfg.slug}.json`).then(r => r.json()) as Promise<MData>,
    loader.loadAsync(`/3d/${cfg.slug}.glb`),
  ])
  // Meshes by node name. gltfpack quantises positions under a scale/offset
  // node: walk up to the real named node and bake to Float32 (see hero.ts).
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

  const group = new THREE.Group()
  const pivots = new Map<string, THREE.Group>()
  const joints = new Map<string, { pivot: THREE.Group; axis: THREE.Vector3; home: number }>()
  for (const b of data.bodies) {
    const carrier = new THREE.Group()
    carrier.position.fromArray(b.pos)
    carrier.quaternion.set(b.quat[1], b.quat[2], b.quat[3], b.quat[0])   // MuJoCo quat is w,x,y,z
    const pivot = new THREE.Group()
    carrier.add(pivot)
    ;(b.parent ? pivots.get(b.parent)! : group).add(carrier)
    pivots.set(b.name, pivot)
    if (b.joint) joints.set(b.joint.name, { pivot, axis: new THREE.Vector3().fromArray(b.joint.axis).normalize(), home: data.home[b.joint.name] ?? 0 })
  }
  const first = data.bodies[0]
  pivots.get(first.name)!.parent!.position.z = data.home_height

  // Cartoon palette from the model's own two materials: dark parts and light parts.
  const shell: THREE.Material[] = []
  // A robot drawn only in dark parts (the Go1) gets a lighter grey, or it vanishes on the dark page.
  const allDark = data.geoms.every(g => g.color[0] + g.color[1] + g.color[2] < 1)
  const DARK = toon(allDark ? '#6a7281' : '#3b404b', shell), LIGHT = toon('#dfe3ea', shell)
  for (const g of data.geoms) {
    const geo = geos.get(g.mesh)
    if (!geo) continue
    const m = new THREE.Mesh(geo, g.color[0] + g.color[1] + g.color[2] < 1 ? DARK : LIGHT)
    m.position.fromArray(g.pos)
    m.quaternion.set(g.quat[1], g.quat[2], g.quat[3], g.quat[0])
    pivots.get(g.body)!.add(m)
  }

  const set = (name: string, q: number) => { const j = joints.get(name); if (j) j.pivot.quaternion.setFromAxisAngle(j.axis, q) }
  joints.forEach((j, name) => set(name, j.home))
  const legs = ['FR', 'FL', 'RR', 'RL']
  const isDog = joints.has('FR_thigh_joint')
  let wasPlaying = false

  return {
    group, shell, inner: [],
    anchor: body => (body && pivots.get(body)) || pivots.get(first.name)!,
    tick: (t, playing) => {
      if (!playing && !wasPlaying) {
        // Idle: a slow breath, so the robot never looks frozen.
        const s = Math.sin(t * 1.6) * 0.5 + 0.5
        if (isDog) for (const l of legs) { set(`${l}_thigh_joint`, (joints.get(`${l}_thigh_joint`)!.home) + 0.05 * s); set(`${l}_calf_joint`, joints.get(`${l}_calf_joint`)!.home - 0.1 * s) }
        else { set('waist_pitch_joint', 0.03 * s); set('left_elbow_joint', 1.28 + 0.06 * s); set('right_elbow_joint', 1.28 + 0.06 * s) }
        return true
      }
      wasPlaying = playing
      if (isDog) {
        // Trot in place: diagonal pairs lift together.
        const w = t * Math.PI * 2 * 2.2
        for (const l of legs) {
          const ph = w + (l === 'FR' || l === 'RL' ? 0 : Math.PI)
          const lift = Math.max(0, Math.sin(ph))
          set(`${l}_thigh_joint`, joints.get(`${l}_thigh_joint`)!.home + 0.22 * Math.cos(ph) * 0.6 + 0.15 * lift)
          set(`${l}_calf_joint`, joints.get(`${l}_calf_joint`)!.home - 0.45 * lift)
        }
      } else {
        // Humanoid: raise the right arm and wave.
        const w = Math.sin(t * Math.PI * 2 * 1.4)
        set('right_shoulder_pitch_joint', -1.1)
        set('right_shoulder_roll_joint', -0.5)
        set('right_shoulder_yaw_joint', 0.2)
        set('right_elbow_joint', 0.2 + 0.1 * w)
        set('right_wrist_roll_joint', 0.5 * w)
        set('waist_yaw_joint', 0.05 * w)
      }
      if (!playing) joints.forEach((j, name) => set(name, j.home))
      return true
    },
  }
}

// ---------------------------------------------------------------------------
// Robot lawn mower (Segway Navimow X3): an approximate shape, metres, Z-up,
// X forward. Body about 0.70 x 0.50 m; boards and battery sized from the photos.
function mower(cfg: Cfg): Robot {
  const group = new THREE.Group(), shell: THREE.Material[] = [], inner: THREE.Object3D[] = []
  const BODY = toon('#3a3f48', shell), TOP = toon('#555b66', shell), BLACK = toon('#22252b', shell)
  const TYRE = toon('#f2762e', shell), HUB = toon('#2a2e35', shell), GLASS = toon('#9fb3c8', shell)

  const chassis = new THREE.Mesh(new RoundedBoxGeometry(0.6, 0.42, 0.14, 4, 0.05), BODY)
  chassis.position.set(0.02, 0, 0.13)
  const cover = new THREE.Mesh(new RoundedBoxGeometry(0.5, 0.36, 0.07, 4, 0.03), TOP)
  cover.position.set(0.0, 0, 0.215)
  const nose = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.34, 0.11, 4, 0.04), BODY)
  nose.position.set(0.3, 0, 0.12)
  // Front camera module with two lenses.
  const cam = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.2, 0.06, 3, 0.02), BLACK)
  cam.position.set(0.28, 0, 0.27)
  const lensGeo = new THREE.CylinderGeometry(0.014, 0.014, 0.012, 20)
  for (const y of [-0.05, 0.05]) {
    const lens = new THREE.Mesh(lensGeo, GLASS)
    lens.rotation.z = Math.PI / 2
    lens.position.set(0.318, y, 0.275)
    group.add(lens)
  }
  const stop = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.02, 28), BLACK)
  stop.rotation.x = Math.PI / 2
  stop.position.set(-0.08, 0, 0.255)
  group.add(chassis, cover, nose, cam, stop)

  // Big rear drive wheels with chunky treads, small front casters.
  const wheels: THREE.Group[] = []
  const tyreGeo = new THREE.CylinderGeometry(0.13, 0.13, 0.075, 36)
  const lugGeo = new THREE.BoxGeometry(0.03, 0.08, 0.02)
  for (const y of [-0.27, 0.27]) {
    const w = new THREE.Group()
    const tyre = new THREE.Mesh(tyreGeo, TYRE)
    w.add(tyre)
    for (let i = 0; i < 14; i++) {
      const lug = new THREE.Mesh(lugGeo, TYRE)
      const a = (i / 14) * Math.PI * 2
      lug.position.set(Math.cos(a) * 0.135, 0, Math.sin(a) * 0.135)
      lug.rotation.y = -a
      w.add(lug)
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.08, 24), HUB)
    w.add(hub)
    w.position.set(-0.17, y, 0.13)
    group.add(w)
    wheels.push(w)
  }
  for (const y of [-0.15, 0.15]) {
    const c = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.04, 20), BLACK)
    c.position.set(0.28, y, 0.045)
    group.add(c)
  }
  // Blade disc under the middle.
  const blade = new THREE.Group()
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.01, 32), HUB)
  disc.rotation.x = Math.PI / 2                     // cylinder axis Y -> Z (flat disc)
  blade.add(disc)
  for (let i = 0; i < 3; i++) {
    const b = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.018, 0.004), GLASS)
    const a = (i / 3) * Math.PI * 2
    b.position.set(Math.cos(a) * 0.12, Math.sin(a) * 0.12, 0)
    b.rotation.z = a
    blade.add(b)
  }
  blade.position.set(0.03, 0, 0.04)
  group.add(blade)

  // Inside, shown in X-ray: the two boards, the battery, the three motors.
  const INNER = innerMat()
  const board = (x: number, y: number, z: number, sx: number, sy: number) => {
    const m = new THREE.Mesh(new RoundedBoxGeometry(sx, sy, 0.004, 2, 0.0015), INNER)
    m.position.set(x, y, z); inner.push(m); group.add(m); return m
  }
  board(0.17, 0, 0.19, 0.15, 0.075)                  // Chameleon_cpu
  board(-0.1, 0, 0.12, 0.24, 0.17)                   // Chameleon_DRIVER_HP
  const batt = new THREE.Mesh(new RoundedBoxGeometry(0.16, 0.1, 0.07, 3, 0.01), INNER)
  batt.position.set(0.05, 0, 0.1); inner.push(batt); group.add(batt)
  for (const y of [-0.2, 0.2]) {
    const mot = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.06, 20), INNER)
    mot.position.set(-0.17, y, 0.13); inner.push(mot); group.add(mot)
  }
  const bm = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.06, 20), INNER)
  bm.rotation.x = Math.PI / 2
  bm.position.set(0.03, 0, 0.08); inner.push(bm); group.add(bm)

  let spin = 0, last = 0
  return {
    group, shell, inner,
    anchor: () => group,
    tick: (t, playing) => {
      const dt = Math.min(0.05, t - last); last = t
      if (!playing) return false
      spin += dt
      for (const w of wheels) w.rotation.y = spin * 3
      blade.rotation.z = spin * 28
      return true
    },
  }
}

// ---------------------------------------------------------------------------
// Robot vacuum (Roborock Qrevo Curv 2 Flow): an approximate shape, 0.35 m
// across, LiDAR turret on top, roller mop at the back.
function vacuum(cfg: Cfg): Robot {
  const group = new THREE.Group(), shell: THREE.Material[] = [], inner: THREE.Object3D[] = []
  const WHITE = toon('#e8ebf0', shell), GREY = toon('#9aa1ad', shell), DARK = toon('#2a2e35', shell), MOP = toon('#c9ced6', shell)

  // Body: a lathe profile gives the soft rounded rim a cartoon reads well.
  const prof = [[0, 0.012], [0.165, 0.012], [0.175, 0.03], [0.176, 0.07], [0.168, 0.088], [0.14, 0.095], [0, 0.095]]
    .map(([r, z]) => new THREE.Vector2(r, z))
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 64), WHITE)
  body.rotation.x = Math.PI / 2
  group.add(body)
  // Front bumper band: an open arc centred on +X (theta = PI/2 is local +X).
  const BUMP = toon('#9aa1ad', shell)
  BUMP.side = THREE.DoubleSide
  const bumper = new THREE.Mesh(new THREE.CylinderGeometry(0.178, 0.178, 0.045, 64, 1, true, Math.PI * 0.08, Math.PI * 0.84), BUMP)
  bumper.rotation.x = Math.PI / 2
  bumper.position.z = 0.045
  group.add(bumper)
  // LiDAR turret, forward of centre; it spins.
  const turret = new THREE.Group()
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.043, 0.043, 0.03, 40), DARK)
  cap.rotation.x = Math.PI / 2
  turret.add(cap)
  const win = new THREE.Mesh(new THREE.BoxGeometry(0.012, 0.03, 0.012), GREY)
  win.position.set(0.042, 0, 0)
  turret.add(win)
  turret.position.set(0.06, 0, 0.112)
  group.add(turret)
  // Wheels, side brush, roller mop.
  for (const y of [-0.12, 0.12]) {
    const w = new THREE.Mesh(new THREE.CylinderGeometry(0.034, 0.034, 0.022, 24), DARK)
    w.position.set(0.0, y, 0.03)
    group.add(w)
  }
  const brush = new THREE.Group()
  for (let i = 0; i < 4; i++) {
    const arm = new THREE.Mesh(new THREE.BoxGeometry(0.045, 0.004, 0.002), DARK)
    arm.position.x = 0.0225
    const holder = new THREE.Group()
    holder.rotation.z = (i / 4) * Math.PI * 2
    holder.add(arm)
    brush.add(holder)
  }
  brush.position.set(0.13, -0.1, 0.01)
  group.add(brush)
  const roller = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.27, 28), MOP)
  roller.position.set(-0.11, 0, 0.022)
  group.add(roller)

  // Inside, shown in X-ray: U-shaped main board, battery, fan, LiDAR board.
  const INNER = innerMat()
  const u = new THREE.Shape()
  u.moveTo(-0.11, -0.05); u.lineTo(0.11, -0.05); u.lineTo(0.11, 0.07); u.lineTo(0.05, 0.07); u.lineTo(0.05, 0.0)
  u.lineTo(-0.05, 0.0); u.lineTo(-0.05, 0.07); u.lineTo(-0.11, 0.07); u.closePath()
  const main = new THREE.Mesh(new THREE.ExtrudeGeometry(u, { depth: 0.003, bevelEnabled: false }), INNER)
  main.rotation.z = -Math.PI / 2
  main.position.set(0.0, 0, 0.07)
  const batt = new THREE.Mesh(new RoundedBoxGeometry(0.09, 0.07, 0.065, 3, 0.008), INNER)
  batt.position.set(-0.01, 0, 0.045)
  const fan = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.045, 28), INNER)
  fan.rotation.x = Math.PI / 2
  fan.position.set(-0.075, 0.07, 0.05)
  const lb = new THREE.Mesh(new THREE.CylinderGeometry(0.028, 0.028, 0.004, 28), INNER)
  lb.rotation.x = Math.PI / 2
  lb.position.set(0.06, 0, 0.098)
  for (const m of [main, batt, fan, lb]) { inner.push(m); group.add(m) }

  let spin = 0, last = 0
  return {
    group, shell, inner,
    anchor: () => group,
    tick: (t, playing) => {
      const dt = Math.min(0.05, t - last); last = t
      spin += dt
      turret.rotation.z = spin * (playing ? 9 : 1.2)   // the LiDAR always turns a little
      if (playing) { brush.rotation.z = -spin * 14; roller.rotation.y = spin * 10 }
      return true
    },
  }
}

// Start last: the mower and vacuum are built synchronously, so every constant
// above (RAMP, toon, innerMat) must exist before main() runs.
const rootEl = document.getElementById('toon-3d')
const stageEl = document.getElementById('toonstage')
const dataEl = document.getElementById('toon-data')
if (rootEl && stageEl && dataEl) {
  main(rootEl, stageEl, JSON.parse(dataEl.textContent || '{}')).catch(err => { console.error(err); rootEl.classList.add('failed') })
}
