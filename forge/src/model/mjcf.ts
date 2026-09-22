import type { Body, Build, Joint, Shape, Vec3 } from './types'
import { walk } from './types'

// Build graph -> MJCF XML. MuJoCo wants half-extents for boxes and
// half-lengths for cylinders/capsules; the UI works in full lengths.

const f = (n: number) => (Math.abs(n) < 1e-9 ? '0' : +n.toFixed(5) + '')
const v3 = (v: Vec3) => v.map(f).join(' ')
const esc = (s: string) => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c] as string))

function hexToRgba(hex: string): string {
  const m = /^#?([0-9a-f]{6})$/i.exec(hex.trim())
  if (!m) return '0.6 0.64 0.7 1'
  const n = parseInt(m[1], 16)
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map(c => f(c / 255)).join(' ') + ' 1'
}

function shapeXml(s: Shape, bodyName: string, i: number): string {
  const name = `${bodyName}/${i}`
  const common = `name="${esc(name)}" pos="${v3(s.pos)}" euler="${v3(s.euler)}" mass="${f(Math.max(s.mass, 0.001))}" rgba="${hexToRgba(s.color)}"`
  switch (s.type) {
    case 'box': return `<geom type="box" ${common} size="${f(s.size[0] / 2)} ${f(s.size[1] / 2)} ${f(s.size[2] / 2)}"/>`
    case 'sphere': return `<geom type="sphere" ${common} size="${f(s.size[0])}"/>`
    case 'cylinder': return `<geom type="cylinder" ${common} size="${f(s.size[0])} ${f(s.size[1] / 2)}"/>`
    case 'capsule': return `<geom type="capsule" ${common} size="${f(s.size[0])} ${f(s.size[1] / 2)}"/>`
  }
}

function jointXml(j: Joint, name: string): string {
  const range = j.type === 'hinge' ? `${f(j.range[0])} ${f(j.range[1])}` : `${f(j.range[0])} ${f(j.range[1])}`
  const limited = j.limited ? `limited="true" range="${range}"` : `limited="false"`
  return `<joint name="${esc(name)}" type="${j.type}" axis="${v3(j.axis)}" ${limited} damping="${f(j.damping)}"/>`
}

export interface ActuatorInfo { name: string; joint: string; kind: Joint['actuator']; maxForce: number; drive?: Joint['drive'] }

export function buildToMjcf(build: Build): { xml: string; actuators: ActuatorInfo[]; bodyNames: string[] } {
  const actuators: ActuatorInfo[] = []
  const bodyNames: string[] = []
  const usedNames = new Set<string>()

  const uniqueName = (b: Body) => {
    let base = (b.name || 'body').replace(/[^\w\- ]/g, '').trim() || 'body'
    let n = base, k = 2
    while (usedNames.has(n)) n = `${base}_${k++}`
    usedNames.add(n)
    return n
  }
  const names = new Map<string, string>()
  walk(build.root, b => names.set(b.id, uniqueName(b)))

  const bodyXml = (b: Body, isRoot: boolean, indent: string): string => {
    const name = names.get(b.id)!
    bodyNames.push(name)
    const lines: string[] = [`${indent}<body name="${esc(name)}" pos="${v3(b.pos)}">`]
    if (isRoot) {
      if (build.mount === 'free') lines.push(`${indent}  <freejoint name="root"/>`)
    } else if (b.joint) {
      const jn = `${name}_joint`
      lines.push(`${indent}  ${jointXml(b.joint, jn)}`)
      if (b.joint.actuator !== 'none') {
        actuators.push({ name: `${name}_motor`, joint: jn, kind: b.joint.actuator, maxForce: b.joint.maxForce, drive: b.joint.drive })
      }
    }
    b.shapes.forEach((s, i) => lines.push(`${indent}  ${shapeXml(s, name, i)}`))
    b.children.forEach(c => lines.push(bodyXml(c, false, indent + '  ')))
    lines.push(`${indent}</body>`)
    return lines.join('\n')
  }

  const rootPos: Vec3 = [...build.root.pos] as Vec3
  const rootForXml: Body = { ...build.root, pos: rootPos }
  const body = bodyXml(rootForXml, true, '    ')

  const actXml = actuators.map(a => {
    const lim = `ctrllimited="true" forcelimited="true" forcerange="${f(-a.maxForce)} ${f(a.maxForce)}"`
    const j = findJoint(build.root, a.joint.replace(/_joint$/, ''), names)
    switch (a.kind) {
      case 'torque':
        // ctrl in [-1,1] scaled by gear = maxForce, so 1 = full torque.
        return `    <motor name="${esc(a.name)}" joint="${esc(a.joint)}" gear="${f(a.maxForce)}" ctrlrange="-1 1" ${lim}/>`
      case 'velocity':
        return `    <velocity name="${esc(a.name)}" joint="${esc(a.joint)}" kv="${f(j?.gain ?? 1)}" ctrlrange="-50 50" ${lim}/>`
      case 'position': {
        const r = j?.range ?? [-90, 90]
        const lo = j?.type === 'hinge' ? r[0] * Math.PI / 180 : r[0]
        const hi = j?.type === 'hinge' ? r[1] * Math.PI / 180 : r[1]
        return `    <position name="${esc(a.name)}" joint="${esc(a.joint)}" kp="${f(j?.gain ?? 10)}" kv="${f((j?.gain ?? 10) / 10)}" ctrlrange="${f(lo)} ${f(hi)}" ${lim}/>`
      }
      default: return ''
    }
  }).filter(Boolean).join('\n')

  const xml = `<mujoco model="${esc(build.name || 'forge')}">
  <compiler angle="degree" autolimits="true"/>
  <option timestep="${f(build.timestep)}" gravity="0 0 ${f(-build.gravity)}" integrator="implicitfast"/>
  <default>
    <geom condim="3" friction="${f(build.floorFriction)} 0.005 0.0001" solref="0.01 1" solimp="0.9 0.95 0.001"/>
    <joint armature="0.001"/>
  </default>
  <worldbody>
    <light pos="0 0 3" dir="0 0 -1" diffuse="0.9 0.9 0.9"/>
    <geom name="floor" type="plane" size="20 20 0.1" rgba="0.16 0.18 0.22 1"/>
${body}
  </worldbody>
  <actuator>
${actXml}
  </actuator>
</mujoco>`
  return { xml, actuators, bodyNames }
}

function findJoint(root: Body, bodyName: string, names: Map<string, string>): Joint | undefined {
  let hit: Joint | undefined
  walk(root, b => { if (names.get(b.id) === bodyName) hit = b.joint })
  return hit
}
