import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js'
import { buildMower, buildVacuum, go1Inside, g1Inside, light } from './rebuilt'

// The 3D view on every photo-teardown page (/inside/<slug>/). (The file keeps
// its first name, toon.ts, from a cartoon-shaded version he turned down: it is
// now realistic, physically based materials, the same look as the Go2 page.)
// One file for all robots: the page carries its own settings in
// <script id="toon-data">, written by build_teardowns.py from teardowns.py.
//   kind 'menagerie' -> Unitree's published model from /3d/<slug>.json + .glb
//   kind 'mower' / 'vacuum' -> an approximate shape built here, sized from the
//   teardown photos (the page says it is approximate).
// Style rules for this site: realistic 3D, no outlines, one accent colour for
// the inside parts; status is shown by pin shape, never by colour.

type Shape = 'h' | 'm' | 'x' | 'i' | 'n'
interface Pin { n: number; part: string; name: string; text: string; status: Shape; at?: number[]; body?: string }
interface Cfg { slug: string; kind: 'menagerie' | 'mower' | 'vacuum'; play: string; view: number[]; pins: Pin[] }
interface Robot {
  group: THREE.Group
  shell: THREE.Material[]                       // faded in X-ray
  inner: THREE.Object3D[]                       // shown in X-ray
  parts: Map<string, THREE.Object3D>            // part id -> its rebuilt 3D object (pins find it, picks light it)
  anchor: (body?: string) => THREE.Object3D
  tick: (t: number, playing: boolean) => boolean // true when something moved
}

const ACCENT = '#7dd3fc'

// --- realistic materials: each surface gets a finish, lit by a soft room ---
type Finish = 'plastic' | 'gloss' | 'rubber' | 'metal' | 'glass'
const FINISH: Record<Finish, { roughness: number; metalness: number }> = {
  plastic: { roughness: 0.5, metalness: 0.1 }, gloss: { roughness: 0.26, metalness: 0.05 },
  rubber: { roughness: 0.88, metalness: 0 }, metal: { roughness: 0.32, metalness: 0.85 },
  glass: { roughness: 0.06, metalness: 0.3 },
}
const mat = (color: THREE.ColorRepresentation, finish: Finish, shell?: THREE.Material[]) => {
  const m = new THREE.MeshStandardMaterial({ color, ...FINISH[finish] })
  shell?.push(m)
  return m
}

async function main(root: HTMLElement, stage: HTMLElement, cfg: Cfg) {
  const robot: Robot = cfg.kind === 'menagerie' ? await menagerie(cfg)
    : { ...(cfg.kind === 'mower' ? buildMower() : buildVacuum()), anchor: function (this: void) { return robot.group } }
  stage.querySelector('.load')?.remove()

  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  stage.prepend(renderer.domElement)

  const scene = new THREE.Scene()
  // A soft studio room for reflections, so plastic, rubber and metal read as themselves.
  const pmrem = new THREE.PMREMGenerator(renderer)
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture
  scene.environmentIntensity = 0.55
  pmrem.dispose()
  scene.add(robot.group)
  for (const o of robot.inner) o.visible = false
  robot.group.traverse(o => { const m = o as THREE.Mesh; if (m.isMesh && !m.userData.noShadow) m.castShadow = true })
  scene.add(new THREE.HemisphereLight('#dfe7ff', '#0b0d12', 0.9))
  const sun = new THREE.DirectionalLight('#ffffff', 2.4)
  scene.add(sun, sun.target)

  // Frame the robot from its own size, looking from cfg.view.
  scene.updateMatrixWorld(true)
  const bb = new THREE.Box3()
  robot.group.traverseVisible(o => { const m = o as THREE.Mesh; if (m.isMesh) bb.expandByObject(m) })
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
  controls.enableZoom = false                             // the wheel belongs to the page...
  controls.enablePan = false
  controls.minPolarAngle = 0.2
  controls.maxPolarAngle = cfg.kind === 'menagerie' ? 1.75 : 2.6   // mower and vacuum: turn them over
  controls.minDistance = dist * 0.08
  controls.maxDistance = dist * 1.8
  // ...until you click the model: then the wheel (or a pinch) zooms in to read the chips.
  renderer.domElement.addEventListener('pointerdown', () => { controls.enableZoom = true })
  root.addEventListener('mouseleave', () => { controls.enableZoom = false })

  // --- where each pin sits: on top of its rebuilt part, or at a fixed point ---
  robot.group.updateMatrixWorld(true)
  const pinObj = new Map<number, { obj: THREE.Object3D; local: THREE.Vector3; r: number }>()
  for (const p of cfg.pins) {
    const obj = robot.parts.get(p.part)
    if (!obj || p.at) continue
    const bb = new THREE.Box3().setFromObject(obj, true)
    const c = bb.getCenter(new THREE.Vector3()); c.z = bb.max.z
    pinObj.set(p.n, { obj, local: obj.worldToLocal(c.clone()), r: bb.getBoundingSphere(new THREE.Sphere()).radius })
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
  const worldOf = (p: Pin, out: THREE.Vector3) => {
    const o = pinObj.get(p.n)
    return o ? o.obj.localToWorld(out.copy(o.local)) : robot.anchor(p.body).localToWorld(out.fromArray(p.at ?? [0, 0, 0]))
  }

  const LABEL: Record<Shape, string> = { h: 'Read', m: 'Matched', x: 'Ground blank', i: 'Inferred', n: 'Not visible' }
  let selected: number | null = null
  function select(n: number) {
    selected = selected === n ? null : n
    const p = cfg.pins.find(x => x.n === selected)
    pinFor.forEach((b, k) => b.classList.toggle('on', k === selected))
    list.querySelectorAll('button').forEach(b => b.classList.toggle('on', Number(b.dataset.n) === selected))
    robot.parts.forEach((o, part) => light(o, !!p && p.part === part))
    if (p && robot.parts.has(p.part) && !xray) setXray(true)
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
    const near = pinObj.get(p.n)
    // Close enough to read the markings on a board; further back for big parts.
    const d = near ? Math.max(near.r * 3.2, dist * 0.12) : dist * 0.62
    goal = { pos: at.clone().addScaledVector(dir, d), tgt: at }
  }

  // --- X-ray ---
  let xray = false
  const xrayBtn = root.querySelector('[data-act="xray"]') as HTMLButtonElement
  function setXray(on: boolean) {
    xray = on
    for (const o of robot.inner) o.visible = on
    for (const m of robot.shell) {
      m.transparent = on || !!m.userData.alwaysTransparent
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

  // Two finishes from the model's own two materials: dark parts and light parts.
  const shell: THREE.Material[] = []
  // A robot drawn only in dark parts (the Go1) gets a mid grey, or it vanishes on the dark page.
  const allDark = data.geoms.every(g => g.color[0] + g.color[1] + g.color[2] < 1)
  const DARK = mat(allDark ? '#5b616c' : '#1b1e25', 'plastic', shell), LIGHT = mat('#d9dde3', 'plastic', shell)
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

  const bodies = data.bodies.map(b => ({ name: b.name, joint: b.joint }))
  const inside = cfg.slug === 'unitree-go1' ? go1Inside(pivots, bodies) : g1Inside(pivots, bodies)

  return {
    group, shell, inner: inside.inner, parts: inside.parts,
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

// Start last: the mower and vacuum are built synchronously, so every constant
// above (FINISH, mat) must exist before main() runs.
const rootEl = document.getElementById('toon-3d')
const stageEl = document.getElementById('toonstage')
const dataEl = document.getElementById('toon-data')
if (rootEl && stageEl && dataEl) {
  main(rootEl, stageEl, JSON.parse(dataEl.textContent || '{}')).catch(err => { console.error(err); rootEl.classList.add('failed') })
}
