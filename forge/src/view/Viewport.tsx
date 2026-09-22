import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js'
import { hotBodies, useStore } from '../store'
import type { GeomInfo } from '../sim/protocol'
import { findParent } from '../model/types'

// mjtGeom
const PLANE = 0, SPHERE = 2, CAPSULE = 3, CYLINDER = 5, BOX = 6

function geometryFor(g: GeomInfo, i: number): THREE.BufferGeometry | null {
  const t = g.type[i], s0 = g.size[i * 3], s1 = g.size[i * 3 + 1], s2 = g.size[i * 3 + 2]
  switch (t) {
    case PLANE: return null
    case SPHERE: return new THREE.SphereGeometry(s0, 24, 16)
    case BOX: return new THREE.BoxGeometry(s0 * 2, s1 * 2, s2 * 2)
    case CYLINDER: { const geo = new THREE.CylinderGeometry(s0, s0, s1 * 2, 32); geo.rotateX(Math.PI / 2); return geo }
    case CAPSULE: { const geo = new THREE.CapsuleGeometry(s0, s1 * 2, 8, 24); geo.rotateX(Math.PI / 2); return geo }
    default: return new THREE.SphereGeometry(Math.max(s0, 0.02), 12, 8)
  }
}

const HOT = new THREE.Color('#f87171')
const SEL = new THREE.Color('#7dd3fc')

export default function Viewport() {
  const host = useRef<HTMLDivElement>(null)
  const meshes = useRef<(THREE.Mesh | null)[]>([])
  const scene = useRef<THREE.Scene | null>(null)
  const gizmo = useRef<TransformControls | null>(null)
  const handle = useRef<THREE.Object3D | null>(null)
  const dragging = useRef(false)
  const geoms = useStore(s => s.geoms)

  useEffect(() => {
    const el = host.current!
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    el.appendChild(renderer.domElement)

    const sc = new THREE.Scene()
    sc.background = new THREE.Color('#0b0d12')
    sc.fog = new THREE.Fog('#0b0d12', 8, 30)
    scene.current = sc

    const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100)
    camera.up.set(0, 0, 1)
    camera.position.set(1.6, -1.6, 1.1)

    const controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(0, 0, 0.3)
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.maxPolarAngle = Math.PI / 2 - 0.02
    controls.minDistance = 0.3
    controls.maxDistance = 20

    sc.add(new THREE.HemisphereLight('#c9d6ff', '#1a1d26', 0.9))
    const sun = new THREE.DirectionalLight('#ffffff', 2.2)
    sun.position.set(2, -3, 4)
    sun.castShadow = true
    sun.shadow.mapSize.set(2048, 2048)
    sun.shadow.camera.near = 0.5; sun.shadow.camera.far = 15
    const sc2 = sun.shadow.camera as THREE.OrthographicCamera
    sc2.left = -4; sc2.right = 4; sc2.top = 4; sc2.bottom = -4
    sun.shadow.bias = -0.0005
    sc.add(sun)

    const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.MeshStandardMaterial({ color: '#141720', roughness: 0.95, metalness: 0 }))
    floor.receiveShadow = true
    sc.add(floor)
    const grid = new THREE.GridHelper(40, 80, '#2a3040', '#1b1f28')
    grid.rotation.x = Math.PI / 2
    grid.position.z = 0.001
    sc.add(grid)

    // Lift-task target: a ring at the goal height above the payload.
    const ring = new THREE.Mesh(new THREE.RingGeometry(0.12, 0.135, 48), new THREE.MeshBasicMaterial({ color: '#fbbf24', transparent: true, opacity: 0.8, side: THREE.DoubleSide }))
    ring.visible = false
    sc.add(ring)

    // Drag handle for the selected part.
    const h = new THREE.Object3D()
    sc.add(h)
    handle.current = h
    const tc = new TransformControls(camera, renderer.domElement)
    tc.setSize(0.8)
    tc.attach(h)
    tc.enabled = false
    const tcHelper = tc.getHelper()
    tcHelper.visible = false
    sc.add(tcHelper)
    gizmo.current = tc
    tc.addEventListener('dragging-changed', (e: { value: unknown }) => {
      dragging.current = !!e.value
      controls.enabled = !e.value
      if (!e.value) commitDrag()
    })
    let lastLive = 0
    tc.addEventListener('objectChange', () => {
      // Live preview while dragging, but rebuild the model at most 10x/s.
      const now = performance.now()
      if (dragging.current && now - lastLive > 100) { lastLive = now; commitDrag(true) }
    })

    const commitDrag = (live = false) => {
      const st = useStore.getState()
      const sel = st.selectedId; const f = st.frame
      if (!sel || !f) return
      const myId = st.bodyIds[sel]
      const parent = findParent(st.build.root, sel)
      const pid = parent ? st.bodyIds[parent.id] : 0
      if (myId === undefined) return
      // New world position of the handle -> parent-local offset (R_parent^T * (p - p_parent)).
      const p = h.position
      let lx = p.x, ly = p.y, lz = p.z
      if (pid > 0) {
        const px = f.bodyPos[pid * 3], py = f.bodyPos[pid * 3 + 1], pz = f.bodyPos[pid * 3 + 2]
        const r = pid * 9, m = f.bodyMat
        const dx = p.x - px, dy = p.y - py, dz = p.z - pz
        lx = m[r] * dx + m[r + 3] * dy + m[r + 6] * dz
        ly = m[r + 1] * dx + m[r + 4] * dy + m[r + 7] * dz
        lz = m[r + 2] * dx + m[r + 5] * dy + m[r + 8] * dz
      }
      const round = (v: number) => Math.round(v * 200) / 200 // 5 mm snap
      void live
      st.updateBody(sel, { pos: [round(lx), round(ly), round(lz)] })
    }

    // Click to select a part (ignore drags that moved the camera).
    const ray = new THREE.Raycaster()
    let downAt = [0, 0]
    const onDown = (e: PointerEvent) => { downAt = [e.clientX, e.clientY] }
    const onUp = (e: PointerEvent) => {
      if (dragging.current) return
      if (Math.hypot(e.clientX - downAt[0], e.clientY - downAt[1]) > 4) return
      const rect = renderer.domElement.getBoundingClientRect()
      const ndc = new THREE.Vector2(((e.clientX - rect.left) / rect.width) * 2 - 1, -((e.clientY - rect.top) / rect.height) * 2 + 1)
      ray.setFromCamera(ndc, camera)
      const hits = ray.intersectObjects(meshes.current.filter((m): m is THREE.Mesh => !!m), false)
      const st = useStore.getState()
      if (!hits.length || !st.geoms) { st.select(null); return }
      const gi = meshes.current.indexOf(hits[0].object as THREE.Mesh)
      const mjBody = st.geoms.bodyId[gi]
      const entry = Object.entries(st.bodyIds).find(([, v]) => v === mjBody)
      st.select(entry ? entry[0] : null)
    }
    renderer.domElement.addEventListener('pointerdown', onDown)
    renderer.domElement.addEventListener('pointerup', onUp)

    const resize = () => {
      const w = el.clientWidth, hgt = el.clientHeight
      renderer.setSize(w, hgt, false)
      camera.aspect = w / Math.max(hgt, 1)
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    const m4 = new THREE.Matrix4()
    const target = new THREE.Vector3()
    let raf = 0
    let pulse = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      pulse += 0.08
      const st = useStore.getState()
      const f = st.frame
      const hot = f && st.mode === 'run' ? hotBodies() : null
      const selMj = st.selectedId ? st.bodyIds[st.selectedId] : -1
      if (f && st.geoms) {
        const ms = meshes.current
        const g = st.geoms
        for (let i = 0; i < ms.length; i++) {
          const mesh = ms[i]; if (!mesh) continue
          const p = i * 3, r = i * 9
          const x = f.xmat
          m4.set(
            x[r], x[r + 1], x[r + 2], f.xpos[p],
            x[r + 3], x[r + 4], x[r + 5], f.xpos[p + 1],
            x[r + 6], x[r + 7], x[r + 8], f.xpos[p + 2],
            0, 0, 0, 1)
          mesh.matrix.copy(m4)
          const mat = mesh.material as THREE.MeshStandardMaterial
          const b = g.bodyId[i]
          if (hot && hot.has(b)) { mat.emissive.copy(HOT); mat.emissiveIntensity = 0.45 + 0.35 * Math.sin(pulse * 2) }
          else if (b === selMj && st.mode === 'edit') { mat.emissive.copy(SEL); mat.emissiveIntensity = 0.25 }
          else { mat.emissiveIntensity = 0 }
        }
        // Handle follows the selected body; gizmo only while editing.
        const tc = gizmo.current!
        const editing = st.mode === 'edit' && selMj > 0
        tcHelper.visible = editing; tc.enabled = editing
        if (editing && !dragging.current) h.position.set(f.bodyPos[selMj * 3], f.bodyPos[selMj * 3 + 1], f.bodyPos[selMj * 3 + 2])
        // Camera follow for free-moving robots.
        if (st.mode === 'run' && st.follow && st.build.mount === 'free' && f.running) {
          target.set(f.rootPos[0], f.rootPos[1], Math.max(f.rootPos[2] * 0.6, 0.15))
          const delta = target.clone().sub(controls.target)
          controls.target.addScaledVector(delta, 0.06)
          camera.position.addScaledVector(delta, 0.06)
        }
        // Lift target ring.
        const t = st.build.task
        if (t && t.kind === 'lift') {
          ring.visible = true
          ring.position.set(t.pos[0], t.pos[1], t.height)
          const done = f.maxPayloadZ >= t.height
          ;(ring.material as THREE.MeshBasicMaterial).color.set(done ? '#4ade80' : '#fbbf24')
        } else ring.visible = false
      }
      controls.update()
      renderer.render(sc, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      renderer.domElement.removeEventListener('pointerdown', onDown)
      renderer.domElement.removeEventListener('pointerup', onUp)
      tc.dispose()
      controls.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  useEffect(() => {
    const sc = scene.current
    if (!sc) return
    meshes.current.forEach(m => { if (m) { sc.remove(m); m.geometry.dispose(); (m.material as THREE.Material).dispose() } })
    meshes.current = []
    if (!geoms) return
    const list: (THREE.Mesh | null)[] = []
    for (let i = 0; i < geoms.n; i++) {
      const geo = geometryFor(geoms, i)
      if (!geo) { list.push(null); continue }
      const c = new THREE.Color(geoms.rgba[i * 4], geoms.rgba[i * 4 + 1], geoms.rgba[i * 4 + 2])
      const mat = new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.15, emissive: new THREE.Color('#000000'), emissiveIntensity: 0 })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.castShadow = true
      mesh.receiveShadow = true
      mesh.matrixAutoUpdate = false
      sc.add(mesh)
      list.push(mesh)
    }
    meshes.current = list
  }, [geoms])

  return <div ref={host} className="viewport" />
}
