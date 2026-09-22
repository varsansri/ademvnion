// Messages between the UI thread and the physics worker.

export interface GeomInfo {
  n: number
  type: Int32Array      // mjtGeom: 0 plane, 2 sphere, 3 capsule, 5 cylinder, 6 box
  size: Float32Array    // n*3
  rgba: Float32Array    // n*4
  bodyId: Int32Array
}

export interface ActuatorMeta { name: string; joint: string; kind: 'torque' | 'velocity' | 'position'; maxForce: number; ctrlMin: number; ctrlMax: number; drive?: { amp: number; freq: number; phase: number } }

export type ToWorker =
  | { type: 'load'; xml: string; actuators: ActuatorMeta[]; bodyNames: string[] }
  | { type: 'run' } | { type: 'pause' } | { type: 'step' } | { type: 'reset' }
  | { type: 'ctrl'; index: number; value: number }
  | { type: 'drive'; on: boolean }
  | { type: 'speed'; value: number }

export interface Frame {
  type: 'frame'
  time: number
  xpos: Float32Array   // ngeom*3
  xmat: Float32Array   // ngeom*9 row-major
  ctrl: Float32Array
  force: Float32Array  // actuator_force
  rootPos: Float32Array // 3
  rootUp: number       // z of the root body's local z axis (1 = upright, <0 = upside down)
  bodyPos: Float32Array // nbody*3 (index 0 = world)
  bodyMat: Float32Array // nbody*9
  travel: number       // horizontal distance of the root from where it started (m)
  payloadZ: number     // height of the payload box, or -1 when there is none
  maxPayloadZ: number
  power: number        // sum |force * joint velocity|
  energy: number       // integrated |power| since reset (J)
  contacts: number
  running: boolean
}

export type FromWorker =
  | { type: 'ready' }
  | { type: 'loaded'; geoms: GeomInfo; nu: number; timestep: number; rootBodyId: number; nbody: number; bodyNames: string[] }
  | { type: 'error'; message: string }
  | Frame
