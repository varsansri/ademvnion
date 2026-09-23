import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { PART_DEFS, type Built } from './parts'

// The parts bench: each part of the Go2 rebuilt in 3D on its own turntable,
// with numbered labels on every chip that could be named.

const STATUS_COLOR: Record<string, string> = { Read: '#4ade80', Matched: '#fbbf24', Hidden: '#f87171', Inferred: '#c084fc' }
const STATUS_LABEL: Record<string, string> = { Read: 'Read', Matched: 'Matched', Hidden: 'Ground blank', Inferred: 'Inferred' }

export function startBench() {
  const root = document.getElementById('parts-3d')
  const stage = document.getElementById('benchstage')
  if (!root || !stage) return
  const tabs = root.querySelector('.btabs') as HTMLElement
  const side = root.querySelector('.bside') as HTMLElement
  const pinsEl = stage.querySelector('.pins') as HTMLElement

  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  renderer.toneMapping = THREE.ACESFilmicToneMapping
  renderer.toneMappingExposure = 1.05
  stage.prepend(renderer.domElement)

  const scene = new THREE.Scene()
  const camera = new THREE.PerspectiveCamera(30, 1, 1, 5000)
  camera.up.set(0, 0, 1)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enablePan = false
  controls.enableZoom = true
  controls.zoomToCursor = true
  controls.minPolarAngle = 0.05
  controls.maxPolarAngle = 1.5

  scene.add(new THREE.HemisphereLight('#e6ecff', '#141821', 1.1))
  const key = new THREE.DirectionalLight('#ffffff', 2.6)
  key.castShadow = true
  key.shadow.mapSize.set(small ? 1024 : 2048, small ? 1024 : 2048)
  key.shadow.bias = -0.0003
  scene.add(key, key.target)
  const rim = new THREE.DirectionalLight('#7dd3fc', 0.9)
  scene.add(rim)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(1, 64), new THREE.ShadowMaterial({ opacity: 0.45 }))
  floor.receiveShadow = true
  scene.add(floor)

  const holder = new THREE.Group()
  scene.add(holder)
  const cache = new Map<string, Built>()
  let cur: Built | null = null
  let curId = ''
  let pins: HTMLButtonElement[] = []
  let active = -1

  // Wheel zoom only once the bench has been clicked, so the page still scrolls.
  controls.enableZoom = false
  renderer.domElement.addEventListener('pointerdown', () => { controls.enableZoom = true })
  root.addEventListener('mouseleave', () => { controls.enableZoom = false })

  for (const d of PART_DEFS) {
    const b = document.createElement('button')
    b.type = 'button'
    b.dataset.id = d.id
    b.innerHTML = `<i style="--c:${STATUS_COLOR[d.status]}"></i>${d.name}`
    b.addEventListener('click', () => show(d.id))
    tabs.appendChild(b)
  }

  function frame(obj: THREE.Object3D) {
    const box = new THREE.Box3().setFromObject(obj)
    const sph = box.getBoundingSphere(new THREE.Sphere())
    floor.scale.setScalar(sph.radius * 2.2)
    floor.position.set(sph.center.x, sph.center.y, box.min.z - 0.05)
    const dist = sph.radius / Math.sin((camera.fov * Math.PI) / 360) * 0.92
    const dir = new THREE.Vector3(0.55, -0.85, 0.75).normalize()
    controls.target.copy(sph.center)
    camera.position.copy(sph.center).addScaledVector(dir, dist)
    camera.near = dist / 50; camera.far = dist * 10
    camera.updateProjectionMatrix()
    controls.minDistance = dist * 0.25
    controls.maxDistance = dist * 1.6
    key.position.copy(sph.center).add(new THREE.Vector3(sph.radius * 1.5, -sph.radius * 2, sph.radius * 3))
    key.target.position.copy(sph.center)
    const sc = key.shadow.camera as THREE.OrthographicCamera
    sc.left = sc.bottom = -sph.radius * 1.6; sc.right = sc.top = sph.radius * 1.6
    sc.near = 1; sc.far = sph.radius * 12
    sc.updateProjectionMatrix()
    rim.position.copy(sph.center).add(new THREE.Vector3(-sph.radius * 2, sph.radius * 2, sph.radius))
    controls.update()
  }

  function show(id: string) {
    if (id === curId) return
    curId = id
    const def = PART_DEFS.find(d => d.id === id)!
    if (!cache.has(id)) cache.set(id, def.build())
    cur = cache.get(id)!
    holder.clear()
    holder.add(cur.group)
    tabs.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.id === id))
    frame(cur.group)
    active = -1
    spin = !calm

    // pins
    pinsEl.innerHTML = ''
    pins = cur.callouts.map((c, i) => {
      const b = document.createElement('button')
      b.type = 'button'; b.className = 'pin stem'; b.textContent = String(i + 1)
      b.style.visibility = 'hidden'
      b.style.setProperty('--c', '#7dd3fc')
      b.setAttribute('aria-label', `${i + 1}. ${c.name}`)
      b.addEventListener('click', () => pick(i))
      pinsEl.appendChild(b)
      return b
    })

    const toggles = cur.toggles.map((t, i) => `<label class="tg"><input type="checkbox" data-t="${i}" ${t.on ? 'checked' : ''}> ${t.label}</label>`).join('')
    const explode = cur.explode ? `<label class="ex">Pull it apart <input type="range" min="0" max="1" step="0.01" value="0.55" data-ex></label>` : ''
    side.innerHTML = `
      <p class="k"><span class="chip" style="--c:${STATUS_COLOR[def.status]}">${STATUS_LABEL[def.status]}</span> ${def.name}</p>
      <p class="blurb">${def.blurb}</p>
      ${toggles}${explode}
      <ol class="clist">${cur.callouts.map((c, i) => `<li><button type="button" data-i="${i}"><i>${i + 1}</i><span><b>${c.name}</b><small>${c.text}</small></span></button></li>`).join('')}</ol>`
    side.querySelectorAll<HTMLInputElement>('input[data-t]').forEach(inp => inp.addEventListener('change', () => {
      const t = cur!.toggles[+inp.dataset.t!]; t.on = inp.checked; t.set(inp.checked); invalidate()
    }))
    const ex = side.querySelector<HTMLInputElement>('input[data-ex]')
    ex?.addEventListener('input', () => { cur!.explode!(+ex.value); invalidate() })
    side.querySelectorAll<HTMLButtonElement>('.clist button').forEach(b => b.addEventListener('click', () => pick(+b.dataset.i!)))
    invalidate()
  }

  function pick(i: number) {
    active = active === i ? -1 : i
    pins.forEach((p, k) => p.classList.toggle('on', k === active))
    side.querySelectorAll<HTMLButtonElement>('.clist button').forEach(b => b.classList.toggle('on', +b.dataset.i! === active))
    if (active >= 0) {
      spin = false
      side.querySelector(`.clist button[data-i="${active}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
    }
    invalidate()
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

  const calm = matchMedia('(prefers-reduced-motion: reduce)').matches
  let spin = !calm
  let dirty = true
  const invalidate = () => { dirty = true }
  controls.addEventListener('change', invalidate)
  controls.addEventListener('start', () => { spin = false })
  new ResizeObserver(() => { resize(); invalidate() }).observe(stage)
  let visible = false
  new IntersectionObserver(es => { visible = es[0].isIntersecting; invalidate() }, { rootMargin: '80px' }).observe(stage)

  const v = new THREE.Vector3()
  const placePins = () => {
    if (!cur) return
    cur.group.updateMatrixWorld(true)
    cur.callouts.forEach((c, i) => {
      v.copy(c.at).applyMatrix4((c.obj ?? cur!.group).matrixWorld).project(camera)
      const b = pins[i]
      const off = v.z > 1 || Math.abs(v.x) > 1.05 || Math.abs(v.y) > 1.05
      // The badge stands on a short stem above its point, so it never hides the marking.
      b.style.transform = `translate(${((v.x * 0.5 + 0.5) * w).toFixed(1)}px, ${((-v.y * 0.5 + 0.5) * h).toFixed(1)}px) translate(-50%, calc(-100% - 14px))`
      b.style.visibility = off ? 'hidden' : 'visible'
    })
  }

  let last = performance.now()
  renderer.setAnimationLoop(() => {
    const now = performance.now(), dt = Math.min(0.05, (now - last) / 1000); last = now
    if (!visible) return
    if (spin) {
      // turntable: orbit the camera slowly around the part
      const off = camera.position.clone().sub(controls.target)
      off.applyAxisAngle(new THREE.Vector3(0, 0, 1), dt * 0.25)
      camera.position.copy(controls.target).add(off)
      dirty = true
    }
    if (!dirty) return
    dirty = false
    controls.update()
    placePins()
    renderer.render(scene, camera)
  })

  show(PART_DEFS[0].id)
  root.classList.add('ready')
  ;(window as any).__bench = { show, pick, camera, controls, invalidate, cache }
}
