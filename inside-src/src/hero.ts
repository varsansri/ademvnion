import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'

// The SO-ARM101 posed live in the homepage hero. Same data files as the
// /inside/ teardown, trimmed to one thing: grab a part and the joint above
// it turns. No side panel, no explode, transparent background.

const DIR = '/inside/so-arm101/'

interface Instance { id: string; link: string; mesh: string | null; part: string; xyz: number[]; rpy: number[]; box?: number[]; color?: string }
interface Joint { name: string; type: string; parent: string; child: string; xyz: number[]; rpy: number[]; axis: number[]; lower: number; upper: number }
interface Part { id: string; category: string; shown: boolean }
interface Data { links: { name: string }[]; joints: Joint[]; instances: Instance[]; parts: Part[] }

const euler = (rpy: number[]) => new THREE.Euler(rpy[0], rpy[1], rpy[2], 'ZYX') // URDF fixed-axis rpy
const LINK_COLORS = ['#d7dae2', '#e4e7ee', '#dfe2ea', '#e4e7ee', '#dfe2ea', '#e8eaf0', '#e8eaf0', '#f1c96b']
const clamp = (v: number, a: number, b: number) => v < a ? a : v > b ? b : v

// Where the arm drifts to while nobody has touched it: amplitude, speed, phase.
const IDLE: Record<string, [number, number, number, number]> = {
  shoulder_pan: [0.45, 0.15, 0.21, 0],
  shoulder_lift: [-0.2, 0.14, 0.17, 1.1],
  elbow_flex: [0.5, 0.18, 0.19, 2.2],
  wrist_flex: [0.1, 0.2, 0.25, 0.4],
  wrist_roll: [0, 0.5, 0.14, 1.7],
  gripper: [0.7, 0.6, 0.33, 0],
}

// Where in the sway the arm opens. At t=0 it is folded in on itself and reads
// as a blob; here it is reaching, and reads as an arm. img/arm-poster.webp is
// this exact pose, so the still and the live arm line up.
const OPEN_AT = 6.8

const root = document.getElementById('armhero')
const stage = document.getElementById('armstage')
if (root && stage) main(root, stage).catch(err => { console.error(err); root.classList.add('failed') })

async function main(root: HTMLElement, stage: HTMLElement) {
  // index.html starts fetching these the moment the page parses, so by the
  // time this module has compiled they are usually already in hand. Falling
  // back to a plain fetch keeps the module usable on its own.
  const warm = (window as any).__armWarm as { data?: Promise<Data>; glb?: Promise<ArrayBuffer> } | undefined
  const data: Data = await (warm?.data ?? fetch(DIR + 'data.json').then(r => r.json()))
  const cat = new Map(data.parts.map(p => [p.id, p.category]))

  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: !small, alpha: true, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  stage.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 20)
  camera.up.set(0, 0, 1)                                  // URDF is Z-up
  camera.position.set(0.5, -0.52, 0.34)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0.15)
  controls.enableDamping = true
  controls.enableZoom = false                             // the wheel belongs to the page
  controls.enablePan = false
  controls.minPolarAngle = 0.35
  controls.maxPolarAngle = 1.58
  controls.rotateSpeed = 0.9

  scene.add(new THREE.HemisphereLight('#dfe7ff', '#0b0d12', 1.15))
  const sun = new THREE.DirectionalLight('#ffffff', 2.3)
  sun.position.set(0.7, -1.1, 1.5)
  sun.castShadow = true
  sun.shadow.mapSize.set(small ? 512 : 1024, small ? 512 : 1024)
  const sc = sun.shadow.camera as THREE.OrthographicCamera
  sc.left = sc.bottom = -0.7; sc.right = sc.top = 0.7; sc.near = 0.2; sc.far = 4
  sun.shadow.bias = -0.0004
  scene.add(sun)
  // Shadow catcher only: the page background shows through the floor.
  const floor = new THREE.Mesh(new THREE.CircleGeometry(0.9, 48), new THREE.ShadowMaterial({ opacity: 0.38 }))
  floor.position.z = -0.0245
  floor.receiveShadow = true
  scene.add(floor)

  // --- kinematic tree ---
  const linkGroups = new Map<string, THREE.Group>()
  const jointGroups = new Map<string, { pivot: THREE.Group; axis: THREE.Vector3; j: Joint }>()
  const childOf = new Map(data.joints.map(j => [j.child, j]))
  const rootLink = data.links.find(l => !childOf.has(l.name))!.name
  const rootGroup = new THREE.Group()
  scene.add(rootGroup)
  linkGroups.set(rootLink, rootGroup)
  const attach = (linkName: string) => {
    const g = linkGroups.get(linkName)!
    for (const j of data.joints.filter(j => j.parent === linkName)) {
      const carrier = new THREE.Group()
      carrier.position.fromArray(j.xyz)
      carrier.quaternion.setFromEuler(euler(j.rpy))
      const pivot = new THREE.Group()
      carrier.add(pivot)
      g.add(carrier)
      linkGroups.set(j.child, pivot)
      jointGroups.set(j.name, { pivot, axis: new THREE.Vector3().fromArray(j.axis).normalize(), j })
      attach(j.child)
    }
  }
  attach(rootLink)

  // Which joint a given link hangs from — fixed joints pass the grab upwards.
  const owner = (link: string): string | null => {
    const j = childOf.get(link)
    if (!j) return null
    return j.type === 'revolute' ? j.name : owner(j.parent)
  }

  // --- visuals: one meshopt file for the whole arm, geometry by node name ---
  const loader = new GLTFLoader()
  loader.setMeshoptDecoder(MeshoptDecoder)
  const pack = warm?.glb ? await loader.parseAsync(await warm.glb, DIR) : await loader.loadAsync(DIR + 'so101.glb')
  const geos = new Map<string, THREE.BufferGeometry>()
  pack.scene.updateMatrixWorld(true)
  pack.scene.traverse(o => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    // The named node is an ancestor; quantised meshes sit under an extra
    // scale/offset node, so bake everything below the named node in.
    let named: THREE.Object3D | null = o
    while (named && (!named.name || /^mesh_\d+$/.test(named.name))) named = named.parent
    if (!named) return
    const rel = new THREE.Matrix4().copy(named.matrixWorld).invert().multiply(m.matrixWorld)
    // Quantised (int16) positions must become floats before a transform is baked in.
    const src = m.geometry.attributes.position
    const pos = new Float32Array(src.count * 3)
    for (let i = 0; i < src.count; i++) { pos[i * 3] = src.getX(i); pos[i * 3 + 1] = src.getY(i); pos[i * 3 + 2] = src.getZ(i) }
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3))
    if (m.geometry.index) geo.setIndex(m.geometry.index.clone())
    geo.applyMatrix4(rel)
    geo.computeVertexNormals()
    geo.computeBoundingSphere()
    if (!geos.has(named.name)) geos.set(named.name, geo)
  })

  const linkIndex = new Map(data.links.map((l, i) => [l.name, i]))
  const meshes: THREE.Mesh[] = []
  for (const inst of data.instances) {
    const geo = inst.mesh ? geos.get(inst.mesh) : new THREE.BoxGeometry(inst.box![0], inst.box![1], inst.box![2])
    if (!geo) continue
    const isServo = cat.get(inst.part) === 'actuator'
    const color = inst.color ?? (isServo ? '#2b2f3a' : LINK_COLORS[linkIndex.get(inst.link)! % LINK_COLORS.length])
    const m = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color, roughness: isServo ? 0.45 : 0.7, metalness: isServo ? 0.35 : 0.05 }))
    m.castShadow = m.receiveShadow = true
    m.position.fromArray(inst.xyz)
    m.quaternion.setFromEuler(euler(inst.rpy))
    m.userData = { link: inst.link }
    linkGroups.get(inst.link)!.add(m)
    meshes.push(m)
  }

  // --- pose ---
  const q: Record<string, number> = {}
  const applyJoints = () => jointGroups.forEach(({ pivot, axis, j }) => pivot.quaternion.setFromAxisAngle(axis, q[j.name] ?? 0))
  const poseAt = (t: number) => {
    for (const name in IDLE) {
      const jg = jointGroups.get(name)
      if (!jg) continue
      const [mid, amp, speed, phase] = IDLE[name]
      q[name] = clamp(mid + amp * Math.sin(t * speed * Math.PI + phase), jg.j.lower, jg.j.upper)
    }
  }

  let w = 1, h = 1
  const resize = () => {
    w = stage.clientWidth; h = stage.clientHeight
    if (!w || !h) return
    renderer.setSize(w, h, false)
    camera.aspect = w / h
    camera.updateProjectionMatrix()
  }
  resize()

  // Frame it in screen space, over every pose the idle sway can reach, so the
  // arm never grows out of the box and never sits in a corner. A 3D bounding
  // box centred in world space does not centre on screen: the arm is a column
  // with a long reach off to one side.
  const fit = () => {
    const keep = { ...q }
    const box = new THREE.Box3()
    for (let t = 0; t < 240; t += 3) {     // the whole sway, not its extreme corners
      poseAt(t)
      applyJoints()
      scene.updateMatrixWorld(true)
      for (const m of meshes) box.expandByObject(m)
    }
    for (const k in q) delete q[k]
    Object.assign(q, keep)
    applyJoints()
    if (box.isEmpty()) return

    const dir = camera.position.clone().sub(controls.target).normalize()   // target -> camera
    const right = new THREE.Vector3().crossVectors(camera.up, dir).normalize()
    const up = new THREE.Vector3().crossVectors(dir, right).normalize()
    const c = box.getCenter(new THREE.Vector3())
    const v = new THREE.Vector3()
    let minR = Infinity, maxR = -Infinity, minU = Infinity, maxU = -Infinity
    for (let i = 0; i < 8; i++) {
      v.set(i & 1 ? box.max.x : box.min.x, i & 2 ? box.max.y : box.min.y, i & 4 ? box.max.z : box.min.z).sub(c)
      const r = v.dot(right), u = v.dot(up)
      minR = Math.min(minR, r); maxR = Math.max(maxR, r)
      minU = Math.min(minU, u); maxU = Math.max(maxU, u)
    }
    const target = c.addScaledVector(right, (minR + maxR) / 2).addScaledVector(up, (minU + maxU) / 2)
    const vFov = camera.fov * Math.PI / 180
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * camera.aspect)
    const dist = Math.max(((maxU - minU) / 2) / Math.tan(vFov / 2), ((maxR - minR) / 2) / Math.tan(hFov / 2)) * 1.06
    controls.target.copy(target)
    camera.position.copy(target).addScaledVector(dir, dist)
    controls.update()
  }
  fit()

  // --- dragging a joint by its own part ---
  const ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  const toPx = (v: THREE.Vector3) => {
    const p = v.clone().project(camera)
    return new THREE.Vector2((p.x * 0.5 + 0.5) * w, (-p.y * 0.5 + 0.5) * h)
  }
  const hitAt = (ev: PointerEvent) => {
    const r = renderer.domElement.getBoundingClientRect()
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    return ray.intersectObjects(meshes, false)[0] ?? null
  }
  let drag: { joint: string; q0: number; p0: THREE.Vector2; s: THREE.Vector2 } | null = null

  const grab = (ev: PointerEvent) => {
    const hit = hitAt(ev)
    if (!hit) return null
    const name = owner((hit.object as THREE.Mesh).userData.link)
    if (!name) return null
    const { pivot, axis, j } = jointGroups.get(name)!
    const o = pivot.getWorldPosition(new THREE.Vector3())
    const n = axis.clone().applyQuaternion(pivot.getWorldQuaternion(new THREE.Quaternion())).normalize()
    // How far the grabbed point travels for one radian, in screen pixels.
    const t = n.clone().cross(hit.point.clone().sub(o))
    const s = toPx(hit.point.clone().add(t)).sub(toPx(hit.point))
    if (s.length() < 110) s.setLength(110)           // edge-on joints must not spin wildly
    return { joint: name, q0: q[j.name] ?? 0, p0: new THREE.Vector2(ev.clientX, ev.clientY), s }
  }

  const canvas = renderer.domElement
  canvas.addEventListener('pointerdown', ev => {
    stop()
    drag = grab(ev)
    if (drag) { controls.enabled = false; canvas.setPointerCapture(ev.pointerId); canvas.style.cursor = 'grabbing' }
  })
  canvas.addEventListener('pointermove', ev => {
    if (drag) {
      const { j } = jointGroups.get(drag.joint)!
      const d = new THREE.Vector2(ev.clientX, ev.clientY).sub(drag.p0)
      q[j.name] = clamp(drag.q0 + d.dot(drag.s) / drag.s.lengthSq(), j.lower, j.upper)
      applyJoints()
      invalidate()
      return
    }
    canvas.style.cursor = hitAt(ev) ? 'grab' : 'move'
  })
  const release = (ev: PointerEvent) => {
    if (!drag) return
    drag = null
    controls.enabled = true
    canvas.style.cursor = 'grab'
    try { canvas.releasePointerCapture(ev.pointerId) } catch { /* already gone */ }
  }
  canvas.addEventListener('pointerup', release)
  canvas.addEventListener('pointercancel', release)

  // --- render on demand, idle sway until first touch ---
  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  let idle = !calm
  let dirty = true
  const invalidate = () => { dirty = true }
  const stop = () => { if (idle) { idle = false; root.classList.add('touched') } }
  controls.addEventListener('change', invalidate)
  controls.addEventListener('start', stop)
  new ResizeObserver(() => { resize(); fit(); invalidate() }).observe(stage)

  // Nothing is drawn while the hero is off screen.
  let visible = true
  new IntersectionObserver(es => { visible = es[0].isIntersecting; invalidate() }, { rootMargin: '120px' }).observe(stage)

  const t0 = performance.now()
  renderer.setAnimationLoop(() => {
    if (!visible) return
    if (idle) {
      poseAt(OPEN_AT + (performance.now() - t0) / 1000)
      applyJoints()
      dirty = true
    }
    if (!dirty) return
    dirty = false
    controls.update()
    renderer.render(scene, camera)
  })

  // Tests drive the hero through this (same idea as window.__forge).
  ;(window as any).__arm = { q, jointGroups, meshes, camera, controls, applyJoints, poseAt, invalidate }
  root.classList.add('ready')
}
