import type { Body, Build, Joint, Shape, Vec3 } from './types'
import { uid } from './types'

const shape = (type: Shape['type'], size: Vec3, mass: number, color: string, pos: Vec3 = [0, 0, 0], euler: Vec3 = [0, 0, 0]): Shape =>
  ({ id: uid('s'), type, size, pos, euler, mass, color })

const body = (name: string, pos: Vec3, shapes: Shape[], joint?: Joint, children: Body[] = []): Body =>
  ({ id: uid('b'), name, pos, shapes, joint, children })

const hinge = (axis: Vec3, range: [number, number], actuator: Joint['actuator'], maxForce: number, gain = 10, drive?: Joint['drive']): Joint =>
  ({ type: 'hinge', axis, range, limited: true, damping: 0.05, actuator, maxForce, gain, drive })

const wheel = (axis: Vec3, gain: number, drive: Joint['drive']): Joint =>
  ({ type: 'hinge', axis, range: [0, 0], limited: false, damping: 0.01, actuator: 'velocity', maxForce: 3, gain, drive })

export function armSample(): Build {
  const base = body('base', [0, 0, 0.05], [shape('cylinder', [0.12, 0.1, 0], 2, '#3b4252')])
  const shoulder = body('shoulder', [0, 0, 0.1], [shape('box', [0.08, 0.08, 0.12], 0.6, '#7dd3fc', [0, 0, 0.06])],
    hinge([0, 0, 1], [-180, 180], 'position', 8, 6, { amp: 1.2, freq: 0.15, phase: 0 }))
  const upper = body('upper_arm', [0, 0, 0.12], [shape('capsule', [0.03, 0.3, 0], 0.5, '#c084fc', [0.15, 0, 0], [0, 90, 0])],
    hinge([0, 1, 0], [-100, 100], 'position', 6, 5, { amp: 0.8, freq: 0.25, phase: 1 }))
  const fore = body('forearm', [0.3, 0, 0], [shape('capsule', [0.025, 0.25, 0], 0.3, '#c084fc', [0.125, 0, 0], [0, 90, 0])],
    hinge([0, 1, 0], [-120, 120], 'position', 3, 2.5, { amp: 1.0, freq: 0.3, phase: 2 }))
  const hand = body('hand', [0.25, 0, 0], [shape('box', [0.06, 0.08, 0.03], 0.15, '#f4f5f7', [0.03, 0, 0])],
    hinge([1, 0, 0], [-90, 90], 'position', 1, 0.6, { amp: 1.5, freq: 0.5, phase: 0 }))
  fore.children = [hand]; upper.children = [fore]; shoulder.children = [upper]; base.children = [shoulder]
  return { name: 'Robot arm', root: base, mount: 'fixed', gravity: 9.81, timestep: 0.002, floorFriction: 1 }
}

export function roverSample(): Build {
  const chassis = body('chassis', [0, 0, 0.12], [
    shape('box', [0.4, 0.25, 0.06], 2.5, '#3b4252'),
    shape('box', [0.15, 0.15, 0.08], 0.5, '#7dd3fc', [0.05, 0, 0.07]),
  ])
  const w = (name: string, pos: Vec3, phase: number) =>
    body(name, pos, [shape('cylinder', [0.07, 0.04, 0], 0.3, '#f4f5f7', [0, 0, 0], [90, 0, 0])], wheel([0, 1, 0], 2, { amp: 12, freq: 0.08, phase }))
  chassis.children = [w('wheel_fl', [0.14, 0.15, -0.02], 0), w('wheel_fr', [0.14, -0.15, -0.02], 0), w('wheel_rl', [-0.14, 0.15, -0.02], 0), w('wheel_rr', [-0.14, -0.15, -0.02], 0)]
  return { name: 'Rover', root: chassis, mount: 'free', gravity: 9.81, timestep: 0.002, floorFriction: 1 }
}

export function pendulumSample(): Build {
  const post = body('post', [0, 0, 0.5], [shape('box', [0.05, 0.05, 1.0], 5, '#3b4252')])
  const arm = body('arm', [0, 0.05, 0.45], [shape('capsule', [0.02, 0.4, 0], 0.4, '#c084fc', [0, 0, -0.2])],
    hinge([0, 1, 0], [-180, 180], 'torque', 2, 1, { amp: 1, freq: 0.6, phase: 0 }))
  const bob = body('bob', [0, 0, -0.4], [shape('sphere', [0.06, 0, 0], 1.0, '#7dd3fc')],
    hinge([0, 1, 0], [-180, 180], 'none', 0, 0))
  arm.children = [bob]; post.children = [arm]
  return { name: 'Pendulum', root: post, mount: 'fixed', gravity: 9.81, timestep: 0.002, floorFriction: 1 }
}

export function walkerSample(): Build {
  const torso = body('torso', [0, 0, 0.55], [shape('box', [0.2, 0.3, 0.25], 4, '#3b4252')])
  const leg = (name: string, y: number, phase: number) => {
    const hip = body(`${name}_hip`, [0, y, -0.125], [shape('capsule', [0.035, 0.25, 0], 0.8, '#c084fc', [0, 0, -0.125])],
      hinge([0, 1, 0], [-60, 60], 'position', 30, 80, { amp: 0.6, freq: 0.7, phase }))
    const knee = body(`${name}_knee`, [0, 0, -0.25], [shape('capsule', [0.03, 0.25, 0], 0.6, '#7dd3fc', [0, 0, -0.125])],
      hinge([0, 1, 0], [-120, 5], 'position', 25, 60, { amp: 0.7, freq: 0.7, phase: phase + 1.2 }))
    const foot = body(`${name}_foot`, [0, 0, -0.25], [shape('box', [0.16, 0.08, 0.03], 0.3, '#f4f5f7', [0.03, 0, -0.015])],
      hinge([0, 1, 0], [-40, 40], 'position', 10, 30))
    knee.children = [foot]; hip.children = [knee]
    return hip
  }
  torso.children = [leg('left', 0.1, 0), leg('right', -0.1, Math.PI)]
  return { name: 'Walker (falls — fix it)', root: torso, mount: 'free', gravity: 9.81, timestep: 0.002, floorFriction: 1 }
}

export const samples: { id: string; label: string; make: () => Build }[] = [
  { id: 'arm', label: 'Robot arm', make: armSample },
  { id: 'rover', label: 'Rover', make: roverSample },
  { id: 'walker', label: 'Walker', make: walkerSample },
  { id: 'pendulum', label: 'Pendulum', make: pendulumSample },
]

export function emptyBuild(): Build {
  return {
    name: 'New robot',
    root: body('base', [0, 0, 0.1], [shape('box', [0.3, 0.2, 0.1], 1, '#3b4252')]),
    mount: 'free', gravity: 9.81, timestep: 0.002, floorFriction: 1,
  }
}
