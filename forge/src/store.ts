import { create } from 'zustand'
import type { Body, Build, Shape } from './model/types'
import { defaultShape, findBody, findParent, newBody, walk } from './model/types'
import { buildToMjcf } from './model/mjcf'
import { samples } from './model/samples'
import type { ActuatorMeta, Frame, FromWorker, GeomInfo, ToWorker } from './sim/protocol'

export type Mode = 'edit' | 'run'

interface State {
  build: Build
  selectedId: string | null
  mode: Mode
  engineReady: boolean
  loadError: string | null
  geoms: GeomInfo | null
  actuators: ActuatorMeta[]
  frame: Frame | null
  driveOn: boolean
  speed: number
  dirty: boolean

  // build editing
  setBuild: (b: Build) => void
  loadSample: (id: string) => void
  select: (id: string | null) => void
  updateBody: (id: string, patch: Partial<Body>) => void
  updateJoint: (id: string, patch: Partial<NonNullable<Body['joint']>>) => void
  updateShape: (bodyId: string, shapeId: string, patch: Partial<Shape>) => void
  addShape: (bodyId: string, type: Shape['type']) => void
  removeShape: (bodyId: string, shapeId: string) => void
  addChild: (parentId: string) => void
  removeBody: (id: string) => void
  updateBuild: (patch: Partial<Build>) => void

  // simulation
  compile: () => void
  run: () => void
  pause: () => void
  step: () => void
  reset: () => void
  setCtrl: (i: number, v: number) => void
  setDrive: (on: boolean) => void
  setSpeed: (v: number) => void
}

const worker = new Worker(new URL('./sim/physics.worker.ts', import.meta.url), { type: 'module' })
const send = (m: ToWorker) => worker.postMessage(m)

// Immutable-ish helper: deep-clone the tree then mutate the clone.
const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x))

export const useStore = create<State>((set, get) => {
  worker.onmessage = (ev: MessageEvent<FromWorker>) => {
    const m = ev.data
    if (m.type === 'ready') { set({ engineReady: true }); get().compile() }
    else if (m.type === 'loaded') set({ geoms: m.geoms, loadError: null, dirty: false })
    else if (m.type === 'error') set({ loadError: m.message })
    else if (m.type === 'frame') set({ frame: m })
  }

  const mutate = (fn: (b: Build) => void) => {
    const b = clone(get().build)
    fn(b)
    set({ build: b, dirty: true })
    if (get().mode === 'edit') get().compile()
  }

  return {
    build: samples[0].make(),
    selectedId: null,
    mode: 'edit',
    engineReady: false,
    loadError: null,
    geoms: null,
    actuators: [],
    frame: null,
    driveOn: true,
    speed: 1,
    dirty: false,

    setBuild: b => { set({ build: b, selectedId: null, mode: 'edit' }); get().compile() },
    loadSample: id => { const s = samples.find(x => x.id === id); if (s) get().setBuild(s.make()) },
    select: id => set({ selectedId: id }),

    updateBody: (id, patch) => mutate(b => { const t = findBody(b.root, id); if (t) Object.assign(t, patch) }),
    updateJoint: (id, patch) => mutate(b => { const t = findBody(b.root, id); if (t?.joint) Object.assign(t.joint, patch) }),
    updateShape: (bodyId, shapeId, patch) => mutate(b => {
      const t = findBody(b.root, bodyId); const s = t?.shapes.find(x => x.id === shapeId); if (s) Object.assign(s, patch)
    }),
    addShape: (bodyId, type) => mutate(b => { findBody(b.root, bodyId)?.shapes.push(defaultShape(type)) }),
    removeShape: (bodyId, shapeId) => mutate(b => {
      const t = findBody(b.root, bodyId); if (t && t.shapes.length > 1) t.shapes = t.shapes.filter(s => s.id !== shapeId)
    }),
    addChild: parentId => {
      let newId = ''
      mutate(b => {
        const p = findBody(b.root, parentId); if (!p) return
        let count = 0; walk(b.root, () => count++)
        const c = newBody(`part_${count}`, [0.2, 0, 0], true)
        newId = c.id
        p.children.push(c)
      })
      if (newId) set({ selectedId: newId })
    },
    removeBody: id => mutate(b => {
      const p = findParent(b.root, id); if (!p) return
      p.children = p.children.filter(c => c.id !== id)
      if (get().selectedId === id) set({ selectedId: p.id })
    }),
    updateBuild: patch => mutate(b => Object.assign(b, patch)),

    compile: () => {
      const { build, engineReady } = get()
      if (!engineReady) return
      const { xml, actuators } = buildToMjcf(build)
      const meta: ActuatorMeta[] = actuators.map(a => ({
        name: a.name, joint: a.joint, kind: a.kind as ActuatorMeta['kind'], maxForce: a.maxForce, drive: a.drive,
        ctrlMin: a.kind === 'torque' ? -1 : a.kind === 'velocity' ? -50 : -Math.PI,
        ctrlMax: a.kind === 'torque' ? 1 : a.kind === 'velocity' ? 50 : Math.PI,
      }))
      set({ actuators: meta })
      send({ type: 'load', xml, actuators: meta })
    },
    run: () => { if (get().dirty) get().compile(); set({ mode: 'run' }); send({ type: 'run' }) },
    pause: () => send({ type: 'pause' }),
    step: () => { set({ mode: 'run' }); send({ type: 'step' }) },
    reset: () => { set({ mode: 'edit' }); send({ type: 'reset' }); get().compile() },
    setCtrl: (i, v) => send({ type: 'ctrl', index: i, value: v }),
    setDrive: on => { set({ driveOn: on }); send({ type: 'drive', on }) },
    setSpeed: v => { set({ speed: v }); send({ type: 'speed', value: v }) },
  }
})

export function exportMjcf(): string {
  return buildToMjcf(useStore.getState().build).xml
}
