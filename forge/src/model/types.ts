// The build graph. Units: metres, kilograms, newton-metres, radians in the
// engine but degrees in the UI (converted at the MJCF boundary).

export type Vec3 = [number, number, number]

export type ShapeType = 'box' | 'cylinder' | 'sphere' | 'capsule'

export interface Shape {
  id: string
  type: ShapeType
  /** box: full lengths x/y/z. cylinder/capsule: [radius, length, -]. sphere: [radius,-,-]. */
  size: Vec3
  /** Position of the shape centre inside its body. */
  pos: Vec3
  /** Euler rotation in degrees (x, y, z). Cylinders point along their local z. */
  euler: Vec3
  mass: number
  color: string
}

export type JointType = 'hinge' | 'slide'
export type ActuatorKind = 'none' | 'torque' | 'velocity' | 'position'

export interface Joint {
  type: JointType
  axis: Vec3
  /** Degrees for hinge, metres for slide. */
  range: [number, number]
  limited: boolean
  damping: number
  actuator: ActuatorKind
  /** Torque limit (N·m) for hinges, force limit (N) for slides. */
  maxForce: number
  /** Gain for velocity (kv) or position (kp) actuators. */
  gain: number
  /** Optional automatic drive so the robot moves on its own: ctrl = amp·sin(2π·f·t + phase). */
  drive?: { amp: number; freq: number; phase: number }
}

export interface Body {
  id: string
  name: string
  /** Position relative to the parent body (or world for the root). */
  pos: Vec3
  shapes: Shape[]
  /** Undefined for the root body; the root is either free or welded to the world. */
  joint?: Joint
  children: Body[]
}

export interface Build {
  name: string
  root: Body
  /** 'free' = falls and moves; 'fixed' = bolted to the ground. */
  mount: 'free' | 'fixed'
  gravity: number
  timestep: number
  floorFriction: number
}

let counter = 0
export const uid = (p = 'n') => `${p}${(++counter).toString(36)}${Date.now().toString(36).slice(-3)}`

export const defaultJoint = (): Joint => ({
  type: 'hinge', axis: [0, 1, 0], range: [-90, 90], limited: true, damping: 0.1,
  actuator: 'torque', maxForce: 5, gain: 10,
})

export const defaultShape = (type: ShapeType = 'box'): Shape => ({
  id: uid('s'), type,
  size: type === 'box' ? [0.2, 0.1, 0.05] : type === 'sphere' ? [0.05, 0, 0] : [0.03, 0.2, 0],
  pos: [0, 0, 0], euler: [0, 0, 0], mass: 0.2, color: '#9aa3b2',
})

export const newBody = (name: string, pos: Vec3 = [0, 0, 0], withJoint = true): Body => ({
  id: uid('b'), name, pos, shapes: [defaultShape()], joint: withJoint ? defaultJoint() : undefined, children: [],
})

export function walk(b: Body, fn: (b: Body, parent: Body | null, depth: number) => void, parent: Body | null = null, depth = 0) {
  fn(b, parent, depth)
  b.children.forEach(c => walk(c, fn, b, depth + 1))
}

export function findBody(root: Body, id: string): Body | undefined {
  let hit: Body | undefined
  walk(root, b => { if (b.id === id) hit = b })
  return hit
}

export function findParent(root: Body, id: string): Body | null {
  let hit: Body | null = null
  walk(root, (b, p) => { if (b.id === id) hit = p })
  return hit
}

export function totalMass(b: Body): number {
  let m = 0
  walk(b, x => x.shapes.forEach(s => { m += s.mass }))
  return m
}
