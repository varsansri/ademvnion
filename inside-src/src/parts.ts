import * as THREE from 'three'

// Procedural 3D rebuilds of the Go2's parts, from the teardown photos: board
// outlines, chip sizes and every printed marking we could read. Units are
// millimetres, Z up, boards lie in the XY plane with their top face at z = t.
// Nothing here is a scan; sizes are read off the rulers in the photos.

// `at` is in the part's own frame, or in `obj`'s frame when the label must ride on a moving layer.
export interface Callout { at: THREE.Vector3; name: string; text: string; obj?: THREE.Object3D }
export interface Toggle { label: string; on: boolean; set: (on: boolean) => void }
export interface Built { group: THREE.Group; callouts: Callout[]; toggles: Toggle[]; explode?: (t: number) => void }

// ---------- materials and textures ----------

const mats = new Map<string, THREE.MeshStandardMaterial>()
export const mat = (color: string, rough = 0.55, metal = 0.1) => {
  const k = `${color}|${rough}|${metal}`
  if (!mats.has(k)) mats.set(k, new THREE.MeshStandardMaterial({ color, roughness: rough, metalness: metal }))
  return mats.get(k)!
}
export const GOLD = () => mat('#d8b25a', 0.3, 0.9)
export const TIN = () => mat('#c9ccd2', 0.35, 0.85)
export const COPPER = () => mat('#b8733d', 0.4, 0.8)
export const ALU = () => mat('#b7bcc4', 0.45, 0.7)
export const PKG = () => mat('#15161a', 0.6, 0.15)

// A small deterministic random, so passives land in the same place every load.
let seed = 7
export const setSeed = (n: number) => { seed = n }
export const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)

const PX = 22 // canvas pixels per mm
export function canvasTex(wmm: number, hmm: number, draw: (c: CanvasRenderingContext2D, w: number, h: number) => void) {
  const s = Math.min(PX, 1536 / Math.max(wmm, hmm))
  const cv = document.createElement('canvas')
  cv.width = Math.max(8, Math.round(wmm * s)); cv.height = Math.max(8, Math.round(hmm * s))
  const c = cv.getContext('2d')!
  draw(c, cv.width, cv.height)
  const t = new THREE.CanvasTexture(cv)
  t.colorSpace = THREE.SRGBColorSpace
  t.anisotropy = 4
  return t
}

// Laser-etched marking on a chip top.
export function markTex(w: number, h: number, lines: string[], bg = '#17181c', fg = '#b9bcc4') {
  return canvasTex(w, h, (c, W, H) => {
    c.fillStyle = bg; c.fillRect(0, 0, W, H)
    const n = lines.length
    const size = Math.min(H / (n + 1.2), (W * 0.9) / Math.max(...lines.map(l => l.length * 0.62)))
    c.fillStyle = fg
    c.font = `600 ${size}px "DejaVu Sans Mono", Consolas, monospace`
    c.textAlign = 'center'; c.textBaseline = 'middle'
    lines.forEach((l, i) => c.fillText(l, W / 2, H / 2 + (i - (n - 1) / 2) * size * 1.15))
    c.beginPath(); c.arc(W * 0.1, H * 0.12, Math.min(W, H) * 0.035, 0, 7); c.fillStyle = '#2a2c33'; c.fill()
  })
}

// A chip top with its marking ground away: matte grey, swirl marks, nothing to read.
export function groundTex(w: number, h: number) {
  return canvasTex(w, h, (c, W, H) => {
    c.fillStyle = '#3a3c42'; c.fillRect(0, 0, W, H)
    c.strokeStyle = 'rgba(255,255,255,.07)'
    for (let i = 0; i < 60; i++) {
      c.lineWidth = 1 + rnd() * 2
      c.beginPath(); c.arc(W * (0.2 + rnd() * 0.6), H * (1.3 + rnd()), W * (0.6 + rnd()), 3.6, 5.8); c.stroke()
    }
  })
}

// Silkscreen text as a transparent decal lying on a board.
export function silk(g: THREE.Object3D, text: string, x: number, y: number, z: number, size: number, rot = 0, color = '#e9ecf2') {
  const w = text.length * size * 0.62 + size, h = size * 1.5
  const t = canvasTex(w, h, (c, W, H) => {
    c.fillStyle = color
    c.font = `600 ${H * 0.66}px "DejaVu Sans", Arial, sans-serif`
    c.textAlign = 'center'; c.textBaseline = 'middle'
    c.fillText(text, W / 2, H / 2)
  })
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: t, transparent: true, depthWrite: false }))
  m.position.set(x, y, z + 0.02); m.rotation.z = rot
  g.add(m)
  return m
}

export function box(g: THREE.Object3D, w: number, h: number, d: number, m: THREE.Material | THREE.Material[], x = 0, y = 0, z = 0) {
  const b = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), m)
  b.position.set(x, y, z + d / 2)
  b.castShadow = b.receiveShadow = true
  g.add(b)
  return b
}

export function board(g: THREE.Object3D, w: number, h: number, t: number, color: string) {
  box(g, w, h, t, [mat('#c9b27a', 0.7), mat('#c9b27a', 0.7), mat('#c9b27a', 0.7), mat('#c9b27a', 0.7), mat(color, 0.5, 0.1), mat(color, 0.6)])
}

export interface ChipOpts { blank?: boolean; legs?: 'qfp' | 'soic' | 'none'; rot?: number; bg?: string; fg?: string; t?: number }
export function chip(g: THREE.Object3D, w: number, h: number, x: number, y: number, z: number, lines: string[], o: ChipOpts = {}) {
  const t = o.t ?? 1
  const holder = new THREE.Group()
  holder.position.set(x, y, z); holder.rotation.z = o.rot ?? 0
  const top = new THREE.MeshStandardMaterial({ map: o.blank ? groundTex(w, h) : markTex(w, h, lines, o.bg, o.fg), roughness: o.blank ? 0.9 : 0.6 })
  box(holder, w, h, t, [PKG(), PKG(), PKG(), PKG(), top, PKG()])
  if (o.legs === 'qfp' || o.legs === 'soic') {
    const pitch = Math.max(0.5, Math.min(w, h) / 14)
    const sides = o.legs === 'qfp' ? [0, 1, 2, 3] : [0, 2]
    for (const s of sides) {
      const len = s % 2 === 0 ? w : h
      const n = Math.floor((len - 1) / pitch)
      for (let i = 0; i < n; i++) {
        const u = -len / 2 + 0.5 + pitch * (i + 0.5) + ((len - 1) - n * pitch) / 2
        const L = new THREE.Mesh(new THREE.BoxGeometry(s % 2 === 0 ? pitch * 0.45 : 1.1, s % 2 === 0 ? 1.1 : pitch * 0.45, 0.18), TIN())
        if (s === 0) L.position.set(u, h / 2 + 0.5, 0.15)
        if (s === 2) L.position.set(u, -h / 2 - 0.5, 0.15)
        if (s === 1) L.position.set(w / 2 + 0.5, u, 0.15)
        if (s === 3) L.position.set(-w / 2 - 0.5, u, 0.15)
        holder.add(L)
      }
    }
  }
  g.add(holder)
  return holder
}

export function passives(g: THREE.Object3D, x0: number, y0: number, x1: number, y1: number, z: number, n: number, avoid: number[][] = []) {
  const colors = ['#8a6f55', '#1c1d21', '#b69a74', '#2a2b30']
  let placed = 0, tries = 0
  while (placed < n && tries++ < n * 8) {
    const x = x0 + rnd() * (x1 - x0), y = y0 + rnd() * (y1 - y0)
    if (avoid.some(([ax, ay, aw, ah]) => Math.abs(x - ax) < aw / 2 + 1 && Math.abs(y - ay) < ah / 2 + 1)) continue
    const big = rnd() < 0.2
    const b = box(g, big ? 2 : 1, big ? 1.25 : 0.5, big ? 0.9 : 0.4, mat(colors[Math.floor(rnd() * colors.length)], 0.6), x, y, z)
    b.rotation.z = rnd() < 0.5 ? 0 : Math.PI / 2
    b.castShadow = false
    placed++
  }
}

export function ufl(g: THREE.Object3D, x: number, y: number, z: number) {
  const base = box(g, 2.6, 2.6, 0.6, mat('#e8e2d0', 0.6), x, y, z)
  const c = new THREE.Mesh(new THREE.CylinderGeometry(0.95, 0.95, 1.2, 20), GOLD())
  c.rotation.x = Math.PI / 2; c.position.set(x, y, z + 1.2)
  g.add(c)
  return base
}

export function crystal(g: THREE.Object3D, x: number, y: number, z: number, text: string, w = 3.2, h = 2.5) {
  const top = new THREE.MeshStandardMaterial({ map: markTex(w, h, [text], '#b9bcc2', '#2a2c33'), roughness: 0.35, metalness: 0.7 })
  box(g, w, h, 0.8, [TIN(), TIN(), TIN(), TIN(), top, TIN()], x, y, z)
}

export function ecap(g: THREE.Object3D, x: number, y: number, z: number, r: number, hgt: number, label: string, lying = false, sleeve = '#15161a') {
  const tex = canvasTex(2 * Math.PI * r, hgt, (c, W, H) => {
    c.fillStyle = sleeve; c.fillRect(0, 0, W, H)
    c.fillStyle = '#9aa0aa'; c.font = `600 ${H * 0.28}px Arial`; c.textAlign = 'center'; c.textBaseline = 'middle'
    c.fillText(label, W * 0.3, H / 2); c.fillText(label, W * 0.8, H / 2)
    c.fillStyle = '#6b7280'; c.fillRect(W * 0.52, 0, W * 0.06, H)
  })
  const m = new THREE.Mesh(new THREE.CylinderGeometry(r, r, hgt, 28, 1, false), [new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }), ALU(), ALU()])
  if (lying) { m.rotation.z = Math.PI / 2; m.position.set(x, y, z + r) }
  else { m.rotation.x = Math.PI / 2; m.position.set(x, y, z + hgt / 2) }
  m.castShadow = true
  g.add(m)
}

export function jst(g: THREE.Object3D, x: number, y: number, z: number, pins: number, rot = 0, color = '#efe6cf') {
  const w = pins * 1.25 + 1.6
  const b = box(g, w, 4.2, 4.5, mat(color, 0.6), 0, 0, 0)
  const h = new THREE.Group(); h.add(b); h.position.set(x, y, z); h.rotation.z = rot
  g.add(h)
  return h
}

export function datamatrix(g: THREE.Object3D, x: number, y: number, z: number, s: number) {
  const t = canvasTex(s, s, (c, W) => {
    c.fillStyle = '#e8e8e8'; c.fillRect(0, 0, W, W)
    const n = 14, q = W / n
    c.fillStyle = '#111'
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (i === 0 || j === n - 1 || rnd() < 0.45) c.fillRect(i * q, j * q, q, q)
  })
  const m = new THREE.Mesh(new THREE.PlaneGeometry(s, s), new THREE.MeshBasicMaterial({ map: t }))
  m.position.set(x, y, z + 0.02)
  g.add(m)
}

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z)

// ---------- the parts ----------

export function coreBoard(): Built {
  seed = 11
  const g = new THREE.Group()
  const T = 1.2
  board(g, 62, 72, T, '#111418')
  // The orange outline in the photos: the shield frame's footprint.
  const frame = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.BoxGeometry(60, 70, 0.01)), new THREE.LineBasicMaterial({ color: '#d9822b' }))
  frame.position.z = T + 0.03; g.add(frame)

  const readable: THREE.Object3D[] = [], blank: THREE.Object3D[] = []
  const pair = (w: number, h: number, x: number, y: number, lines: string[], o: ChipOpts = {}, z = T) => {
    readable.push(chip(g, w, h, x, y, z, lines, o))
    const b = chip(g, w, h, x, y, z, lines, { ...o, blank: true }); b.visible = false; blank.push(b)
  }
  // Processor: substrate, then the lid carrying the marking.
  box(g, 19, 19, 0.8, PKG(), 4, -4, T)
  pair(13, 13, 4, -4, ['Rockchip', 'RK3588S', 'SBFXA2PBA 2350', 'CM47020 000'], { t: 0.6, bg: '#1d2027' }, T + 0.8)
  pair(10, 14.5, -18, -6, ['BIWIN', 'BWMZCX32H2A-32G-X', '2420S7400'])
  pair(14.5, 10, 4, -25, ['BIWIN', 'BWMZCX32H2A-32G-X', '2420S7400'])
  pair(11.5, 13, -18, 17, ['BIWIN  NAND', 'BWCTAKJ11X64G', '2343O602'])
  pair(7, 7, 10, 22, ['Rockchip', 'RK806-1'], { legs: 'none' })
  passives(g, -29, -34, 29, 34, T, 260, [[4, -4, 21, 21], [-18, -6, 12, 16], [4, -25, 16, 12], [-18, 17, 13, 15], [10, 22, 9, 9]])
  silk(g, 'XF_RK_Core_Board_V10', 26, 4, T, 2.4, Math.PI / 2)
  silk(g, '8+64G', -20, -30, T, 2.2)
  datamatrix(g, -24, -24, T, 6)
  const setBlank = (on: boolean) => { readable.forEach(o => (o.visible = !on)); blank.forEach(o => (o.visible = on)) }
  setBlank(true)
  return {
    group: g,
    toggles: [{ label: 'Show the markings (as in the humanoid)', on: false, set: on => setBlank(!on) }],
    callouts: [
      { at: V(4, -4, T + 2), name: 'Rockchip RK3588S', text: 'The processor. Four fast and four efficient Arm cores, a graphics unit and a 6 TOPS AI accelerator for vision. Walking control, cameras and the app all run here.' },
      { at: V(-18, -6, T + 1), name: 'Biwin BWMZCX32H2A-32G-X ×2', text: 'Working memory, 4 GB per chip, 8 GB in total. The “8” in the board’s “8+64G” label.' },
      { at: V(-18, 17, T + 1), name: 'Biwin BWCTAKJ11X64G', text: '64 GB of storage (the “64G”): the operating system, the walking software and saved maps.' },
      { at: V(10, 22, T + 1), name: 'Rockchip RK806 power chip', text: 'Turns battery power into the many exact voltages the processor and memory need, and switches them on in the right order.' },
      { at: V(26, 4, T), name: 'XF_RK_Core_Board_V10', text: 'The plug-in computer. On the Go2 every chip top is ground blank; the identical board in Unitree’s humanoid still shows its markings, which is how the chips are named.' },
    ],
  }
}

export function lteCard(): Built {
  seed = 23
  const g = new THREE.Group()
  const T = 0.8
  board(g, 51, 30, T, '#1f5a3a')
  // gold fingers along the short edge
  for (let i = 0; i < 26; i++) box(g, 2.6, 0.55, 0.06, GOLD(), -24.2, -12 + i * 0.95, T)
  const inner = new THREE.Group()
  g.add(inner)
  board(inner, 36, 26, 0.5, '#1f4f7a')
  inner.position.set(3, 0, T)
  const ti = 0.5
  chip(inner, 10, 10, -10, 5, ti, ['QUALCOMM', 'MDM9207', '0VV'])
  chip(inner, 11, 8, -10, -7, ti, ['NANYA', 'NM1282KSLAXAL-3B', '23522500EP'])
  chip(inner, 6, 6, 3, 7, ti, ['77033', 'F4PH'])
  chip(inner, 6, 7, 11, 7, ti, ['77031', 'F2XV'])
  chip(inner, 4.5, 4.5, 4, -7, ti, ['WTR2965', '0VV'])
  passives(inner, -17, -12, 17, 12, ti, 150, [[-10, 5, 11, 11], [-10, -7, 12, 9], [3, 7, 7, 7], [11, 7, 7, 8], [4, -7, 5, 5]])
  for (const [i, lab] of ['MAIN', 'GNSS', 'DIV'].entries()) { ufl(g, 23, 9 - i * 9, T); silk(g, lab, 23, 5.5 - i * 9, T, 1.6) }
  const lidTop = new THREE.MeshStandardMaterial({ map: markTex(38, 24, ['Quectel', 'EG25-G', 'LTE Cat 4 · Mini PCIe'], '#c3c7cf', '#30333a'), roughness: 0.35, metalness: 0.75 })
  const lid = box(g, 38, 24, 2.2, [TIN(), TIN(), TIN(), TIN(), lidTop, TIN()], 3, 0, T)
  const set = (open: boolean) => { lid.visible = !open }
  set(false)
  return {
    group: g,
    toggles: [{ label: 'Lift the shield', on: false, set }],
    callouts: [
      { at: V(3, 0, T + 2.4), name: 'Quectel EG25-G', text: 'A complete 4G LTE modem on a plug-in card, sold to device makers worldwide. It lets the app reach the dog when it is away from home Wi-Fi.' },
      { at: V(-7, 5, T + 1.5), name: 'Qualcomm MDM9207', text: 'The modem chip itself: turns data into LTE Cat 4 radio signals and back.' },
      { at: V(-7, -7, T + 1.5), name: 'Nanya NM1282KSLAXAL-3B', text: 'Memory and flash in one package: where the modem runs its own small operating system.' },
      { at: V(7, -7, T + 1.5), name: 'Qualcomm WTR2965', text: 'The radio transceiver: shifts signals between the modem and the antenna frequencies.' },
      { at: V(10, 7, T + 1.5), name: 'Qorvo 77031 / 77033', text: 'Power amplifiers that boost the outgoing signal enough to reach a cell tower.' },
      { at: V(23, 0, T + 1.5), name: 'MAIN · GNSS · DIV', text: 'Three antenna sockets: main 4G antenna, satellite positioning, and a second (diversity) antenna for a steadier signal.' },
    ],
  }
}

export function wifiModule(): Built {
  seed = 31
  const g = new THREE.Group()
  const T = 0.8
  board(g, 24, 19, T, '#2e8b3d')
  // castellated edge pads
  for (let i = 0; i < 9; i++) { box(g, 1, 1.2, 0.06, GOLD(), -10 + i * 2.5, 9.2, T); box(g, 1, 1.2, 0.06, GOLD(), -10 + i * 2.5, -9.2, T) }
  chip(g, 7, 7, -1, -1, T, ['Realtek', 'RTL8852BU', 'M3D06P4', 'GM30S'])
  crystal(g, 7, 6, T, '40MHz')
  ufl(g, 9, 6.5, T - 0.001 + 0.6)
  ufl(g, 9, -6.5, T)
  box(g, 2.5, 2.5, 1.2, mat('#2b2d33', 0.5), -7, 6, T)
  box(g, 2.5, 2.5, 1.2, mat('#2b2d33', 0.5), -7, -6, T)
  passives(g, -11, -8, 11, 8, T, 70, [[-1, -1, 8, 8], [7, 6, 4, 3], [9, 6.5, 3, 3], [9, -6.5, 3, 3], [-7, 6, 3, 3], [-7, -6, 3, 3]])
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(-1, -1, T + 1.2), name: 'Realtek RTL8852BU', text: 'Wi-Fi 6 (802.11ax) with two antennas, plus Bluetooth, in one chip that talks to the computer over USB. The phone app and the controller connect through it.' },
      { at: V(7, 6, T + 1), name: '40 MHz crystal', text: 'The timing reference every radio needs; the chip derives all its frequencies from it.' },
      { at: V(9, 0, T + 1.5), name: 'Two antenna sockets', text: 'One per Wi-Fi antenna (“chain 0” and “chain 1”). Two antennas let it send two streams at once.' },
      { at: V(0, 9.2, T), name: 'LB-Link BL-M8852BU1', text: 'The module: chip, crystal and filters pre-tested as one part, soldered onto Unitree’s main board by its edge pads.' },
    ],
  }
}

export function radioBoard(): Built {
  seed = 41
  const g = new THREE.Group()
  const T = 0.8
  board(g, 26, 20, T, '#141519')
  chip(g, 5, 5, 3, 4, T, [], { blank: true })
  chip(g, 5, 5, 6, -4, T, [], { blank: true })
  chip(g, 3.5, 3.5, -7, -3, T, ['2401C', '24031', 'VH2210'])
  crystal(g, 10, 5, T, '16.000', 2.5, 2)
  crystal(g, 10, -7, T, '52.000', 2.5, 2)
  ufl(g, -10, 6.5, T)
  box(g, 2.8, 1.6, 1, PKG(), -4, 5, T)
  passives(g, -12, -9, 12, 9, T, 60, [[3, 4, 6, 6], [6, -4, 6, 6], [-7, -3, 5, 5], [10, 5, 3, 3], [10, -7, 3, 3], [-10, 6.5, 3, 3]])
  silk(g, 'YS.PPRF 23', -2, -7.5, T, 1.8, 0, '#e8b64c')
  silk(g, '21.11', -6, -9, T, 1.4, 0, '#e8b64c')
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(4.5, 0, T + 1.2), name: 'Two chips, ground blank', text: 'The radio and its controller. Unitree ground the part numbers off both, so which chips they are stays hidden.' },
      { at: V(-7, -3, T + 1), name: '2401C front end', text: 'A 2.4 GHz amplifier pair: one boosts what the dog sends, the other cleans up what it hears. It extends the range to the remote.' },
      { at: V(10, -1, T + 1), name: '16 MHz and 52 MHz crystals', text: 'Two timing references, one for each chip.' },
      { at: V(-10, 6.5, T + 1.5), name: 'Antenna socket', text: 'To the remote-control antenna. A separate LoRa antenna gives a slower, longer-range link as well.' },
    ],
  }
}

export function uwbBoard(): Built {
  seed = 53
  const g = new THREE.Group()
  const T = 1
  const s = new THREE.Shape()
  const R = 17, D = 17
  // four overlapping round lobes: the clover-shaped antenna board
  s.moveTo(D + R, 0)
  for (let k = 0; k < 4; k++) {
    const a = (k * Math.PI) / 2
    s.absarc(Math.cos(a) * D, Math.sin(a) * D, R, a - 1.9, a + 1.9, false)
  }
  const geo = new THREE.ExtrudeGeometry(s, { depth: T, bevelEnabled: false, curveSegments: 24 })
  const ant = new THREE.Mesh(geo, [mat('#d7a743', 0.45, 0.35), mat('#b98d36', 0.6)])
  ant.castShadow = ant.receiveShadow = true
  g.add(ant)
  for (let k = 0; k < 4; k++) {
    const a = (k * Math.PI) / 2 + Math.PI / 4
    const p = new THREE.Mesh(new THREE.CylinderGeometry(1.4, 1.4, 6, 16), GOLD())
    p.rotation.x = Math.PI / 2; p.position.set(Math.cos(a) * 13, Math.sin(a) * 13, T + 3)
    g.add(p)
  }
  const cb = new THREE.Group(); cb.position.set(0, 0, T + 6); g.add(cb)
  board(cb, 30, 26, 0.8, '#c9731f')
  chip(cb, 6, 6, -6, 2, 0.8, [], { blank: true, legs: 'qfp' })
  chip(cb, 4, 4, 5, 5, 0.8, [], { blank: true, rot: Math.PI / 4 })
  chip(cb, 4, 4, 5, -4, 0.8, [], { blank: true, rot: Math.PI / 4 })
  box(cb, 3, 3, 1, PKG(), 11, 5, 0.8); box(cb, 3, 3, 1, PKG(), 11, -5, 0.8)
  crystal(cb, 0, 10, 0.8, '38.4')
  for (const y of [9, 3, -3, -9]) ufl(cb, 13.5, y, 0.8)
  passives(cb, -14, -12, 14, 12, 0.8, 70, [[-6, 2, 9, 9], [5, 5, 6, 6], [5, -4, 6, 6], [11, 5, 4, 4], [11, -5, 4, 4], [0, 10, 4, 3], [13.5, 0, 4, 22]])
  silk(cb, 'E2L', -12, -9, 0.8, 2, Math.PI / 2)
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(0, 0, T + 8.5), name: 'UWB chips, ground blank', text: 'Ultra-wideband radio sends very short pulses and times their echoes to the remote to a few centimetres. That is how follow-me mode knows exactly where you are. The part numbers were removed.' },
      { at: V(-6, 2, T + 8.5), name: 'Controller, ground blank', text: 'A microcontroller that runs the ranging and passes positions to the main computer.' },
      { at: V(13.5, 0, T + 8), name: 'Four antenna sockets', text: 'One per antenna. Comparing when a pulse arrives at each one gives the angle to the remote, not just the distance.' },
      { at: V(-24, 0, T), name: 'Clover antenna board', text: 'Four antennas in a square, fed by the four gold posts, so the arrival-time differences can be turned into a direction.' },
    ],
  }
}

export function legMotor(): Built {
  seed = 61
  const g = new THREE.Group()
  const layers: { o: THREE.Object3D; z: number; dz: number }[] = []
  const layer = (o: THREE.Object3D, z: number, dz: number) => { o.position.z = z; g.add(o); layers.push({ o, z, dz }) }

  // Aluminium housing: a shallow cup with cooling ribs.
  const housing = new THREE.Group()
  const prof = [new THREE.Vector2(0, 0), new THREE.Vector2(50, 0), new THREE.Vector2(50, 26), new THREE.Vector2(47, 26), new THREE.Vector2(47, 3), new THREE.Vector2(0, 3)]
  const cup = new THREE.Mesh(new THREE.LatheGeometry(prof, 64), ALU())
  cup.rotation.x = Math.PI / 2; cup.castShadow = cup.receiveShadow = true
  housing.add(cup)
  for (let k = 0; k < 24; k++) {
    const a = (k / 24) * Math.PI * 2
    const rib = new THREE.Mesh(new THREE.BoxGeometry(4, 5, 22), ALU())
    rib.position.set(Math.cos(a) * 52, Math.sin(a) * 52, 13); rib.rotation.z = a
    housing.add(rib)
  }
  layer(housing, 0, 0)

  // Stator: iron core with copper windings on every tooth.
  const stator = new THREE.Group()
  const core = new THREE.Mesh(new THREE.CylinderGeometry(22, 22, 12, 48), mat('#6b7078', 0.5, 0.6))
  core.rotation.x = Math.PI / 2; core.position.z = 6; stator.add(core)
  const teeth = 24
  for (let k = 0; k < teeth; k++) {
    const a = (k / teeth) * Math.PI * 2
    const tooth = new THREE.Mesh(new THREE.BoxGeometry(12, 3, 12), mat('#6b7078', 0.5, 0.6))
    tooth.position.set(Math.cos(a) * 28, Math.sin(a) * 28, 6); tooth.rotation.z = a; stator.add(tooth)
    const coil = new THREE.Mesh(new THREE.BoxGeometry(9, 5, 13), COPPER())
    coil.position.set(Math.cos(a) * 28.5, Math.sin(a) * 28.5, 6); coil.rotation.z = a; stator.add(coil)
  }
  layer(stator, 4, 26)

  // Rotor: steel bell with alternating magnets on the inside wall.
  const rotor = new THREE.Group()
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(44, 44, 14, 64, 1, true), mat('#2a2d33', 0.4, 0.7))
  bell.rotation.x = Math.PI / 2; bell.position.z = 7; rotor.add(bell)
  for (let k = 0; k < 28; k++) {
    const a = (k / 28) * Math.PI * 2
    const mg = new THREE.Mesh(new THREE.BoxGeometry(2.5, 8.5, 13), mat(k % 2 ? '#8a8f99' : '#5d626b', 0.35, 0.8))
    mg.position.set(Math.cos(a) * 41.5, Math.sin(a) * 41.5, 7); mg.rotation.z = a; rotor.add(mg)
  }
  layer(rotor, 4, 58)

  // Driver board: round, black, power stage around a centre chip.
  const drv = new THREE.Group()
  const disk = new THREE.Mesh(new THREE.CylinderGeometry(40, 40, 1.6, 64), [mat('#c9b27a', 0.7), mat('#101216', 0.5), mat('#101216', 0.6)])
  disk.rotation.x = Math.PI / 2; disk.position.z = 0.8; drv.add(disk)
  const white = new THREE.Mesh(new THREE.RingGeometry(9, 15, 48), new THREE.MeshBasicMaterial({ color: '#dfe3ea' }))
  white.position.z = 1.62; drv.add(white)
  chip(drv, 5, 4, 0, 0, 1.6, [], { blank: true, legs: 'soic' })
  for (let r = 0; r < 3; r++) for (let c = 0; c < 6; c++) {
    const x = -30 + c * 4.2 + r * 2.5, y = -6 - r * 6 - c * 3.4
    box(drv, 3.2, 4.8, 1, mat('#8a6f55', 0.6), x, y, 1.6)
  }
  for (let k = 0; k < 6; k++) box(drv, 5, 6, 1.1, PKG(), 6 + (k % 3) * 6.5, -24 - Math.floor(k / 3) * 7, 1.6)
  ecap(drv, -20, 24, 1.6, 4, 12, 'NOVA', true)
  ecap(drv, 18, 26, 1.6, 4, 12, 'NOVA', true)
  ecap(drv, 26, 12, 1.6, 4, 12, 'NOVA', true)
  ecap(drv, 22, -12, 1.6, 4, 12, 'NOVA', true)
  silk(drv, 'M12_MDRV_V1.9.1', 10, -34, 1.6, 2.4)
  silk(drv, '2023/5/10', 10, -30.5, 1.6, 2)
  silk(drv, 'Unitree', 12, -26.5 + 30, 1.6, 4)
  silk(drv, 'GCD3 GTRA', -4, 32, 1.6, 2.2)
  layer(drv, 20, 92)

  // Position-sensor board: the green five-armed star.
  const enc = new THREE.Group()
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 1.2, 32), mat('#1f7a4a', 0.5))
  hub.rotation.x = Math.PI / 2; enc.add(hub)
  for (let k = 0; k < 5; k++) {
    const a = (k / 5) * Math.PI * 2
    const arm = new THREE.Mesh(new THREE.BoxGeometry(14, 5, 1.2), mat('#1f7a4a', 0.5))
    arm.position.set(Math.cos(a) * 11, Math.sin(a) * 11, 0); arm.rotation.z = a; enc.add(arm)
    const pad = new THREE.Mesh(new THREE.CylinderGeometry(3, 3, 1.3, 20), mat('#1f7a4a', 0.5))
    pad.rotation.x = Math.PI / 2; pad.position.set(Math.cos(a) * 18, Math.sin(a) * 18, 0); enc.add(pad)
    ecap(enc, Math.cos(a) * 18, Math.sin(a) * 18, 0.6, 2.2, 4, '', false, '#c9ced6')
  }
  box(enc, 4, 3, 1.5, mat('#efe6cf', 0.6), 0, 0, 0.6)
  layer(enc, 23, 120)

  const explode = (t: number) => layers.forEach(l => (l.o.position.z = l.z + l.dz * t))
  explode(0.55)
  return {
    group: g, toggles: [], explode,
    callouts: [
      { obj: housing, at: V(0, -50, 22), name: 'Aluminium housing', text: 'The joint’s shell and heat sink: the fins carry the motor’s heat into the air. It is also the structure the leg hangs from.' },
      { obj: stator, at: V(28, 0, 12), name: 'Stator: copper coils', text: 'Fixed coils around an iron core. Switching current through them in turn makes a rotating magnetic field.' },
      { obj: rotor, at: V(0, 44, 14), name: 'Rotor: magnet ring', text: 'Outrunner design: the magnets sit on the outside and spin around the coils. A wide rotor gives high torque, which walking needs.' },
      { obj: drv, at: V(-24, -14, 3), name: 'Power stage (MOSFETs)', text: 'Rows of power transistors switch battery current into the three motor phases thousands of times a second.' },
      { obj: drv, at: V(0, 0, 3), name: 'Centre chip, ground blank', text: 'The motor controller sits over the shaft, where it can read the magnet on the rotor. Its marking was removed.' },
      { obj: drv, at: V(10, -34, 2), name: 'M12_MDRV_V1.9.1', text: 'Unitree’s motor driver, dated 2023/5/10. Every one of the 12 joints has one, so the main computer only sends commands down a wire.' },
      { obj: enc, at: V(18, 0, 2), name: 'Position-sensor board', text: 'Measures the joint angle so the controller knows exactly where the leg is, many times a second.' },
    ],
  }
}

export function blowerFan(): Built {
  seed = 71
  const g = new THREE.Group()
  const shell = new THREE.Shape()
  shell.moveTo(-20, -20); shell.lineTo(20, -20); shell.lineTo(20, 20); shell.lineTo(-20, 20); shell.lineTo(-20, -20)
  const hole = new THREE.Path(); hole.absarc(-1, 1, 14, 0, Math.PI * 2, true); shell.holes.push(hole)
  const top = new THREE.Mesh(new THREE.ExtrudeGeometry(shell, { depth: 1.2, bevelEnabled: false }), mat('#18191d', 0.55))
  top.position.z = 8.8; g.add(top)
  box(g, 40, 40, 1.2, mat('#18191d', 0.55), 0, 0, 0)
  box(g, 40, 1.5, 8, mat('#18191d', 0.55), 0, 19.25, 1)
  box(g, 1.5, 40, 8, mat('#18191d', 0.55), -19.25, 0, 1)
  box(g, 1.5, 22, 8, mat('#18191d', 0.55), 19.25, 9, 1)
  const imp = new THREE.Group(); imp.position.set(-1, 1, 1.2); g.add(imp)
  const hubTex = canvasTex(20, 20, (c, W) => {
    c.fillStyle = '#f2f4f7'; c.beginPath(); c.arc(W / 2, W / 2, W / 2, 0, 7); c.fill()
    c.fillStyle = '#2b7bbd'; c.fillRect(0, W * 0.42, W, W * 0.16)
    c.fillStyle = '#fff'; c.font = `700 ${W * 0.085}px Arial`; c.textAlign = 'center'; c.fillText('DC BRUSHLESS', W / 2, W * 0.53)
    c.fillStyle = '#333'; c.font = `600 ${W * 0.08}px Arial`; c.fillText('DC-12V', W / 2, W * 0.68)
    c.font = `500 ${W * 0.05}px Arial`; c.fillText('Shenzhen Zhuoming', W / 2, W * 0.8)
    c.fillText('MADE IN CHINA', W / 2, W * 0.3)
  })
  const hub = new THREE.Mesh(new THREE.CylinderGeometry(10, 10, 7, 40), [mat('#18191d'), new THREE.MeshStandardMaterial({ map: hubTex, roughness: 0.6 }), mat('#18191d')])
  hub.rotation.x = Math.PI / 2; hub.position.z = 3.5; imp.add(hub)
  for (let k = 0; k < 17; k++) {
    const a = (k / 17) * Math.PI * 2
    const b = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.8, 6.5), mat('#1e1f24', 0.5))
    b.position.set(Math.cos(a) * 11.8, Math.sin(a) * 11.8, 3.3); b.rotation.z = a + 0.5; imp.add(b)
  }
  const wire = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([V(16, -16, 5), V(22, -26, 6), V(30, -30, 4), V(38, -32, 3)]), 20, 0.7, 8), mat('#111', 0.5))
  g.add(wire)
  box(g, 5, 3, 3, mat('#efe6cf', 0.6), 40, -32, 1.5)
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(-1, 1, 10.5), name: 'DC brushless blower, 12 V', text: 'Made by Shenzhen Zhuoming Electronics. A blower pulls air in through the top and pushes it out sideways, in one direction, across the heatsink.' },
      { at: V(12, 9, 5), name: 'Side outlet', text: 'The air leaves here, aimed along the core board’s heat pipes.' },
    ],
  }
}

export function lidarMotor(): Built {
  seed = 83
  const g = new THREE.Group()
  const T = 1.2
  // The small brushless motor.
  const m = new THREE.Group(); m.position.set(-22, 0, 0); g.add(m)
  const bell = new THREE.Mesh(new THREE.CylinderGeometry(24, 24, 10, 56, 1, true), mat('#141519', 0.45, 0.4))
  bell.rotation.x = Math.PI / 2; bell.position.z = 5; m.add(bell)
  const lip = new THREE.Mesh(new THREE.RingGeometry(21, 24, 56), mat('#141519', 0.45, 0.4))
  lip.position.z = 0.02; m.add(lip)
  for (let k = 0; k < 18; k++) {
    const a = (k / 18) * Math.PI * 2
    const coil = new THREE.Mesh(new THREE.BoxGeometry(6, 3.2, 8), COPPER())
    coil.position.set(Math.cos(a) * 15.5, Math.sin(a) * 15.5, 4.5); coil.rotation.z = a; m.add(coil)
  }
  const bear = new THREE.Mesh(new THREE.CylinderGeometry(11, 11, 9, 40), mat('#c9ccd2', 0.3, 0.9))
  bear.rotation.x = Math.PI / 2; bear.position.z = 4.5; m.add(bear)
  const shaft = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 11, 24), mat('#15161a', 0.4, 0.6))
  shaft.rotation.x = Math.PI / 2; shaft.position.z = 5.5; m.add(shaft)
  // Its board.
  const b = new THREE.Group(); b.position.set(12, 0, 0); g.add(b)
  const s = new THREE.Shape(); s.absarc(0, 0, 13, 0, Math.PI * 2, false)
  const pcb = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: T, bevelEnabled: false, curveSegments: 40 }), [mat('#111418', 0.5), mat('#c9b27a', 0.7)])
  b.add(pcb)
  const tab = new THREE.Mesh(new THREE.BoxGeometry(4, 6, T), mat('#111418', 0.5)); tab.position.set(0, -15, T / 2); b.add(tab)
  chip(b, 7, 7, 3, 1, T, ['?'], { blank: true, legs: 'qfp', rot: 0.2 })
  jst(b, 9, -4, T, 4, Math.PI / 2)
  box(b, 3.5, 2.5, 2.2, mat('#efe6cf', 0.6), -6, 8, T)
  passives(b, -11, -10, 11, 10, T, 40, [[3, 1, 10, 10], [9, -4, 5, 8], [-6, 8, 5, 4]])
  silk(b, 'LD BOT V0.2.6', -2, -8, T, 1.8)
  silk(b, 'By Unitree', -2, -10.5, T, 1.6)
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(-22, 0, 11), name: 'Small brushless motor', text: 'About 5 cm across, far smaller than the leg motors. Eighteen copper coils around a bearing.' },
      { at: V(3, 1, T + 1.5), name: 'Controller (unread)', text: 'A microcontroller that keeps the motor spinning at a steady speed. Its marking could not be read.' },
      { at: V(-2, -9, T), name: 'LD BOT V0.2.6', text: 'The board’s own name. The Go2’s spinning LiDAR sits under its chin, and this is most likely the motor that turns it. That is our reading; nothing on the part says so.' },
    ],
  }
}

export function mainBoard(core: Built, wifi: Built): Built {
  seed = 97
  const g = new THREE.Group()
  const T = 1.6
  board(g, 190, 130, T, '#101216')
  const cb = core.group; cb.position.set(-18, -22, T + 3); g.add(cb)
  box(g, 64, 74, 3, mat('#1a1c21', 0.6), -18, -22, T)
  const wf = wifi.group; wf.position.set(-72, 45, T); g.add(wf)
  // mini PCIe socket for the 4G card, and the card seated in it
  box(g, 32, 6, 4, mat('#15161a', 0.5), 40, -45, T)
  const lte = lteCard(); lte.group.rotation.z = Math.PI / 2; lte.group.position.set(40, -18, T + 3); lte.group.scale.setScalar(1); g.add(lte.group)
  // leg and battery connectors along the top edge
  const top = 56
  const leg = (x: number, name: string) => { box(g, 16, 9, 7, mat('#121317', 0.5), x, top, T); silk(g, name, x, top - 8, T, 3) }
  leg(-45, 'FR'); leg(-25, 'FL'); leg(35, 'RL'); leg(58, 'RR')
  for (const [x, n] of [[-5, 'VBAT+'], [15, 'VBAT-'], [80, 'CHG-']] as [number, string][]) {
    const post = new THREE.Mesh(new THREE.CylinderGeometry(3.4, 3.4, 6, 24), GOLD()); post.rotation.x = Math.PI / 2; post.position.set(x, top + 1, T + 3); g.add(post)
    silk(g, n, x, top - 7, T, 2.6)
  }
  jst(g, 5, top + 2, T, 3); silk(g, 'B_485', 5, top - 5, T, 2.2)
  box(g, 9, 9, 7, TIN(), 0, 34, T)
  ecap(g, -58, 8, T, 4, 8, '470 16V')
  ecap(g, -58, -2, T, 4, 8, '470 16V')
  const edge = [['LIDAR', -85, 25], ['FAN1', -85, 13], ['FAN0', -60, -35], ['VOICE', -88, -45], ['LED', -80, -56], ['USB1', -68, -56], ['USB2', -56, -56]] as [string, number, number][]
  for (const [n, x, y] of edge) { jst(g, x, y, T, 4, n === 'LIDAR' || n === 'FAN1' ? Math.PI / 2 : 0); silk(g, n, x, y - 5, T, 2.2) }
  box(g, 16, 14, 13, mat('#2b2e35', 0.4, 0.4), 85, -20, T)
  silk(g, 'ETH', 85, -30, T, 2.4)
  box(g, 10, 9, 3, mat('#e8a02b', 0.5), 85, 5, T); silk(g, '712 ETH FPC', 85, 13, T, 2.2)
  silk(g, 'STOP', 20, 20, T, 2.6); box(g, 3, 3, 1.2, GOLD(), 20, 16, T)
  silk(g, '712 MAIN BOARD-RK V0.21', 40, -58, T, 4)
  silk(g, '2023/6/17', 40, -52, T, 3.4)
  passives(g, -90, -60, 90, 60, T, 120, [[-18, -22, 66, 76], [-72, 45, 26, 21], [40, -30, 34, 56], [0, 56, 190, 16], [85, -20, 18, 16]])
  return {
    group: g, toggles: [],
    callouts: [
      { at: V(-35, top + 6, T + 7), name: 'FR · FL · RL · RR', text: 'One connector per leg. Each carries power and a data line to the three motor drivers in that leg.' },
      { at: V(5, top + 6, T + 6), name: 'VBAT+ / VBAT− and B_485', text: 'The battery’s power posts, plus a data line on which the battery reports its charge and health.' },
      { at: V(-18, -22, T + 8), name: 'Core board', text: 'The plug-in computer with the Rockchip RK3588S sits here, under a heatsink.' },
      { at: V(40, -18, T + 8), name: '4G card', text: 'The Quectel EG25-G, pushed into a mini PCIe socket.' },
      { at: V(-72, 45, T + 3), name: 'Wi-Fi module', text: 'The Realtek RTL8852BU module, soldered straight to the board.' },
      { at: V(85, -20, T + 14), name: 'Ethernet', text: 'A wired network port, used for development and for adding an extra computer.' },
      { at: V(-85, 19, T + 5), name: 'LIDAR · FAN · VOICE · LED · USB', text: 'Plugs for the head LiDAR, two fans, the speaker and microphone, the lights and two USB devices.' },
      { at: V(40, -58, T + 1), name: '712 MAIN BOARD-RK V0.21', text: 'The board everything plugs into, dated 2023/6/17.' },
    ],
  }
}

export interface PartDef { id: string; name: string; status: 'Read' | 'Matched' | 'Hidden' | 'Inferred'; blurb: string; build: () => Built }
export const PART_DEFS: PartDef[] = [
  { id: 'brain', name: 'Core board', status: 'Matched', blurb: 'The computer: Rockchip RK3588S, 8 GB memory, 64 GB storage.', build: coreBoard },
  { id: 'main', name: 'Main board', status: 'Read', blurb: 'Everything plugs into it: legs, battery, radios, computer.', build: () => mainBoard(coreBoard(), wifiModule()) },
  { id: '4g', name: '4G card', status: 'Read', blurb: 'Quectel EG25-G with a Qualcomm modem under the shield.', build: lteCard },
  { id: 'wifi', name: 'Wi-Fi module', status: 'Read', blurb: 'Realtek RTL8852BU: Wi-Fi 6 and Bluetooth.', build: wifiModule },
  { id: 'radio', name: 'Remote radio', status: 'Hidden', blurb: 'The link to the handheld remote. Two chips ground blank.', build: radioBoard },
  { id: 'uwb', name: 'UWB board', status: 'Hidden', blurb: 'Follow-me positioning with four antennas. Chips ground blank.', build: uwbBoard },
  { id: 'motors', name: 'Leg motor', status: 'Read', blurb: 'One of twelve: coils, magnets, driver board, sensor.', build: legMotor },
  { id: 'fans', name: 'Blower fan', status: 'Read', blurb: '12 V brushless blower cooling the computer.', build: blowerFan },
  { id: 'lidar', name: 'LiDAR motor', status: 'Inferred', blurb: 'A small motor on a board marked LD BOT V0.2.6.', build: lidarMotor },
]
