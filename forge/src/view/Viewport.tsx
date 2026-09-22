import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { useStore } from '../store'
import type { GeomInfo } from '../sim/protocol'

// mjtGeom
const PLANE = 0, SPHERE = 2, CAPSULE = 3, CYLINDER = 5, BOX = 6

function geometryFor(g: GeomInfo, i: number): THREE.BufferGeometry | null {
  const t = g.type[i], s0 = g.size[i * 3], s1 = g.size[i * 3 + 1], s2 = g.size[i * 3 + 2]
  switch (t) {
    case PLANE: return null // drawn separately as the grid floor
    case SPHERE: return new THREE.SphereGeometry(s0, 24, 16)
    case BOX: return new THREE.BoxGeometry(s0 * 2, s1 * 2, s2 * 2)
    case CYLINDER: { const geo = new THREE.CylinderGeometry(s0, s0, s1 * 2, 32); geo.rotateX(Math.PI / 2); return geo }
    case CAPSULE: { const geo = new THREE.CapsuleGeometry(s0, s1 * 2, 8, 24); geo.rotateX(Math.PI / 2); return geo }
    default: return new THREE.SphereGeometry(Math.max(s0, 0.02), 12, 8)
  }
}

export default function Viewport() {
  const host = useRef<HTMLDivElement>(null)
  const meshes = useRef<(THREE.Mesh | null)[]>([])
  const scene = useRef<THREE.Scene | null>(null)
  const geoms = useStore(s => s.geoms)

  // Scene setup once.
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

    const resize = () => {
      const w = el.clientWidth, h = el.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / Math.max(h, 1)
      camera.updateProjectionMatrix()
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(el)

    const m4 = new THREE.Matrix4()
    let raf = 0
    const tick = () => {
      raf = requestAnimationFrame(tick)
      const f = useStore.getState().frame
      if (f) {
        const ms = meshes.current
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
        }
      }
      controls.update()
      renderer.render(sc, camera)
    }
    tick()

    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
      controls.dispose()
      renderer.dispose()
      el.removeChild(renderer.domElement)
    }
  }, [])

  // Rebuild meshes whenever the model changes.
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
      const mat = new THREE.MeshStandardMaterial({ color: c, roughness: 0.55, metalness: 0.15 })
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
