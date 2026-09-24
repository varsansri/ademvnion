import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { MeshoptDecoder } from 'three/examples/jsm/libs/meshopt_decoder.module.js'
import './inside.css'

// Interactive teardown. The data file comes from build_so101.py: links and
// joints straight from the URDF, plus the parts knowledge base.

interface Instance { id: string; link: string; mesh: string | null; part: string; xyz: number[]; rpy: number[]; box?: number[]; color?: string }
interface Joint { name: string; type: string; parent: string; child: string; xyz: number[]; rpy: number[]; axis: number[]; lower: number; upper: number; label: string; desc: string }
interface Part { id: string; name: string; short?: string; category: string; qty: number; mass_g: number; on_arm?: boolean; price_usd: number; price_note?: string; made_of: string; what: string; why: string; remove: string; spec: string[][]; inside: string[][]; buy?: string; print?: string; shown: boolean; mass_note?: string }
interface Data { robot: { name: string; total_mass_g: number; total_cost_usd: number; source: string }; links: { name: string; mass: number; visuals: string[] }[]; joints: Joint[]; instances: Instance[]; parts: Part[] }

const stage = document.getElementById('stage')
const side = document.getElementById('side')
if (stage && side) main(stage, side).catch(e => { stage.innerHTML = `<p class="err">Could not load the 3D view: ${String(e)}</p>` })

const euler = (rpy: number[]) => new THREE.Euler(rpy[0], rpy[1], rpy[2], 'ZYX') // URDF fixed-axis rpy

const LINK_COLORS = ['#d7dae2', '#e4e7ee', '#dfe2ea', '#e4e7ee', '#dfe2ea', '#e8eaf0', '#e8eaf0', '#f1c96b']
const CAT_LABEL: Record<string, string> = { actuator: 'Actuators', electronics: 'Electronics', structure: 'Printed structure', fastener: 'Fasteners', tool: 'Tools & mounting' }

async function main(stage: HTMLElement, side: HTMLElement) {
  const data: Data = await (await fetch('./data.json')).json()
  const parts = new Map(data.parts.map(p => [p.id, p]))
  let dirty = true
  const invalidate = () => { dirty = true }
  const state = { selected: null as string | null, hidden: new Set<string>(), explode: 0, xray: false, q: {} as Record<string, number>, hover: null as string | null }

  // --- three.js scene ---
  const small = matchMedia('(max-width: 900px)').matches
  const renderer = new THREE.WebGLRenderer({ antialias: !small, powerPreference: 'high-performance' })
  renderer.setPixelRatio(Math.min(devicePixelRatio, small ? 1.5 : 2))
  renderer.shadowMap.enabled = !small
  renderer.shadowMap.type = THREE.PCFSoftShadowMap
  stage.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color('#0b0d12')
  const camera = new THREE.PerspectiveCamera(40, 1, 0.005, 20)
  camera.up.set(0, 0, 1)
  camera.position.set(0.55, -0.5, 0.42)
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.target.set(0, 0, 0.15)
  controls.enableDamping = true
  controls.minDistance = 0.1
  controls.maxDistance = 3
  scene.add(new THREE.HemisphereLight('#dfe7ff', '#161a22', 1.0))
  const sun = new THREE.DirectionalLight('#ffffff', 2.4)
  sun.position.set(0.8, -1.2, 1.6)
  sun.castShadow = true
  sun.shadow.mapSize.set(1024, 1024)
  const sc = sun.shadow.camera as THREE.OrthographicCamera
  sc.left = sc.bottom = -0.8; sc.right = sc.top = 0.8; sc.near = 0.2; sc.far = 5
  sun.shadow.bias = -0.0004
  scene.add(sun)
  const floor = new THREE.Mesh(new THREE.CircleGeometry(1.2, 64), new THREE.MeshStandardMaterial({ color: '#12151c', roughness: 1 }))
  floor.position.z = -0.0245
  floor.receiveShadow = true
  scene.add(floor)

  // --- kinematic tree ---
  const linkGroups = new Map<string, THREE.Group>()          // link frame
  const jointGroups = new Map<string, { pivot: THREE.Group; axis: THREE.Vector3; j: Joint; carrier: THREE.Group }>()
  const childOf = new Map(data.joints.map(j => [j.child, j]))
  const rootLink = data.links.find(l => !childOf.has(l.name))!.name
  const rootGroup = new THREE.Group()
  scene.add(rootGroup)
  linkGroups.set(rootLink, rootGroup)
  const attach = (linkName: string) => {
    const g = linkGroups.get(linkName)!
    for (const j of data.joints.filter(j => j.parent === linkName)) {
      const carrier = new THREE.Group()                 // joint frame in the parent (+ explode offset)
      carrier.position.fromArray(j.xyz)
      carrier.quaternion.setFromEuler(euler(j.rpy))
      const pivot = new THREE.Group()                   // rotates about the joint axis
      carrier.add(pivot)
      g.add(carrier)
      linkGroups.set(j.child, pivot)
      jointGroups.set(j.name, { pivot, axis: new THREE.Vector3().fromArray(j.axis).normalize(), j, carrier })
      attach(j.child)
    }
  }
  attach(rootLink)

  // --- visuals ---
  // One meshopt-compressed file for the whole robot (~110 KB); geometry by node name.
  const loader = new GLTFLoader()
  loader.setMeshoptDecoder(MeshoptDecoder)
  const pack = await loader.loadAsync('./so101.glb')
  const geos = new Map<string, THREE.BufferGeometry>()
  pack.scene.updateMatrixWorld(true)
  pack.scene.traverse(o => {
    const m = o as THREE.Mesh
    if (!m.isMesh) return
    // The named node is an ancestor; quantised meshes sit under an extra
    // scale/offset node, so bake everything below the named node into the geometry.
    let named: THREE.Object3D | null = o
    while (named && (!named.name || /^mesh_\d+$/.test(named.name))) named = named.parent // loader auto-names meshes mesh_N
    if (!named) return
    const rel = new THREE.Matrix4().copy(named.matrixWorld).invert().multiply(m.matrixWorld)
    // Quantised (int16) positions must become floats before any transform is baked in.
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
  const loadGeo = async (mesh: string) => {
    const g = geos.get(mesh)
    if (!g) throw new Error('missing mesh ' + mesh)
    return g
  }
  const linkIndex = new Map(data.links.map((l, i) => [l.name, i]))
  const meshes: THREE.Mesh[] = []
  const byInstance = new Map<string, THREE.Mesh>()
  const explodeBase = new Map<THREE.Object3D, THREE.Vector3>()

  await Promise.all(data.instances.map(async inst => {
    const p = parts.get(inst.part)!
    let geo: THREE.BufferGeometry
    if (inst.mesh) geo = await loadGeo(inst.mesh)
    else geo = new THREE.BoxGeometry(inst.box![0], inst.box![1], inst.box![2])
    const isServo = p.category === 'actuator'
    const color = inst.color ?? (isServo ? '#2b2f3a' : LINK_COLORS[linkIndex.get(inst.link)! % LINK_COLORS.length])
    const mat = new THREE.MeshStandardMaterial({ color, roughness: isServo ? 0.45 : 0.7, metalness: isServo ? 0.35 : 0.05, transparent: true, opacity: 1 })
    const m = new THREE.Mesh(geo, mat)
    m.castShadow = m.receiveShadow = true
    m.position.fromArray(inst.xyz)
    m.quaternion.setFromEuler(euler(inst.rpy))
    m.userData = { inst: inst.id, part: inst.part, link: inst.link }
    linkGroups.get(inst.link)!.add(m)
    meshes.push(m)
    byInstance.set(inst.id, m)
    explodeBase.set(m, m.position.clone())
  }))
  jointGroups.forEach(({ carrier }) => explodeBase.set(carrier, carrier.position.clone()))

  // --- interaction ---
  const ray = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  const pick = (ev: PointerEvent) => {
    const r = renderer.domElement.getBoundingClientRect()
    ndc.set(((ev.clientX - r.left) / r.width) * 2 - 1, -((ev.clientY - r.top) / r.height) * 2 + 1)
    ray.setFromCamera(ndc, camera)
    const hit = ray.intersectObjects(meshes.filter(m => m.visible), false)[0]
    return hit ? (hit.object.userData.inst as string) : null
  }
  let down = [0, 0]
  renderer.domElement.addEventListener('pointerdown', e => { down = [e.clientX, e.clientY] })
  renderer.domElement.addEventListener('pointerup', e => {
    if (Math.hypot(e.clientX - down[0], e.clientY - down[1]) > 4) return
    const inst = pick(e)
    select(inst ? byInstance.get(inst)!.userData.part : null)
  })
  const tip = document.createElement('div'); tip.className = 'tip'; stage.appendChild(tip)
  renderer.domElement.addEventListener('pointermove', e => {
    const inst = pick(e)
    state.hover = inst ? byInstance.get(inst)!.userData.part : null
    if (state.hover) { tip.textContent = parts.get(state.hover)!.name; tip.style.left = e.clientX - stage.getBoundingClientRect().left + 12 + 'px'; tip.style.top = e.clientY - stage.getBoundingClientRect().top + 12 + 'px'; tip.style.opacity = '1' }
    else tip.style.opacity = '0'
    renderer.domElement.style.cursor = state.hover ? 'pointer' : 'grab'
  })

  // --- side panel ---
  const listView = () => {
    const cats = ['actuator', 'electronics', 'structure', 'fastener', 'tool']
    const shownCount = data.instances.filter(i => !state.hidden.has(i.part)).length
    let mass = 0, cost = 0
    for (const p of data.parts) if (!state.hidden.has(p.id)) { if (p.on_arm) mass += p.mass_g * p.qty; cost += p.price_usd * p.qty }
    if (data.parts.some(p => p.category === 'structure' && !state.hidden.has(p.id))) cost += 25 // printing
    side.innerHTML = `
      <div class="totals"><span><b>${shownCount}</b> parts</span><span><b>${Math.round(mass)} g</b></span><span><b>$${cost.toFixed(0)}</b></span>${state.hidden.size ? `<button class="mini" id="restore">restore ${state.hidden.size} hidden</button>` : ''}</div>
      <div class="ctl">
        <label>Explode <input type="range" id="explode" min="0" max="1" step="0.01" value="${state.explode}"></label>
        <label class="chk"><input type="checkbox" id="xray" ${state.xray ? 'checked' : ''}> X-ray printed parts</label>
      </div>
      <div class="ctl joints">
        ${data.joints.filter(j => j.type === 'revolute').map(j => `<label title="${j.desc}">${j.label}<input type="range" data-joint="${j.name}" min="${j.lower}" max="${j.upper}" step="0.01" value="${state.q[j.name] ?? 0}"></label>`).join('')}
        <button class="mini" id="zero">zero joints</button>
      </div>
      ${cats.map(c => {
        const ps = data.parts.filter(p => p.category === c)
        if (!ps.length) return ''
        return `<h4>${CAT_LABEL[c]}</h4>` + ps.map(p => `<div class="row ${state.hidden.has(p.id) ? 'hid' : ''}" data-part="${p.id}"><span class="sw" style="background:${swatch(p)}"></span><span class="nm">${p.name}</span><span class="q">×${p.qty}</span>${p.shown ? `<button class="eye" data-hide="${p.id}" title="${state.hidden.has(p.id) ? 'Show' : 'Hide'}">${state.hidden.has(p.id) ? '◌' : '●'}</button>` : '<span class="q">not in CAD</span>'}</div>`).join('')
      }).join('')}
      <p class="hint">Click a part in 3D or in this list. ● hides it — watch what it was holding up.</p>`
    wireCommon()
  }
  const swatch = (p: Part) => p.category === 'actuator' ? '#2b2f3a' : p.category === 'electronics' ? '#1f7a4d' : p.category === 'structure' ? '#8b93a7' : '#5b6373'

  const partView = (p: Part) => {
    const hidden = state.hidden.has(p.id)
    side.innerHTML = `
      <button class="back" id="back">← all parts</button>
      <h3>${p.name}</h3>
      <p class="meta">${CAT_LABEL[p.category]} · × ${p.qty} in this arm · ≈ ${p.mass_g} g each${p.mass_note ? ' (' + p.mass_note + ')' : ''} · ${p.price_usd ? '$' + p.price_usd.toFixed(2) + ' each' : (p.price_note ?? 'included')}</p>
      <p class="meta">${p.made_of}</p>
      <div class="actions">
        ${p.shown ? `<button class="mini" id="toggle">${hidden ? 'Put it back' : 'Take it out'}</button><button class="mini" id="solo">Show only this</button>` : ''}
        ${p.buy ? `<a class="mini" href="${p.buy}" target="_blank" rel="nofollow noopener">Where to buy ↗</a>` : ''}
      </div>
      <h5>What it is</h5><p>${p.what}</p>
      <h5>Why it is there</h5><p>${p.why}</p>
      ${p.spec.length ? `<h5>Numbers</h5><ul class="spec">${p.spec.map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join('')}</ul>` : ''}
      ${p.inside.length ? `<h5>Inside it</h5><ul class="inside">${p.inside.map(([k, v]) => `<li><b>${k}</b> ${v}</li>`).join('')}</ul>` : ''}
      ${p.print ? `<h5>Printing</h5><p>${p.print}</p>` : ''}
      <h5>Take it out and…</h5><p class="rm">${p.remove}</p>`
    side.querySelector('#back')!.addEventListener('click', () => select(null))
    side.querySelector('#toggle')?.addEventListener('click', () => { toggleHidden(p.id); partView(p) })
    side.querySelector('#solo')?.addEventListener('click', () => { state.hidden = new Set(data.parts.filter(x => x.shown && x.id !== p.id).map(x => x.id)); applyVisibility(); partView(p) })
    side.scrollTop = 0
  }

  const wireCommon = () => {
    side.querySelector<HTMLInputElement>('#explode')!.addEventListener('input', e => { state.explode = parseFloat((e.target as HTMLInputElement).value); applyExplode(); fit(true) })
    side.querySelector<HTMLInputElement>('#xray')!.addEventListener('change', e => { state.xray = (e.target as HTMLInputElement).checked; applyVisibility() })
    side.querySelectorAll<HTMLInputElement>('input[data-joint]').forEach(inp => inp.addEventListener('input', () => { state.q[inp.dataset.joint!] = parseFloat(inp.value); applyJoints() }))
    side.querySelector('#zero')!.addEventListener('click', () => { state.q = {}; applyJoints(); listView() })
    side.querySelector('#restore')?.addEventListener('click', () => { state.hidden.clear(); applyVisibility(); listView() })
    side.querySelectorAll<HTMLElement>('.row').forEach(r => r.addEventListener('click', e => { if ((e.target as HTMLElement).dataset.hide) return; select(r.dataset.part!) }))
    side.querySelectorAll<HTMLElement>('[data-hide]').forEach(b => b.addEventListener('click', e => { e.stopPropagation(); toggleHidden(b.dataset.hide!); listView() }))
  }

  const toggleHidden = (id: string) => { if (state.hidden.has(id)) state.hidden.delete(id); else state.hidden.add(id); applyVisibility() }

  const applyVisibility = () => {
    for (const m of meshes) {
      const p = parts.get(m.userData.part)!
      const hid = state.hidden.has(p.id)
      m.visible = !hid
      const mat = m.material as THREE.MeshStandardMaterial
      mat.opacity = state.xray && p.category === 'structure' ? 0.18 : 1
      mat.depthWrite = mat.opacity === 1
    }
  }
  const applyExplode = () => {
    const k = state.explode
    jointGroups.forEach(({ carrier }) => { const b = explodeBase.get(carrier)!; carrier.position.copy(b).multiplyScalar(1 + k * 0.9) })
    for (const m of meshes) { const b = explodeBase.get(m)!; m.position.copy(b).multiplyScalar(1 + k * 1.3) }
  }
  const applyJoints = () => { jointGroups.forEach(({ pivot, axis, j }) => pivot.quaternion.setFromAxisAngle(axis, state.q[j.name] ?? 0)) }

  const select = (partId: string | null) => {
    invalidate()
    state.selected = partId
    if (partId && parts.has(partId)) { partView(parts.get(partId)!); history.replaceState(null, '', '#part=' + partId) }
    else { listView(); if (location.hash) history.replaceState(null, '', location.pathname) }
    document.querySelectorAll<HTMLElement>('article.part').forEach(a => a.classList.toggle('active', a.dataset.part === partId))
  }

  // Static article titles double as selectors; deep links select on load.
  document.querySelectorAll<HTMLElement>('article.part h4').forEach(h => h.addEventListener('click', () => { select(h.parentElement!.dataset.part!); document.getElementById('explorer')!.scrollIntoView({ behavior: 'smooth' }) }))
  const m = /#part=([\w-]+)/.exec(location.hash)
  select(m && parts.has(m[1]) ? m[1] : null)

  // Frame the whole assembly (called after load and when the explode slider moves).
  const fit = (animate = false) => {
    scene.updateMatrixWorld(true)
    const box = new THREE.Box3()
    for (const m of meshes) if (m.visible) box.expandByObject(m)
    if (box.isEmpty()) return
    const c = box.getCenter(new THREE.Vector3()), size = box.getSize(new THREE.Vector3()).length()
    const dist = (size / 2) / Math.tan((camera.fov * Math.PI / 180) / 2) * 1.15
    const dir = camera.position.clone().sub(controls.target).normalize()
    if (dir.lengthSq() < 1e-6) dir.set(1, -0.9, 0.7).normalize()
    const pos = c.clone().addScaledVector(dir, dist)
    if (!animate) { controls.target.copy(c); camera.position.copy(pos) }
    else { fitTarget = { c, pos } }
    controls.update()
  }
  let fitTarget: { c: THREE.Vector3; pos: THREE.Vector3 } | null = null
  fit()
  const fitBtn = document.createElement('button'); fitBtn.className = 'mini fitbtn'; fitBtn.textContent = '⤢ fit view'; stage.appendChild(fitBtn)
  fitBtn.addEventListener('click', () => fit(true))

  // --- render loop ---
  const resize = () => { const w = stage.clientWidth, h = stage.clientHeight; renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix() }
  new ResizeObserver(() => { resize(); invalidate() }).observe(stage)
  resize()
  const SELC = new THREE.Color('#7dd3fc'), HOVC = new THREE.Color('#c084fc')
  // Render on demand: nothing is drawn while the page sits still.
  controls.addEventListener('change', invalidate)
  renderer.domElement.addEventListener('pointermove', invalidate)
  side.addEventListener('input', invalidate)
  side.addEventListener('click', invalidate)
  renderer.setAnimationLoop(() => {
    if (!dirty && !fitTarget) return
    dirty = false
    for (const mesh of meshes) {
      const mat = mesh.material as THREE.MeshStandardMaterial
      if (mesh.userData.part === state.selected) { mat.emissive.copy(SELC); mat.emissiveIntensity = 0.4 }
      else if (mesh.userData.part === state.hover) { mat.emissive.copy(HOVC); mat.emissiveIntensity = 0.25 }
      else mat.emissiveIntensity = 0
    }
    if (fitTarget) {
      controls.target.lerp(fitTarget.c, 0.12); camera.position.lerp(fitTarget.pos, 0.12)
      if (camera.position.distanceTo(fitTarget.pos) < 0.002) fitTarget = null
      dirty = true
    }
    controls.update()
    renderer.render(scene, camera)
  })
}
