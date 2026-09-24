import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import {
  mat as pmat, GOLD, TIN, ALU, PKG, setSeed, canvasTex, markTex, silk, box, board, chip, passives, ufl,
  crystal, ecap, jst, datamatrix, coreBoard, lteCard,
} from './parts'

// Detailed rebuilds for the photo-teardown pages: the inside of each robot
// (boards with their real chips and markings, battery cells, motors, fans)
// and the full exteriors of the two robots that have no published CAD (the
// Segway Navimow X3 and the Roborock Qrevo Curv 2 Flow). Everything is read off
// the rulers in the lab photos; nothing is a scan. Inside parts are built in
// millimetres (parts.ts helpers) and wrapped at 1/1000 to sit in the metre-scale
// robot. Exteriors are built in metres.

export const ACCENT = '#7dd3fc'
export interface Kit {
  group: THREE.Group
  shell: THREE.Material[]                       // faded in X-ray
  inner: THREE.Object3D[]                       // shown in X-ray
  parts: Map<string, THREE.Object3D>            // part id (as on the page) -> its 3D object
  tick: (t: number, playing: boolean) => boolean
}

// ---------- shared utilities ----------

type Finish = 'plastic' | 'satin' | 'gloss' | 'rubber' | 'metal' | 'glass'
const FINISH: Record<Finish, [number, number]> = {
  plastic: [0.55, 0.08], satin: [0.38, 0.1], gloss: [0.2, 0.05], rubber: [0.9, 0], metal: [0.3, 0.85], glass: [0.05, 0.4],
}
/** A shell material: its own instance, so X-ray can fade it without touching the inside parts. */
export function sm(color: string, f: Finish, shell: THREE.Material[]) {
  const m = new THREE.MeshStandardMaterial({ color, roughness: FINISH[f][0], metalness: FINISH[f][1] })
  shell.push(m)
  return m
}

/** Multi-line printed label (battery packs, pumps), left-aligned. */
function labelTex(w: number, h: number, rows: [string, number][], bg: string, fg: string) {
  return canvasTex(w, h, (c, W, H) => {
    c.fillStyle = bg; c.fillRect(0, 0, W, H)
    c.fillStyle = fg; c.textBaseline = 'top'; c.textAlign = 'left'
    const total = rows.reduce((a, r) => a + r[1], 0)
    let y = H * 0.07
    for (const [t, s] of rows) {
      const band = (H * 0.86) * s / total
      c.font = `600 ${band * 0.74}px "DejaVu Sans", Arial, sans-serif`
      c.fillText(t, W * 0.06, y, W * 0.88)
      y += band
    }
  })
}

/** A flat printed decal on an exterior surface; it fades with the shell. */
function decal(parent: THREE.Object3D, text: string, w: number, h: number, color: string, shell: THREE.Material[], weight = 700) {
  const t = canvasTex(w * 1000, h * 1000, (c, W, H) => {
    c.fillStyle = color
    c.font = `${weight} ${H * 0.72}px "DejaVu Sans", Arial, sans-serif`
    c.textAlign = 'center'; c.textBaseline = 'middle'
    c.fillText(text, W / 2, H / 2, W * 0.98)
  })
  const m = new THREE.MeshStandardMaterial({ map: t, transparent: true, depthWrite: false, roughness: 0.5 })
  m.userData.alwaysTransparent = true
  shell.push(m)
  const me = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m)
  me.userData.noShadow = true
  parent.add(me)
  return me
}

/** Point a decal's face at `out` (a direction), text upright along +Z. */
function face(me: THREE.Object3D, pos: THREE.Vector3, out: THREE.Vector3) {
  me.position.copy(pos)
  if (Math.abs(out.z) > 0.99) { me.rotation.set(out.z > 0 ? 0 : Math.PI, 0, Math.PI / 2); return }   // reads from the front
  me.up.set(0, 0, 1)
  me.lookAt(pos.clone().add(out))
}

/** Merge every plain (untextured, opaque) mesh that shares a material: one draw call instead of hundreds. */
export function bake(root: THREE.Object3D) {
  root.updateMatrixWorld(true)
  const inv = new THREE.Matrix4().copy(root.matrixWorld).invert()
  const buckets = new Map<string, { m: THREE.Material; g: THREE.BufferGeometry[]; src: THREE.Mesh[] }>()
  root.traverse(o => {
    const me = o as THREE.Mesh
    if (!me.isMesh || Array.isArray(me.material)) return
    for (let p: THREE.Object3D | null = me; p && p !== root; p = p.parent) if (p.userData.live || p.userData.part || !p.visible) return
    const mt = me.material as THREE.MeshStandardMaterial
    if (mt.map || mt.transparent || !mt.isMeshStandardMaterial) return
    const geo = me.geometry
    const key = mt.uuid + '|' + (geo.index ? 1 : 0) + '|' + Object.keys(geo.attributes).sort().join(',')
    const g = geo.clone().applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, me.matrixWorld))
    g.clearGroups()
    if (!buckets.has(key)) buckets.set(key, { m: mt, g: [], src: [] })
    const b = buckets.get(key)!
    b.g.push(g); b.src.push(me)
  })
  for (const b of buckets.values()) {
    if (b.src.length < 2) continue
    const merged = mergeGeometries(b.g, false)
    if (!merged) continue
    for (const s of b.src) s.removeFromParent()
    const m = new THREE.Mesh(merged, b.m)
    m.castShadow = true
    root.add(m)
  }
}

/** Give a part its own material copies, so picking it can light only it (and its clones). */
export function own(root: THREE.Object3D) {
  const seen = new Map<THREE.Material, THREE.Material>()
  const c = (m: THREE.Material) => {
    if (!seen.has(m)) {
      const k = m.clone()
      seen.set(m, k)
    }
    return seen.get(m)!
  }
  root.traverse(o => {
    const me = o as THREE.Mesh
    if (me.isMesh) me.material = Array.isArray(me.material) ? me.material.map(c) : c(me.material)
  })
  return root
}
export function light(root: THREE.Object3D, on: boolean) {
  root.traverse(o => {
    const me = o as THREE.Mesh
    if (!me.isMesh) return
    for (const m of Array.isArray(me.material) ? me.material : [me.material]) {
      const k = m as THREE.MeshStandardMaterial
      if (k.isMeshStandardMaterial && !k.userData.alwaysTransparent) { k.emissive.set(on ? ACCENT : '#000000'); k.emissiveIntensity = on ? 0.32 : 1 }
    }
  })
}
/** Mark sub-groups as separate parts and merge each one on its own first. */
function parts_(...gs: THREE.Object3D[]) { for (const g of gs) { g.userData.part = true; bake(g) } }

/** Wrap a millimetre-built group so it sits in a metre-scale robot. */
function mm(g: THREE.Object3D) {
  const o = new THREE.Group()
  g.scale.setScalar(0.001)
  o.add(g)
  return o
}
/** Bake a part, give it its own materials, wrap it to metres, register it. */
function part(parts: Map<string, THREE.Object3D>, id: string | null, g: THREE.Group) {
  bake(g)
  own(g)
  const o = mm(g)
  if (id) parts.set(id, o)
  return o
}

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)
const GREEN = '#2a7552'

function fence(g: THREE.Object3D, x: number, y: number, w: number, h: number, z: number) {
  box(g, w, 0.5, 1.3, TIN(), x, y - h / 2, z); box(g, w, 0.5, 1.3, TIN(), x, y + h / 2, z)
  box(g, 0.5, h, 1.3, TIN(), x - w / 2, y, z); box(g, 0.5, h, 1.3, TIN(), x + w / 2, y, z)
}
/** A metal heat-spreader lid with the maker's etching. */
function lid(g: THREE.Object3D, w: number, h: number, x: number, y: number, z: number, lines: string[]) {
  const top = new THREE.MeshStandardMaterial({ map: markTex(w, h, lines, '#c9ccd2', '#5b6069'), roughness: 0.32, metalness: 0.75 })
  box(g, w, h, 0.7, [ALU(), ALU(), ALU(), ALU(), top, ALU()], x, y, z)
}
/** A module with a printed label on top (LGA radio modules). */
function labelled(g: THREE.Object3D, w: number, h: number, t: number, x: number, y: number, z: number, lines: string[], bg: string, fg: string, side = TIN()) {
  const top = new THREE.MeshStandardMaterial({ map: markTex(w, h, lines, bg, fg), roughness: 0.5 })
  return box(g, w, h, t, [side, side, side, side, top, side], x, y, z)
}
function fpc(g: THREE.Object3D, x: number, y: number, z: number, w: number, rot = 0) {
  const h = new THREE.Group(); h.position.set(x, y, z); h.rotation.z = rot; g.add(h)
  box(h, w, 4.5, 1.6, pmat('#1a1b1f', 0.6), 0, 0, 0)
  box(h, w - 1, 1.6, 0.6, pmat('#d8cfb4', 0.6), 0, 1.8, 1.6)
}
function mosfet(g: THREE.Object3D, x: number, y: number, z: number, rot = 0) {
  const h = chip(g, 5, 6, x, y, z, [''], { rot })
  box(h, 4, 1.4, 0.25, TIN(), 0, 3.4, 0)
  return h
}
function usbc(g: THREE.Object3D, x: number, y: number, z: number, rot = 0) {
  const h = new THREE.Group(); h.position.set(x, y, z); h.rotation.z = rot; g.add(h)
  const m = new THREE.Mesh(new RoundedBoxGeometry(9, 7.5, 3.2, 2, 1.2), ALU())
  m.position.z = 1.6; h.add(m)
}
function tact(g: THREE.Object3D, x: number, y: number, z: number, s = 6) {
  box(g, s, s, 1.6, pmat('#20222a', 0.6), x, y, z)
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(s * 0.28, s * 0.28, 1.4, 20), pmat('#101114', 0.5))
  cap.rotation.x = Math.PI / 2; cap.position.set(x, y, z + 2.3); g.add(cap)
}
function holes(g: THREE.Object3D, pts: number[][], z: number) {
  for (const [x, y] of pts) {
    const r = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 0.08, 24), GOLD())
    r.rotation.x = Math.PI / 2; r.position.set(x, y, z + 0.04); g.add(r)
  }
}

// ================= Segway Navimow X3 (X390): inside =================

/** "Chameleon_cpu", about 150 x 75 mm: the Linux side. */
function navCpu(parts: Map<string, THREE.Object3D>) {
  setSeed(31)
  const g = new THREE.Group(), T = 1.6
  board(g, 150, 75, T, GREEN)
  const brain = new THREE.Group(); g.add(brain)
  fence(brain, 8, 0, 46, 44, T)
  box(brain, 19, 19, 0.9, PKG(), 12, 2, T)
  lid(brain, 15.5, 15.5, 12, 2, T + 0.9, ['ALLWINNER', 'MR527'])
  chip(brain, 10, 14, -6, 8, T, ['Rayson', 'RS1G32LX4', 'D4BNR-53BT'])
  chip(brain, 11.5, 13, -6, -11, T, ['Rayson', 'RS70B32G4'])
  chip(brain, 6, 6, 27, -14, T, ['X-Powers', 'AXP717B'], { legs: 'none' })
  crystal(brain, 22, 16, T, '24.000')
  const lte = new THREE.Group(); g.add(lte)
  labelled(lte, 29, 32, 2.4, -50, 12, T, ['Quectel', 'EC25-AF', 'LTE'], '#eceef1', '#2b2e35', pmat(GREEN, 0.6))
  ufl(lte, -32, 26, T)
  const wifi = new THREE.Group(); g.add(wifi)
  fence(wifi, 50, 2, 17, 17, T)
  chip(wifi, 8, 8, 50, 2, T, ['EA6621QF', 'CTX0T'], { legs: 'none' })
  crystal(wifi, 50, -10, T, '40.000', 2.5, 2)
  ufl(wifi, 64, -6, T)
  silk(wifi, 'WIFI/BT Antenna', 58, -14, T, 1.4)
  box(wifi, 16, 7, 1, pmat('#1d4f8f', 0.5), -62, 32, T)                 // Bluetooth antenna board
  fpc(g, 22, 33, T, 20); fpc(g, 46, 33, T, 16)
  jst(g, -30, -33, T, 6); jst(g, -10, -33, T, 4); jst(g, 30, -33, T, 8, 0, '#d4453b'); jst(g, 58, -33, T, 4)
  usbc(g, 70, 12, T, Math.PI / 2)
  for (const [x, y] of [[36, 22], [40, -22], [-28, -20], [-36, 24]]) ecap(g, x, y, T, 3, 5.5, '100')
  passives(g, -72, -35, 72, 35, T, 420, [[8, 0, 48, 46], [-50, 12, 30, 33], [50, 2, 19, 19], [-62, 32, 17, 8], [22, 33, 22, 6], [46, 33, 18, 6], [70, 12, 8, 10]])
  holes(g, [[-70, 33], [70, 33], [-70, -33], [70, -33], [-20, 33], [20, -33]], T)
  silk(g, 'Chameleon_cpu', -28, -24, T, 3)
  datamatrix(g, 62, 26, T, 7)
  parts_(brain, lte, wifi)
  bake(g)
  for (const [id, o] of [['brain', brain], ['4g', lte], ['wifi', wifi]] as const) { own(o); parts.set(id, o) }
  return mm(g)
}

/** "Chameleon_DRIVER_HP", about 240 x 170 mm: motors, battery, safety. */
function navDriver(parts: Map<string, THREE.Object3D>) {
  setSeed(47)
  const g = new THREE.Group(), T = 1.6
  board(g, 240, 170, T, GREEN)
  const mcu = new THREE.Group(); g.add(mcu)
  chip(mcu, 20, 20, 0, -5, T, ['GigaDevice', 'GD32F427', 'ZGT6'], { legs: 'qfp' })
  crystal(mcu, 16, 10, T, '8.000')
  const power = new THREE.Group(); g.add(power)
  for (const bx of [-78, 0, 78]) {
    for (let i = 0; i < 3; i++) for (let j = 0; j < 2; j++) mosfet(power, bx - 12 + i * 12, 58 + j * 11, T)
    box(power, 7, 3, 0.7, ALU(), bx, 45, T)
    ecap(power, bx - 26, 64, T, 5, 11, '470'); ecap(power, bx + 26, 64, T, 5, 11, '470')
  }
  const radio = new THREE.Group(); g.add(radio)
  const can = labelled(radio, 22, 20, 2.6, 78, -50, T, [''], '#c3c7cf', '#30333a')
  can.castShadow = true
  const ant = box(radio, 40, 11, 0.5, pmat('#16181c', 0.55), 96, -76, T)
  ant.castShadow = false
  silk(radio, 'PCA8530-2A', 96, -76, T + 0.5, 3)
  // Buzzer, battery connector, motor and sensor connectors.
  const bz = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 9, 28), pmat('#121316', 0.5))
  bz.rotation.x = Math.PI / 2; bz.position.set(-96, -58, T + 4.5); g.add(bz)
  box(g, 16, 8, 8, pmat('#e2b72b', 0.5), -108, 20, T)
  for (let i = 0; i < 6; i++) jst(g, -80 + i * 28, -80, T, i % 2 ? 4 : 6)
  jst(g, 110, 30, T, 6, Math.PI / 2); jst(g, 110, 0, T, 4, Math.PI / 2)
  for (const [x, y] of [[-40, -30], [40, 20], [-40, 30]]) ecap(g, x, y, T, 4, 8, '220')
  passives(g, -116, -82, 116, 82, T, 520, [[0, -5, 26, 26], [-78, 63, 60, 30], [0, 63, 60, 30], [78, 63, 60, 30], [78, -50, 24, 22], [96, -76, 42, 12], [-96, -58, 14, 14], [-108, 20, 18, 10]])
  holes(g, [[-114, 80], [114, 80], [-114, -80], [114, -80], [0, 80], [0, -80]], T)
  silk(g, 'Chameleon_DRIVER_HP', -60, -30, T, 4)
  parts_(mcu, power, radio)
  bake(g)
  for (const [id, o] of [['mcu', mcu], ['power', power], ['radio', radio]] as const) { own(o); parts.set(id, o) }
  return mm(g)
}

/** NBCF2213A: 24 cells of the 18650 size, 6S4P, standing in a 6 x 4 grid. */
function navBattery(parts: Map<string, THREE.Object3D>) {
  const g = new THREE.Group()
  const r = 9.25, h = 65
  const cellGeo = new THREE.CylinderGeometry(r, r, h, 22)
  const cellM = pmat('#3b7ccf', 0.35, 0.1), capM = TIN()
  for (let i = 0; i < 6; i++) for (let j = 0; j < 4; j++) {
    const c = new THREE.Mesh(cellGeo, cellM)
    c.rotation.x = Math.PI / 2; c.position.set(-46.25 + i * 18.5, -27.75 + j * 18.5, 2 + h / 2); g.add(c)
    const top = new THREE.Mesh(new THREE.CylinderGeometry(r * 0.72, r * 0.72, 0.6, 18), capM)
    top.rotation.x = Math.PI / 2; top.position.set(c.position.x, c.position.y, 2 + h + 0.3); g.add(top)
  }
  for (let i = 0; i < 6; i++) box(g, 7, 76, 0.3, TIN(), -46.25 + i * 18.5, 0, 2 + h + 0.6)   // nickel strips
  box(g, 118, 80, 2, pmat('#15171b', 0.6), 0, 0, 0)                                             // base tray
  const wrapM = new THREE.MeshStandardMaterial({ color: '#2a5fb8', transparent: true, opacity: 0.3, roughness: 0.25, depthWrite: false })
  const wrap = new THREE.Mesh(new RoundedBoxGeometry(118, 80, 70, 3, 4), wrapM)
  wrap.position.z = 35; g.add(wrap)
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(104, 62), new THREE.MeshStandardMaterial({ roughness: 0.6, map: labelTex(104, 62, [
    ['SEGWAY  NAVIMOW', 1.3], ['Li-ion Battery Pack NBCF2213A', 1], ['21.6 V  12800 mAh / 276.5 Wh', 1], ['6INR19/66-4', 1],
    ['De Power Technology', 0.9], ['Do not open, crush or heat', 0.8],
  ], '#141518', '#e9ebee') }))
  lab.rotation.x = Math.PI / 2; lab.position.set(0, -40.2, 36); g.add(lab)
  box(g, 16, 8, 8, pmat('#e2b72b', 0.5), 72, 10, 50)                                             // XT-style plug on its lead
  bake(g)
  own(g)
  parts.set('battery', g)
  return mm(g)
}

function gearMotor(parts?: Map<string, THREE.Object3D>) {
  const g = new THREE.Group()
  const can = new THREE.Mesh(new THREE.CylinderGeometry(20, 20, 46, 32), pmat('#1c1e22', 0.4, 0.5)); g.add(can)
  const gb = new THREE.Mesh(new THREE.CylinderGeometry(26, 26, 20, 32), ALU()); gb.position.y = 33; g.add(gb)
  const sh = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 14, 16), TIN()); sh.position.y = 50; g.add(sh)
  bake(g); own(g)
  if (parts) parts.set('power', g)
  return mm(g)
}
function bladeMotor() {
  const g = new THREE.Group()
  const body = new THREE.Mesh(new THREE.CylinderGeometry(35, 35, 26, 40), ALU()); body.rotation.x = Math.PI / 2; body.position.z = 13; g.add(body)
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2
    const f = new THREE.Mesh(new THREE.BoxGeometry(5, 1.2, 22), ALU()); f.position.set(Math.cos(a) * 37, Math.sin(a) * 37, 13); f.rotation.z = a; g.add(f)
  }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(30, 30, 4, 40), pmat('#15171b', 0.5)); cap.rotation.x = Math.PI / 2; cap.position.z = 28; g.add(cap)
  bake(g); own(g)
  return mm(g)
}

// ================= Segway Navimow X3 (X390): exterior =================

/** Top outline: square-shouldered rear (x = -rear), round nose (x = +front). */
function noseShape(rear: number, front: number, w: number, rr: number) {
  const s = new THREE.Shape()
  s.moveTo(-rear, -w + rr)
  s.quadraticCurveTo(-rear, -w, -rear + rr, -w)
  s.lineTo(front - w * 0.95, -w)
  s.bezierCurveTo(front - w * 0.35, -w, front, -w * 0.62, front, 0)
  s.bezierCurveTo(front, w * 0.62, front - w * 0.35, w, front - w * 0.95, w)
  s.lineTo(-rear + rr, w)
  s.quadraticCurveTo(-rear, w, -rear, w - rr)
  s.closePath()
  return s
}

export function buildMower(): Kit {
  const group = new THREE.Group(), shell: THREE.Material[] = [], inner: THREE.Object3D[] = [], parts = new Map<string, THREE.Object3D>()
  const DARK = sm('#2b2e33', 'plastic', shell), SHELL = sm('#3c4047', 'satin', shell), LID = sm('#4a4f58', 'satin', shell)
  const BLACK = sm('#15171b', 'gloss', shell), ORANGE = sm('#ef6420', 'plastic', shell), TYRE = sm('#ec6a26', 'rubber', shell)
  const RIM = sm('#1b1d21', 'plastic', shell), STEEL = sm('#c3c8cf', 'metal', shell), GLASS = sm('#0a0d11', 'glass', shell)
  const RED = sm('#d22a2e', 'gloss', shell), BRASS = sm('#b89a55', 'metal', shell)
  const ext = (shape: THREE.Shape, depth: number, bevel: number, m: THREE.Material, z: number) => {
    const geo = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: true, bevelThickness: bevel, bevelSize: bevel, bevelSegments: 5, curveSegments: 32 })
    const me = new THREE.Mesh(geo, m); me.position.z = z; group.add(me); return me
  }
  // Orange bumper strip: a ring round the bottom edge only; the underside itself is dark.
  const skirt = noseShape(0.335, 0.305, 0.228, 0.07)
  skirt.holes.push(noseShape(0.31, 0.28, 0.2, 0.05))
  ext(skirt, 0.016, 0.006, ORANGE, 0.068)
  ext(noseShape(0.32, 0.29, 0.215, 0.06), 0.098, 0.014, DARK, 0.082)         // chassis
  ext(noseShape(0.296, 0.266, 0.198, 0.05), 0.045, 0.028, SHELL, 0.19)      // upper shell

  // Lid, hex-ribbed rear panel, controls.
  const lidM = new THREE.Mesh(new RoundedBoxGeometry(0.3, 0.3, 0.014, 4, 0.006), LID); lidM.position.set(0.04, 0, 0.27); group.add(lidM)
  const hex = canvasTex(140, 300, (c, W, H) => {
    c.fillStyle = '#3c4047'; c.fillRect(0, 0, W, H)
    const r = W / 7
    c.strokeStyle = '#2f3238'; c.lineWidth = r * 0.16
    for (let row = -1; row < H / (r * 1.5) + 1; row++) for (let col = -1; col < W / (r * 1.73) + 1; col++) {
      const cx = col * r * 1.73 + (row % 2 ? r * 0.87 : 0), cy = row * r * 1.5
      c.beginPath()
      for (let k = 0; k < 6; k++) { const a = Math.PI / 6 + (k * Math.PI) / 3; c.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r) }
      c.closePath(); c.stroke()
    }
  })
  const hexM = new THREE.MeshStandardMaterial({ map: hex, roughness: 0.45, metalness: 0.1 }); shell.push(hexM)
  const hexP = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.26), hexM); hexP.position.set(-0.215, 0, 0.2635); group.add(hexP)
  const pad = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.13, 0.006, 3, 0.002), BLACK); pad.position.set(-0.128, 0, 0.265); group.add(pad)
  const stop = new THREE.Mesh(new RoundedBoxGeometry(0.045, 0.05, 0.014, 3, 0.004), RED); stop.position.set(-0.128, 0.028, 0.272); group.add(stop)
  const stopL = decal(group, 'STOP', 0.04, 0.012, '#ffffff', shell); face(stopL, V(-0.128, 0.028, 0.2795), V(0, 0, 1))
  for (const [i, ic] of ['▶', 'OK', '⌂'].entries()) {
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.0085, 0.0085, 0.006, 24), sm('#202227', 'satin', shell))
    b.rotation.x = Math.PI / 2; b.position.set(-0.128, -0.012 - i * 0.02, 0.269); group.add(b)
    const d = decal(group, ic, 0.012, 0.009, '#cfd3da', shell); face(d, V(-0.128, -0.012 - i * 0.02, 0.2722), V(0, 0, 1))
  }
  // Rear fender pods over the drive wheels; "X 390" on the right one.
  for (const y of [-0.25, 0.25]) {
    const pod = new THREE.Mesh(new RoundedBoxGeometry(0.2, 0.085, 0.13, 5, 0.032), SHELL); pod.position.set(-0.2, y, 0.205); group.add(pod)
  }
  const x390 = decal(group, 'X 390', 0.1, 0.028, '#c8ccd3', shell)
  face(x390, V(-0.2, -0.25, 0.2705), V(0, 0, 1))
  const logo = decal(group, 'NAVIMOW', 0.13, 0.022, '#aeb3bb', shell)
  face(logo, V(0.02, 0.2295, 0.14), V(0, 1, 0))
  const logoR = decal(group, 'NAVIMOW', 0.13, 0.022, '#aeb3bb', shell)
  face(logoR, V(0.02, -0.2295, 0.14), V(0, -1, 0))
  // Front vision module: black block, glass window, two lenses.
  const cam = new THREE.Mesh(new RoundedBoxGeometry(0.07, 0.17, 0.062, 4, 0.016), BLACK); cam.position.set(0.225, 0, 0.29); group.add(cam)
  const win = new THREE.Mesh(new THREE.PlaneGeometry(0.15, 0.036), GLASS); face(win, V(0.2605, 0, 0.292), V(1, 0, 0)); group.add(win)
  for (const y of [-0.05, 0.05]) {
    const ring = new THREE.Mesh(new THREE.CylinderGeometry(0.013, 0.013, 0.004, 28), STEEL); ring.rotation.z = Math.PI / 2; ring.position.set(0.2615, y, 0.292); group.add(ring)
    const lens = new THREE.Mesh(new THREE.CylinderGeometry(0.0095, 0.0095, 0.005, 28), GLASS); lens.rotation.z = Math.PI / 2; lens.position.set(0.263, y, 0.292); group.add(lens)
  }
  // Drive wheels: chevron-tread tyres, spoked rims.
  const wheels: THREE.Group[] = []
  for (const side of [-1, 1]) {
    const w = new THREE.Group()
    const R = 0.125, W = 0.07
    w.add(new THREE.Mesh(new THREE.CylinderGeometry(R, R, W, 56), TYRE))
    for (let i = 0; i < 20; i++) for (const half of [-1, 1]) {
      const a = (i / 20) * Math.PI * 2 + (half > 0 ? Math.PI / 20 : 0)
      const lug = new THREE.Mesh(new THREE.BoxGeometry(0.012, W / 2 - 0.006, 0.024), TYRE)
      lug.position.set(Math.cos(a) * (R + 0.004), half * W / 4, Math.sin(a) * (R + 0.004)); lug.rotation.y = -a; w.add(lug)
    }
    const rim = new THREE.Mesh(new THREE.CylinderGeometry(R * 0.66, R * 0.66, W + 0.004, 40), RIM); w.add(rim)
    for (let k = 0; k < 6; k++) {
      const a = (k / 6) * Math.PI * 2
      const sp = new THREE.Mesh(new THREE.BoxGeometry(0.075, 0.008, 0.012), sm('#26292e', 'satin', shell))
      sp.position.set(Math.cos(a) * 0.04, side * (W / 2 + 0.004), Math.sin(a) * 0.04); sp.rotation.y = -a; w.add(sp)
    }
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, W + 0.016, 24), STEEL); w.add(hub)
    w.position.set(-0.2, side * 0.305, 0.125); group.add(w); wheels.push(w)
  }
  // Front swivel casters.
  for (const y of [-0.13, 0.13]) {
    const fork = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.036, 0.06, 3, 0.01), DARK); fork.position.set(0.2, y, 0.075); group.add(fork)
    const cw = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.03, 32), RIM); cw.position.set(0.2, y, 0.04); group.add(cw)
  }
  // Blade disc underneath: six bolts, three pivoting steel blades.
  const blade = new THREE.Group()
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(0.115, 0.115, 0.008, 48), BLACK); disc.rotation.x = Math.PI / 2; blade.add(disc)
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    const b = new THREE.Mesh(new THREE.CylinderGeometry(0.005, 0.005, 0.004, 12), BRASS); b.rotation.x = Math.PI / 2; b.position.set(Math.cos(a) * 0.085, Math.sin(a) * 0.085, -0.005); blade.add(b)
  }
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2
    const bl = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.016, 0.002), STEEL); bl.position.set(Math.cos(a) * 0.125, Math.sin(a) * 0.125, -0.005); bl.rotation.z = a + 0.35; blade.add(bl)
  }
  blade.position.set(0.03, 0, 0.034); group.add(blade)

  // Inside.
  const cpu = navCpu(parts); cpu.position.set(0.13, 0, 0.216)
  const drv = navDriver(parts); drv.position.set(-0.08, 0, 0.098)
  const bat = navBattery(parts); bat.position.set(0.115, 0, 0.1)
  const bm = bladeMotor(); bm.position.set(0.03, 0, 0.045)
  inner.push(cpu, drv, bat, bm)
  for (const side of [-1, 1]) {
    const m = gearMotor(); m.rotation.z = side > 0 ? 0 : Math.PI; m.position.set(-0.2, side * 0.2, 0.125); inner.push(m)
  }
  for (const o of inner) group.add(o)

  let spin = 0, last = 0
  return {
    group, shell, inner, parts,
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

// ================= Roborock Qrevo Curv 2 Flow: inside =================

/** "BERYL LITE_MAIN B1": U-shaped, about 220 mm across. Opening faces the fan. */
function rrMain(parts: Map<string, THREE.Object3D>) {
  setSeed(59)
  const g = new THREE.Group(), T = 1.6
  const u = new THREE.Shape()
  u.moveTo(-104, -50); u.quadraticCurveTo(-110, -50, -110, -44)
  u.lineTo(-110, 64); u.quadraticCurveTo(-110, 70, -104, 70); u.lineTo(-56, 70); u.quadraticCurveTo(-50, 70, -50, 64)
  u.lineTo(-50, 6); u.quadraticCurveTo(-50, 0, -44, 0); u.lineTo(44, 0); u.quadraticCurveTo(50, 0, 50, 6)
  u.lineTo(50, 64); u.quadraticCurveTo(50, 70, 56, 70); u.lineTo(104, 70); u.quadraticCurveTo(110, 70, 110, 64)
  u.lineTo(110, -44); u.quadraticCurveTo(110, -50, 104, -50); u.closePath()
  const pcb = new THREE.Mesh(new THREE.ExtrudeGeometry(u, { depth: T, bevelEnabled: false, curveSegments: 8 }), [pmat(GREEN, 0.5, 0.1), pmat('#c9b27a', 0.7)])
  pcb.castShadow = pcb.receiveShadow = true
  g.add(pcb)
  const soc = new THREE.Group(); g.add(soc)
  labelled(soc, 32, 30, 2.6, -80, 22, T, [''], '#c3c7cf', '#30333a')
  chip(g, 10, 12, -80, -12, T, [''])
  const wifi = new THREE.Group(); g.add(wifi)
  labelled(wifi, 15, 15, 2.2, -70, 52, T, [''], '#c3c7cf', '#30333a', pmat(GREEN, 0.6))
  ufl(wifi, -58, 58, T)
  usbc(g, -95, 55, T, Math.PI / 2)
  for (const [x, y] of [[20, -8], [30, -8], [40, -8], [20, -20], [30, -20], [40, -20]]) mosfet(g, x + 50, y + 30, T)
  chip(g, 7, 7, 64, -36, T, ['105'], { legs: 'none' }); chip(g, 7, 7, 78, -36, T, ['100'], { legs: 'none' })
  for (const [x, y] of [[90, 58], [70, 58], [96, -30], [-30, -40]]) ecap(g, x, y, T, 3.2, 6, '25V')
  const blue = pmat('#2d64c8', 0.6)
  for (const [x, y, r] of [[-104, 0, Math.PI / 2], [-104, -30, Math.PI / 2], [-30, -45, 0], [0, -45, 0], [30, -45, 0], [104, 20, Math.PI / 2], [104, -10, Math.PI / 2], [60, 64, 0], [-60, 64, 0]]) {
    const c = jst(g, x, y, T, 4, r); box(c, 5, 3, 0.5, blue, 0, 0, 4.5)
  }
  chip(g, 12, 12, -20, -25, T, [''], { legs: 'qfp' })
  passives(g, -108, -48, 108, 68, T, 360, [[-80, 22, 34, 32], [-70, 52, 17, 17], [0, 30, 100, 60]])
  silk(g, 'BERYL LITE_MAIN B1', 0, -8, T, 3.2)
  silk(g, 'Seegem', -30, -12, T, 3)
  datamatrix(g, -40, -30, T, 6)
  parts_(soc, wifi)
  bake(g)
  own(soc); own(wifi); own(g)
  parts.set('soc', soc); parts.set('wifi', wifi); parts.set('main', g)
  return mm(g)
}

/** BRR-42C-5200AD: eight 18650-size cells, 4S2P, lying in two layers. */
function rrBattery(parts: Map<string, THREE.Object3D>) {
  const g = new THREE.Group()
  const r = 9.25, L = 65
  const cellGeo = new THREE.CylinderGeometry(r, r, L, 22), cellM = pmat('#2f8f67', 0.35, 0.1)
  for (let i = 0; i < 4; i++) for (let j = 0; j < 2; j++) {
    const c = new THREE.Mesh(cellGeo, cellM); c.rotation.z = Math.PI / 2; c.position.set(0, -27.75 + i * 18.5, 11.25 + j * 18.5); g.add(c)
  }
  for (const x of [-33.5, 33.5]) box(g, 0.3, 76, 36, TIN(), x, 0, 2)
  const wrapM = new THREE.MeshStandardMaterial({ color: '#2d5ed0', transparent: true, opacity: 0.32, roughness: 0.25, depthWrite: false })
  const wrap = new THREE.Mesh(new RoundedBoxGeometry(70, 79, 40, 3, 3), wrapM); wrap.position.z = 20.5; g.add(wrap)
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(62, 34), new THREE.MeshStandardMaterial({ roughness: 0.6, map: labelTex(62, 34, [
    ['Rechargeable Li-ion battery pack', 0.9], ['Model: BRR-42C-5200AD', 1.1], ['5200mAh / 74.88Wh   14.4V', 1.1],
    ['HUIZHOU DESAY BATTERY', 0.9], ['4ICR19/66-2', 0.9],
  ], '#e3e7ee', '#23262b') }))
  lab.rotation.x = Math.PI / 2; lab.position.set(0, -39.8, 20.5); g.add(lab)
  bake(g); own(g)
  parts.set('battery', g)
  return mm(g)
}

/** LiDAR board DY-07 (round, about 50 mm) with every pad labelled as printed. */
function rrLidarBoard() {
  setSeed(71)
  const g = new THREE.Group(), T = 1.2
  const s = new THREE.Shape(); s.absellipse(0, 0, 25, 20, 0, Math.PI * 2, false, 0)
  const hole = new THREE.Path(); hole.absarc(0, 0, 9, 0, Math.PI * 2, true); s.holes.push(hole)
  const pcb = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: T, bevelEnabled: false, curveSegments: 40 }), [pmat('#121418', 0.5, 0.1), pmat('#c9b27a', 0.7)])
  g.add(pcb)
  silk(g, 'DY-07', -15, 12, T, 2.2); silk(g, '301010527', 12, 15, T, 1.6); silk(g, '20250422', 12, 12.5, T, 1.6); silk(g, 'V1.2', 14, 10, T, 1.6)
  for (const [t, x, y] of [['VCC_LD', 6, -9], ['DET_PWR', 8, -13], ['ANGLE', 18, 4], ['MOT+', -20, 2], ['MOT-', -20, -2], ['PWM_CTL', -16, -8], ['TXD', 8, 11], ['RXD', -20, 7], ['BOOT', 12, -6]] as const) {
    silk(g, t, x, y, T, 1.1)
    const p = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.1, 12), TIN()); p.rotation.x = Math.PI / 2; p.position.set(x + (x > 0 ? -5 : 5), y, T + 0.05); g.add(p)
  }
  datamatrix(g, -14, -12, T, 5)
  box(g, 3.5, 3, 1.2, pmat('#1a1b1f', 0.6), 18, 8, T)
  const mirror = new THREE.Mesh(new THREE.CylinderGeometry(8.5, 8.5, 0.6, 32), pmat('#b8c4d8', 0.08, 0.95)); mirror.rotation.x = Math.PI / 2; mirror.position.z = T + 0.3; g.add(mirror)
  bake(g); own(g)
  return g
}
function rrOptics() {
  const g = new THREE.Group()
  box(g, 22, 18, 3, pmat('#1c1e23', 0.5), 0, 0, 0)
  const laser = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 12, 20), ALU()); laser.rotation.z = Math.PI / 2; laser.position.set(4, -5, 7); g.add(laser)
  const lens = new THREE.Mesh(new THREE.CylinderGeometry(4.5, 4.5, 8, 24), pmat('#101318', 0.1, 0.4)); lens.rotation.z = Math.PI / 2; lens.position.set(5, 5, 8); g.add(lens)
  bake(g); own(g)
  return g
}
function rrFan(parts: Map<string, THREE.Object3D>) {
  const g = new THREE.Group()
  const house = new THREE.Mesh(new THREE.CylinderGeometry(38, 38, 40, 48), pmat('#d8dbdf', 0.45)); house.rotation.x = Math.PI / 2; house.position.z = 20; g.add(house)
  box(g, 30, 26, 34, pmat('#d8dbdf', 0.45), 38, 12, 3)
  const motor = new THREE.Mesh(new THREE.CylinderGeometry(14, 14, 28, 32), ALU()); motor.rotation.x = Math.PI / 2; motor.position.z = 54; g.add(motor)
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(12, 12, 3, 32), pmat('#15171b', 0.5)); cap.rotation.x = Math.PI / 2; cap.position.z = 69; g.add(cap)
  bake(g); own(g)
  parts.set('fan', g)
  return mm(g)
}
function rrPump(parts: Map<string, THREE.Object3D>) {
  const g = new THREE.Group()
  const m = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 22, 28), pmat('#141518', 0.5)); m.rotation.z = Math.PI / 2; m.position.set(-18, 0, 10); g.add(m)
  box(g, 24, 20, 22, pmat('#eceef1', 0.5), 4, 0, 0)
  const lab = new THREE.Mesh(new THREE.PlaneGeometry(20, 16), new THREE.MeshStandardMaterial({ roughness: 0.6, map: labelTex(20, 16, [['PUMP', 1], ['DC12V', 1], ['CJVP20-AB12A', 1]], '#f4f5f7', '#16181c') }))
  lab.rotation.x = Math.PI / 2; lab.position.set(4, -10.1, 11); g.add(lab)
  bake(g); own(g)
  parts.set('pump', g)
  return mm(g)
}
function rrKey(parts: Map<string, THREE.Object3D>) {
  setSeed(83)
  const g = new THREE.Group(), T = 1.2
  board(g, 56, 26, T, GREEN)
  tact(g, -8, 2, T); tact(g, 12, 2, T)
  passives(g, -26, -11, 26, 11, T, 30, [[-8, 2, 8, 8], [12, 2, 8, 8]])
  silk(g, 'Beryl Lite_Key B1', 0, -9, T, 2)
  silk(g, 'Seegem', 18, 9, T, 1.8)
  bake(g); own(g)
  parts.set('key', g)
  return mm(g)
}
function rrLdsB(parts: Map<string, THREE.Object3D>) {
  const g = new THREE.Group(), T = 1.2
  board(g, 60, 15, T, GREEN)
  const pad = new THREE.Mesh(new THREE.CylinderGeometry(3.2, 3.2, 0.1, 24), pmat('#c77a3c', 0.4, 0.7)); pad.rotation.x = Math.PI / 2; pad.position.set(-2, 0, T + 0.05); g.add(pad)
  silk(g, 'BERYL LITE_LDS-B B1', 0, 5.2, T, 1.6)
  datamatrix(g, -20, 0, T, 6); datamatrix(g, 18, -1, T, 6)
  jst(g, 32, 0, T, 4, Math.PI / 2)
  bake(g); own(g)
  parts.set('ldsb', g)
  return mm(g)
}

// ================= Roborock Qrevo Curv 2 Flow: exterior =================

export function buildVacuum(): Kit {
  const group = new THREE.Group(), shell: THREE.Material[] = [], inner: THREE.Object3D[] = [], parts = new Map<string, THREE.Object3D>()
  const WHITE = sm('#eef0f3', 'gloss', shell), TOPW = sm('#f6f7f9', 'gloss', shell), GREY = sm('#8e949d', 'satin', shell)
  const DARK = sm('#1c1f24', 'gloss', shell), GLASS = sm('#0a0c10', 'glass', shell), RUBBER = sm('#26292e', 'rubber', shell)
  const MOP = sm('#d4d8de', 'rubber', shell), RED = sm('#d8352f', 'rubber', shell), ORANGE = sm('#e38a2a', 'plastic', shell)
  const BRISTLE = sm('#9aa0a8', 'rubber', shell), STEEL = sm('#c9ced6', 'metal', shell)

  const prof = [[0, 0.012], [0.165, 0.012], [0.175, 0.03], [0.176, 0.07], [0.168, 0.088], [0.14, 0.095], [0, 0.095]].map(([r, z]) => new THREE.Vector2(r, z))
  const body = new THREE.Mesh(new THREE.LatheGeometry(prof, 72), WHITE); body.rotation.x = Math.PI / 2; group.add(body)
  const top = new THREE.Mesh(new THREE.CylinderGeometry(0.138, 0.138, 0.003, 72), TOPW); top.rotation.x = Math.PI / 2; top.position.z = 0.0965; group.add(top)
  const BUMP = sm('#9aa0a8', 'satin', shell); BUMP.side = THREE.DoubleSide
  const bumper = new THREE.Mesh(new THREE.CylinderGeometry(0.178, 0.178, 0.045, 72, 1, true, Math.PI * 0.08, Math.PI * 0.84), BUMP)
  bumper.rotation.x = Math.PI / 2; bumper.position.z = 0.045; group.add(bumper)
  const eye = new THREE.Mesh(new RoundedBoxGeometry(0.012, 0.07, 0.016, 2, 0.004), GLASS); eye.position.set(0.176, 0, 0.05); group.add(eye)

  // LiDAR turret: base ring, dark housing, glass band. The inside optics spin with it.
  const turret = new THREE.Group()
  const baseR = new THREE.Mesh(new THREE.CylinderGeometry(0.046, 0.048, 0.006, 48), GREY); baseR.rotation.x = Math.PI / 2; baseR.position.z = -0.012; turret.add(baseR)
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.043, 0.044, 0.016, 48), DARK); cap.rotation.x = Math.PI / 2; cap.position.z = 0.01; turret.add(cap)
  const band = new THREE.Mesh(new THREE.CylinderGeometry(0.0435, 0.0435, 0.012, 48), GLASS); band.rotation.x = Math.PI / 2; band.position.z = -0.004; turret.add(band)
  turret.position.set(0.06, 0, 0.11); group.add(turret)
  // Power and home buttons behind the turret.
  for (const [y, ic] of [[-0.016, '⏻'], [0.016, '⌂']] as const) {
    const b = new THREE.Mesh(new RoundedBoxGeometry(0.022, 0.018, 0.004, 3, 0.0018), sm('#d9dde3', 'satin', shell)); b.position.set(-0.005, y, 0.0985); group.add(b)
    const d = decal(group, ic, 0.01, 0.01, '#6b717b', shell, 600); face(d, V(-0.005, y, 0.1008), V(0, 0, 1))
  }
  const brand = decal(group, 'roborock', 0.07, 0.014, '#b3b8c0', shell, 600); face(brand, V(-0.09, 0, 0.0982), V(0, 0, 1))

  // Underside: drive wheels, caster, split main brush, two side brushes, roller mop, cliff sensors, charge contacts.
  for (const y of [-0.12, 0.12]) {
    const w = new THREE.Group()
    w.add(new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.024, 40), RUBBER))
    for (let i = 0; i < 16; i++) {
      const a = (i / 16) * Math.PI * 2
      const lug = new THREE.Mesh(new THREE.BoxGeometry(0.005, 0.024, 0.008), RUBBER); lug.position.set(Math.cos(a) * 0.036, 0, Math.sin(a) * 0.036); lug.rotation.y = -a; w.add(lug)
    }
    w.add(new THREE.Mesh(new THREE.CylinderGeometry(0.02, 0.02, 0.026, 28), GREY))
    w.position.set(0, y, 0.022); group.add(w)
  }
  const caster = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.012, 20), RUBBER); caster.position.set(0.13, 0, 0.012); group.add(caster)
  const slot = new THREE.Mesh(new RoundedBoxGeometry(0.06, 0.2, 0.008, 2, 0.003), DARK); slot.position.set(0.03, 0, 0.009); group.add(slot)
  const brush = new THREE.Group()
  const bb = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.095, 28), RUBBER); bb.position.y = -0.049; brush.add(bb)
  const br = new THREE.Mesh(new THREE.CylinderGeometry(0.017, 0.017, 0.095, 28), RED); br.position.y = 0.049; brush.add(br)
  for (let i = 0; i < 4; i++) {
    const fin = new THREE.Mesh(new THREE.BoxGeometry(0.004, 0.19, 0.006), i % 2 ? RED : RUBBER)
    const a = (i / 4) * Math.PI * 2
    fin.position.set(Math.cos(a) * 0.018, 0, Math.sin(a) * 0.018); fin.rotation.y = -a; brush.add(fin)
  }
  brush.position.set(0.03, 0, 0.018); group.add(brush)
  const sides: THREE.Group[] = []
  for (const [y, hubM] of [[0.11, DARK], [-0.11, ORANGE]] as const) {
    const s = new THREE.Group()
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.011, 0.011, 0.006, 24), hubM); hub.rotation.x = Math.PI / 2; s.add(hub)
    for (let k = 0; k < 3; k++) {
      const arm = new THREE.Group(); arm.rotation.z = (k / 3) * Math.PI * 2
      const bristle = new THREE.Mesh(new THREE.CylinderGeometry(0.0022, 0.0012, 0.07, 8), BRISTLE); bristle.rotation.z = Math.PI / 2; bristle.position.x = 0.04; arm.add(bristle)
      s.add(arm)
    }
    s.position.set(0.115, y, 0.005); group.add(s); sides.push(s)
  }
  const carriage = new THREE.Mesh(new RoundedBoxGeometry(0.05, 0.28, 0.024, 3, 0.008), WHITE); carriage.position.set(-0.128, 0, 0.026); group.add(carriage)
  const mop = new THREE.Mesh(new THREE.CylinderGeometry(0.019, 0.019, 0.26, 36), MOP); mop.position.set(-0.128, 0, 0.019); group.add(mop)
  for (const [x, y] of [[0.14, 0.07], [0.14, -0.07], [0.06, 0.155], [0.06, -0.155]]) {
    const c = new THREE.Mesh(new THREE.BoxGeometry(0.014, 0.008, 0.002), DARK); c.position.set(x, y, 0.0115); group.add(c)
  }
  for (const y of [-0.035, 0.035]) { const c = new THREE.Mesh(new THREE.BoxGeometry(0.018, 0.008, 0.002), STEEL); c.position.set(0.1, y, 0.0115); group.add(c) }

  // Inside.
  const main = rrMain(parts); main.rotation.z = Math.PI / 2; main.position.set(0.02, 0, 0.055)
  const bat = rrBattery(parts); bat.position.set(0.085, 0.075, 0.016)
  const fan = rrFan(parts); fan.position.set(-0.04, 0, 0.012)
  const pump = rrPump(parts); pump.position.set(-0.1, 0.1, 0.04)
  const key = rrKey(parts); key.rotation.z = Math.PI / 2; key.position.set(-0.005, 0, 0.088)
  const ldsb = rrLdsB(parts); ldsb.rotation.z = Math.PI / 2; ldsb.position.set(0.02, -0.06, 0.084)
  const lb = rrLidarBoard(); parts.set('lidar', lb)
  const lbw = mm(lb); lbw.position.set(0.06, 0, 0.096)
  const optics = mm(rrOptics()); optics.position.set(0, 0, -0.008); turret.add(optics)
  inner.push(main, bat, fan, pump, key, ldsb, lbw, optics)
  for (const o of inner) if (!o.parent) group.add(o)

  let spin = 0, last = 0
  return {
    group, shell, inner, parts,
    tick: (t, playing) => {
      const dt = Math.min(0.05, t - last); last = t
      spin += dt
      turret.rotation.z = spin * (playing ? 9 : 1.2)            // the LiDAR always turns a little
      if (playing) { for (const s of sides) s.rotation.z = -spin * 14; brush.rotation.y = spin * 18; mop.rotation.y = spin * 10 }
      return true
    },
  }
}

// ================= Unitree Go1: inside =================

/** NVIDIA Jetson module on a SO-DIMM edge, heatsink and fan lifted above it. */
function jetson() {
  setSeed(101)
  const g = new THREE.Group(), T = 1.2
  board(g, 69.6, 45, T, '#171a1f')
  for (let i = 0; i < 62; i++) box(g, 0.55, 3.2, 0.06, GOLD(), -33 + i * 1.07, -21, T)
  box(g, 25, 25, 1.1, pmat('#2f6b45', 0.5), 6, 4, T)
  chip(g, 14.5, 14.5, 6, 4, T + 1.1, ['NVIDIA', 'S TW 2120A2', 'PC7C49.M0P', 'TM660M-A2'], { t: 0.7, bg: '#0d0e11', fg: '#cfd2d8' })
  chip(g, 14, 11, -20, 10, T, ['']); chip(g, 14, 11, -20, -6, T, ['']); chip(g, 11.5, 13, 27, 10, T, [''])
  passives(g, -33, -18, 33, 21, T, 180, [[6, 4, 27, 27], [-20, 10, 15, 12], [-20, -6, 15, 12], [27, 10, 13, 14]])
  const hs = new THREE.Group(); hs.position.z = T + 16; g.add(hs)
  box(hs, 60, 40, 3, ALU(), 0, 0, 0)
  for (let i = 0; i < 13; i++) box(hs, 1, 40, 12, ALU(), -27 + i * 4.5, 0, 3)
  const fan = new THREE.Group(); fan.position.z = 15; hs.add(fan)
  for (const [x, y, w, h] of [[0, 19, 40, 2], [0, -19, 40, 2], [19, 0, 2, 40], [-19, 0, 2, 40]]) box(fan, w, h, 8, pmat('#16181c', 0.5), x, y, 0)
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(8, 8, 7, 24), pmat('#16181c', 0.5)); hub.rotation.x = Math.PI / 2; hub.position.z = 4; fan.add(hub)
  for (let k = 0; k < 7; k++) { const a = (k / 7) * Math.PI * 2; const b = box(fan, 9, 4, 0.8, pmat('#23262c', 0.5), Math.cos(a) * 13, Math.sin(a) * 13, 3); b.rotation.z = a + 0.5 }
  bake(g)
  return g
}
function cm4() {
  setSeed(113)
  const g = new THREE.Group(), T = 1.2
  board(g, 55, 40, T, '#1f7a3e')
  lid(g, 15, 15, -4, -2, T, ['BROADCOM', '2711ZPKFSB06C0T'])
  chip(g, 13, 10, -4, -15, T, [''])
  labelled(g, 13, 11, 1.8, 14, 10, T, [''], '#c3c7cf', '#30333a')
  chip(g, 7, 7, 16, -12, T, [''], { legs: 'none' })
  holes(g, [[-23.5, 16.5], [23.5, 16.5], [-23.5, -16.5], [23.5, -16.5]], T)
  passives(g, -25, -18, 25, 18, T, 120, [[-4, -2, 17, 17], [-4, -15, 14, 11], [14, 10, 14, 12], [16, -12, 8, 8]])
  silk(g, 'Raspberry Pi Compute Module 4', -21, 0, T, 1.8, Math.PI / 2)
  silk(g, 'RPI-CM4Lite-R1.3', 8, 1, T, 1.8)
  bake(g)
  return g
}
function stereoCam() {
  const g = new THREE.Group(), T = 1.2
  board(g, 70, 22, T, '#131519')
  for (const x of [-16, 16]) {
    const barrel = new THREE.Mesh(new THREE.CylinderGeometry(6, 6, 7, 28), pmat('#111215', 0.4)); barrel.rotation.x = Math.PI / 2; barrel.position.set(x, 0, T + 3.5); g.add(barrel)
    const glass = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 1, 28), pmat('#1a2638', 0.05, 0.5)); glass.rotation.x = Math.PI / 2; glass.position.set(x, 0, T + 7.2); g.add(glass)
  }
  chip(g, 6, 6, 0, 0, T, [''], { legs: 'none' })
  bake(g)
  return g
}
/** Leg motor driver "MDRV_TINY V0.6": six transistors, three 1R5m shunts. */
function mdrvTiny() {
  setSeed(127)
  const g = new THREE.Group(), T = 1.2
  const disc = new THREE.Mesh(new THREE.CylinderGeometry(22, 22, T, 48), [pmat('#c9b27a', 0.7), pmat('#121418', 0.5, 0.1), pmat('#121418', 0.6)])
  disc.rotation.x = Math.PI / 2; disc.position.z = T / 2; g.add(disc)
  chip(g, 10, 10, -8, 2, T, [''], { legs: 'qfp' })
  for (let i = 0; i < 6; i++) mosfet(g, 12, -13 + i * 5.2, T, Math.PI / 2)
  for (let i = 0; i < 3; i++) { const s = chip(g, 3, 6, 4, -8 + i * 8, T, ['1R5m'], { bg: '#b9bcc2', fg: '#26282d' }); s.rotation.z = Math.PI / 2 }
  box(g, 10, 5, 5, pmat('#1a1b1f', 0.6), 0, 19, T); box(g, 10, 5, 5, pmat('#1a1b1f', 0.6), 0, -19, T)
  silk(g, 'MDRV_TINY V0.6', -6, -14, T, 1.8, 0.4)
  bake(g)
  return g
}
function smallWifi() {
  const g = new THREE.Group(), T = 1
  board(g, 38, 24, T, '#1d4f8f')
  chip(g, 10, 10, 2, 0, T, [''], { legs: 'none' })
  crystal(g, -6, -7, T, '40.000', 2.5, 2)
  ufl(g, -15, 7, T); ufl(g, -15, -7, T)
  bake(g)
  return g
}
function uwbHead() {
  const g = new THREE.Group(), T = 1.2
  board(g, 44, 30, T, '#131519')
  for (const [x, y] of [[-14, 8], [14, 8], [0, -9]]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(2.6, 2.6, 7, 16), GOLD()); post.rotation.x = Math.PI / 2; post.position.set(x, y, T + 3.5); g.add(post)
  }
  chip(g, 6, 6, 0, 3, T, [''], { legs: 'none' })
  bake(g)
  return g
}

interface BodyInfo { name: string; joint: { name: string; axis: number[] } | null }

/** Place a round driver board at every hinge joint, flat against its axis. */
function jointBoards(template: THREE.Object3D, pivots: Map<string, THREE.Group>, bodies: BodyInfo[], pick: (name: string) => THREE.Object3D, out: THREE.Object3D[]) {
  const Z = new THREE.Vector3(0, 0, 1)
  let first: THREE.Object3D | null = null
  for (const b of bodies) {
    if (!b.joint) continue
    const tpl = pick(b.joint.name)
    const o = tpl.clone(true)
    o.quaternion.setFromUnitVectors(Z, new THREE.Vector3().fromArray(b.joint.axis).normalize())
    pivots.get(b.name)!.add(o)
    out.push(o)
    first ??= o
  }
  return first
}

export function go1Inside(pivots: Map<string, THREE.Group>, bodies: BodyInfo[]) {
  const inner: THREE.Object3D[] = [], parts = new Map<string, THREE.Object3D>()
  const trunk = pivots.get('trunk')!
  const put = (id: string | null, g: THREE.Group, pos: number[], rot: number[] = [0, 0, 0]) => {
    const o = part(parts, id, g); o.position.fromArray(pos); o.rotation.set(rot[0], rot[1], rot[2]); trunk.add(o); inner.push(o); return o
  }
  const jA = jetson(); own(jA)
  put('jetson', jA, [-0.035, 0, 0.0])
  const jB = mm(jA.clone(true)); jB.position.set(0.045, 0, 0.0); trunk.add(jB); inner.push(jB)
  put('pi', cm4(), [-0.1, 0.02, 0.028])
  const lte = lteCard().group; lte.rotation.z = Math.PI
  const lteW = new THREE.Group(); lteW.add(lte); put('4g', lteW, [-0.14, -0.02, 0.03])
  const face = stereoCam(); own(face)
  put('cams', face, [0.255, 0, 0.0], [0, Math.PI / 2, 0])
  const chin = mm(face.clone(true)); chin.position.set(0.21, 0, -0.045); chin.rotation.set(Math.PI, 0, 0); trunk.add(chin); inner.push(chin)
  const belly = mm(face.clone(true)); belly.position.set(-0.02, 0, -0.05); belly.rotation.set(Math.PI, 0, 0); trunk.add(belly); inner.push(belly)
  put('wifi', smallWifi(), [0.12, -0.03, 0.03])
  put('uwb', uwbHead(), [0.2, 0, 0.045])
  const drv = mdrvTiny(); own(drv)
  const drvT = mm(drv)
  const first = jointBoards(drvT, pivots, bodies, () => drvT, inner)
  if (first) parts.set('motor', first)
  return { inner, parts }
}

// ================= Unitree G1: inside =================

/** "711 MAIN BOARD", ver 0.16, 2024/8/15, with the RK3588S core board plugged in. */
function mainBoard711(parts: Map<string, THREE.Object3D>) {
  setSeed(139)
  const g = new THREE.Group(), T = 1.6
  board(g, 170, 80, T, '#121418')
  const core = coreBoard()
  core.toggles[0].set(true)                                   // on the G1 the markings are legible
  const brain = new THREE.Group(); brain.add(core.group); brain.position.set(-6, -2, T + 3); g.add(brain)
  const wifi = new THREE.Group(); g.add(wifi)
  board(wifi, 26, 34, 1, GREEN); wifi.position.set(-66, 14, T)
  chip(wifi, 12, 12, 0, 2, 1, ['REALTEK', 'RTL8852'], { legs: 'none' })
  ufl(wifi, -9, -14, 1); ufl(wifi, 9, -14, 1)
  const radio = new THREE.Group(); g.add(radio)
  board(radio, 24, 30, 1, '#101216'); radio.position.set(-66, -22, T)
  chip(radio, 6, 6, -5, 6, 1, [''], { legs: 'none' }); chip(radio, 6, 6, 5, 6, 1, [''], { legs: 'none' }); chip(radio, 5, 5, 3, -7, 1, [''], { legs: 'none' })
  silk(radio, 'YS.PPRF', -4, -5, 1, 2, Math.PI / 2)
  ufl(radio, -8, -12, 1)
  usbc(g, -30, 34, T); usbc(g, -14, 34, T)
  for (const [i, t] of ['RST', 'REC', 'BOOT'].entries()) { tact(g, -22 + i * 8, -35, T, 4); silk(g, t, -22 + i * 8, -39.5, T, 1.8) }
  for (let i = 0; i < 8; i++) jst(g, -76 + (i % 4) * 9, 36 - Math.floor(i / 4) * 6, T, 4, 0, '#e8dcbc')
  for (let i = 0; i < 4; i++) { box(g, 12, 9, 9, pmat('#1a1b1f', 0.5), 44 + (i % 2) * 22, 24 - Math.floor(i / 2) * 44, T); silk(g, String(i + 1), 44 + (i % 2) * 22, 17 - Math.floor(i / 2) * 44, T, 2.4) }
  for (const [x, y] of [[40, -2], [60, -2]]) chip(g, 12, 12, x, y, T, ['150'], { legs: 'none', bg: '#4a4d54', fg: '#d6d9de' })
  for (const [x, y] of [[26, 16], [26, -18]]) ecap(g, x, y, T, 4, 7, '35V', false, '#6f1d1d')
  for (const [t, x, y] of [['BAT+', 80, 20], ['BAT-', 80, -20], ['BAT_485', 78, 2], ['FAN', 72, 36], ['SPK', -50, 36]] as const) silk(g, t, x, y, T, 2)
  const hidden = new THREE.Group(); g.add(hidden)
  for (const [x, w] of [[10, 14], [40, 11]]) { const c = chip(hidden, w, w, x, 0, 0, [''], { blank: true, legs: 'qfp' }); c.rotation.x = Math.PI }
  passives(g, -84, -38, 84, 38, T, 420, [[-6, -2, 64, 74], [-66, 14, 28, 36], [-66, -22, 26, 32], [55, 2, 40, 70]])
  silk(g, '711 MAIN BOARD', 62, 36, T, 3); silk(g, '2024/8/15  ver 0.16', 62, 32, T, 2.2)
  parts_(brain, wifi, radio, hidden)
  bake(g)
  for (const [id, o] of [['brain', brain], ['wifi', wifi], ['radio', radio], ['hidden', hidden]] as const) { own(o); parts.set(id, o) }
  own(g); parts.set('main', g)
  return g
}
/** Joint drivers: 711A (about 70 mm) for big joints, 711B (about 50 mm) for small ones. */
function jointDriver(big: boolean) {
  setSeed(big ? 151 : 157)
  const g = new THREE.Group(), T = 1.2, R = big ? 35 : 25, r = big ? 8 : 6
  const s = new THREE.Shape(); s.absarc(0, 0, R, 0, Math.PI * 2, false)
  const hole = new THREE.Path(); hole.absarc(0, 0, r, 0, Math.PI * 2, true); s.holes.push(hole)
  g.add(new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: T, bevelEnabled: false, curveSegments: 48 }), [pmat('#101216', 0.5, 0.1), pmat('#c9b27a', 0.7)]))
  if (big) {
    const ring = new THREE.Mesh(new THREE.RingGeometry(R * 0.55, R * 0.95, 64, 1, Math.PI * 0.15, Math.PI * 1.1), GOLD()); ring.position.z = T + 0.03; g.add(ring)
  } else {
    for (let i = 0; i < 12; i++) { const a = Math.PI * (0.1 + i * 0.07); box(g, 3, 2, 0.1, GOLD(), Math.cos(a) * R * 0.75, Math.sin(a) * R * 0.75, T).rotation.z = a }
  }
  chip(g, 6, 6, R * 0.35, -R * 0.35, T, [''], { legs: 'none' })
  for (let i = 0; i < 4; i++) mosfet(g, -R * 0.5 + i * 5.5, -R * 0.62, T)
  box(g, 9, 5, 5, pmat('#1a1b1f', 0.6), -R * 0.35, -R * 0.9, T); box(g, 9, 5, 5, pmat('#1a1b1f', 0.6), R * 0.35, -R * 0.9, T)
  silk(g, big ? '711A_MDRV_V1.1  2024/7/9' : '711B MDRV V1.0  2024/5/27', 0, -R * 0.3, T, big ? 2.2 : 1.6)
  if (!big) silk(g, 'Unitree', 0, r + 3, T, 2)
  bake(g)
  own(g)
  return mm(g)
}
function imu711() {
  const g = new THREE.Group(), T = 1.2
  board(g, 32, 32, T, '#101216')
  chip(g, 4, 4, 0, 4, T, [''], { legs: 'none' })
  silk(g, '711-EXT-IMU V0.1', 0, -6, T, 2); silk(g, '2024 9 25', 0, -9.5, T, 1.6); silk(g, 'UP ↑', 0, 11, T, 3)
  bake(g)
  return g
}

export function g1Inside(pivots: Map<string, THREE.Group>, bodies: BodyInfo[]) {
  const inner: THREE.Object3D[] = [], parts = new Map<string, THREE.Object3D>()
  const torso = pivots.get('torso_link')!, pelvis = pivots.get('pelvis')!
  // The main board stands in the chest, facing forward: board X across the chest, board Y up.
  const mb = mm(mainBoard711(parts))
  const holder = new THREE.Group(); holder.add(mb)
  mb.rotation.z = Math.PI / 2
  holder.rotation.y = Math.PI / 2
  holder.position.set(0.0, 0, 0.17)
  torso.add(holder); inner.push(holder)
  const imu = part(parts, 'imu', imu711()); imu.position.set(0.045, 0, -0.083); pelvis.add(imu); inner.push(imu)
  const A = jointDriver(true), B = jointDriver(false)
  const bigJoint = (n: string) => /hip|knee|waist_yaw/.test(n)
  const first = jointBoards(A, pivots, bodies, n => (bigJoint(n) ? A : B), inner)
  const knee = inner.find(o => o.parent === pivots.get('left_knee_link'))
  parts.set('joints', knee ?? first ?? A)
  return { inner, parts }
}

