import { create } from 'zustand'
import type { Body, Build, Shape, Task } from './model/types'
import { defaultShape, findBody, findParent, newBody, walk } from './model/types'
import { buildToMjcf } from './model/mjcf'
import { samples } from './model/samples'
import type { ActuatorMeta, Frame, FromWorker, GeomInfo, ToWorker } from './sim/protocol'
import { decodeBuild, encodeBuild } from './share'

export type Mode = 'edit' | 'run'

interface State {
  build: Build
  selectedId: string | null
  mode: Mode
  engineReady: boolean
  loadError: string | null
  geoms: GeomInfo | null
  actuators: ActuatorMeta[]
  /** MuJoCo body id for each build body id (world = 0, root = 1 …). */
  bodyIds: Record<string, number>
  frame: Frame | null
  driveOn: boolean
  speed: number
  follow: boolean
  dirty: boolean
  past: Build[]
  future: Build[]
  toast: string | null

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
  duplicateBody: (id: string) => void
  updateBuild: (patch: Partial<Build>) => void
  setTask: (t: Task) => void
  undo: () => void
  redo: () => void

  compile: () => void
  run: () => void
  pause: () => void
  step: () => void
  reset: () => void
  setCtrl: (i: number, v: number) => void
  setDrive: (on: boolean) => void
  setSpeed: (v: number) => void
  setFollow: (on: boolean) => void
  shareLink: () => Promise<string>
  showToast: (t: string) => void
}

const worker = new Worker(new URL('./sim/physics.worker.ts', import.meta.url), { type: 'module' })
const send = (m: ToWorker) => worker.postMessage(m)
const clone = <T,>(x: T): T => JSON.parse(JSON.stringify(x))
const HISTORY = 60

// A shared link carries the whole robot in the URL hash; it is decoded
// asynchronously (compression streams) and swapped in once ready.
export async function loadFromUrl(): Promise<boolean> {
  const b = await decodeBuild(location.hash)
  if (!b) return false
  useStore.getState().setBuild(b)
  return true
}

export const useStore = create<State>((set, get) => {
  worker.onmessage = (ev: MessageEvent<FromWorker>) => {
    const m = ev.data
    if (m.type === 'ready') { set({ engineReady: true }); get().compile() }
    else if (m.type === 'loaded') set({ geoms: m.geoms, loadError: null, dirty: false })
    else if (m.type === 'error') set({ loadError: m.message })
    else if (m.type === 'frame') set({ frame: m })
  }

  // Every edit: snapshot for undo, apply, recompile when editing.
  let editTimer: ReturnType<typeof setTimeout> | null = null
  const mutate = (fn: (b: Build) => void, coalesce = false) => {
    const before = get().build
    const b = clone(before)
    fn(b)
    const past = coalesce && editTimer ? get().past : [...get().past, before].slice(-HISTORY)
    set({ build: b, dirty: true, past, future: [] })
    if (editTimer) clearTimeout(editTimer)
    editTimer = setTimeout(() => { editTimer = null }, 800)
    if (get().mode === 'edit') get().compile()
  }

  let toastTimer: ReturnType<typeof setTimeout> | null = null

  return {
    build: samples[0].make(),
    selectedId: null,
    mode: 'edit',
    engineReady: false,
    loadError: null,
    geoms: null,
    actuators: [],
    bodyIds: {},
    frame: null,
    driveOn: true,
    speed: 1,
    follow: true,
    dirty: false,
    past: [],
    future: [],
    toast: null,

    setBuild: b => { set({ build: b, selectedId: null, mode: 'edit', past: [], future: [] }); get().compile() },
    loadSample: id => { const s = samples.find(x => x.id === id); if (s) { history.replaceState(null, '', location.pathname); get().setBuild(s.make()) } },
    select: id => set({ selectedId: id }),

    updateBody: (id, patch) => mutate(b => { const t = findBody(b.root, id); if (t) Object.assign(t, patch) }, true),
    updateJoint: (id, patch) => mutate(b => { const t = findBody(b.root, id); if (t?.joint) Object.assign(t.joint, patch) }, true),
    updateShape: (bodyId, shapeId, patch) => mutate(b => {
      const t = findBody(b.root, bodyId); const s = t?.shapes.find(x => x.id === shapeId); if (s) Object.assign(s, patch)
    }, true),
    addShape: (bodyId, type) => mutate(b => { findBody(b.root, bodyId)?.shapes.push(defaultShape(type)) }),
    removeShape: (bodyId, shapeId) => mutate(b => {
      const t = findBody(b.root, bodyId); if (t && t.shapes.length > 1) t.shapes = t.shapes.filter(s => s.id !== shapeId)
    }),
    addChild: parentId => {
      let newId = ''
      mutate(b => {
        const p = findBody(b.root, parentId); if (!p) return
        let count = 0; walk(b.root, () => count++)
        // Place the new part just past the parent's first shape so it is visible.
        const s = p.shapes[0]
        const reach = s ? (s.type === 'box' ? s.size[0] / 2 : s.type === 'sphere' ? s.size[0] : s.size[1] / 2) : 0.1
        const c = newBody(`part_${count}`, [+(reach + 0.1).toFixed(3), 0, 0], true)
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
    duplicateBody: id => {
      let newId = ''
      mutate(b => {
        const p = findParent(b.root, id); const src = findBody(b.root, id); if (!p || !src) return
        const copy = clone(src)
        walk(copy, x => { x.id = 'b' + Math.random().toString(36).slice(2, 9); x.shapes.forEach(s => { s.id = 's' + Math.random().toString(36).slice(2, 9) }) })
        copy.name = src.name + '_copy'
        copy.pos = [src.pos[0], -src.pos[1], src.pos[2]] // mirror across the robot's centre line
        newId = copy.id
        p.children.push(copy)
      })
      if (newId) set({ selectedId: newId })
    },
    updateBuild: patch => mutate(b => Object.assign(b, patch), true),
    setTask: t => mutate(b => { b.task = t }),

    undo: () => {
      const { past, build, future } = get(); if (!past.length) return
      const prev = past[past.length - 1]
      set({ build: prev, past: past.slice(0, -1), future: [build, ...future].slice(0, HISTORY), dirty: true, mode: 'edit' })
      get().compile()
    },
    redo: () => {
      const { past, build, future } = get(); if (!future.length) return
      const next = future[0]
      set({ build: next, past: [...past, build].slice(-HISTORY), future: future.slice(1), dirty: true, mode: 'edit' })
      get().compile()
    },

    compile: () => {
      const { build, engineReady } = get()
      if (!engineReady) return
      const { xml, actuators, bodyNames } = buildToMjcf(build)
      const meta: ActuatorMeta[] = actuators.map(a => ({
        name: a.name, joint: a.joint, kind: a.kind as ActuatorMeta['kind'], maxForce: a.maxForce, drive: a.drive,
        ctrlMin: a.kind === 'torque' ? -1 : a.kind === 'velocity' ? -50 : -Math.PI,
        ctrlMax: a.kind === 'torque' ? 1 : a.kind === 'velocity' ? 50 : Math.PI,
      }))
      // MuJoCo numbers bodies in document order, which is our walk order, world first.
      const ids: Record<string, number> = {}
      let i = 1
      walk(build.root, b => { ids[b.id] = i++ })
      set({ actuators: meta, bodyIds: ids })
      send({ type: 'load', xml, actuators: meta, bodyNames })
    },
    run: () => { if (get().dirty) get().compile(); set({ mode: 'run' }); send({ type: 'run' }) },
    pause: () => send({ type: 'pause' }),
    step: () => { set({ mode: 'run' }); send({ type: 'step' }) },
    reset: () => { set({ mode: 'edit' }); send({ type: 'reset' }); get().compile() },
    setCtrl: (i, v) => send({ type: 'ctrl', index: i, value: v }),
    setDrive: on => { set({ driveOn: on }); send({ type: 'drive', on }) },
    setSpeed: v => { set({ speed: v }); send({ type: 'speed', value: v }) },
    setFollow: on => set({ follow: on }),
    shareLink: async () => {
      const hash = await encodeBuild(get().build)
      history.replaceState(null, '', location.pathname + hash)
      return location.href
    },
    showToast: t => {
      set({ toast: t })
      if (toastTimer) clearTimeout(toastTimer)
      toastTimer = setTimeout(() => set({ toast: null }), 2200)
    },
  }
})

// Handy for debugging and for the headless tests.
;(globalThis as unknown as { __forge?: unknown }).__forge = useStore

export function exportMjcf(): string {
  return buildToMjcf(useStore.getState().build).xml
}

/** Build body id -> whether one of its motors is at its limit right now. */
export function hotBodies(): Set<number> {
  const { frame, actuators, build, bodyIds } = useStore.getState()
  const hot = new Set<number>()
  if (!frame) return hot
  // Actuators are emitted in walk order, one per motorised non-root body.
  const motorised: string[] = []
  walk(build.root, (b, parent) => { if (parent && b.joint && b.joint.actuator !== 'none') motorised.push(b.id) })
  actuators.forEach((a, i) => {
    if (Math.abs(frame.force[i] ?? 0) >= a.maxForce * 0.97) {
      const id = bodyIds[motorised[i] ?? '']
      if (id) hot.add(id)
    }
  })
  return hot
}
