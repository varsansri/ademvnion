import { useStore } from '../store'
import { findBody, totalMass } from '../model/types'
import type { Body, Shape } from '../model/types'
import { Num, Sel, Toggle, Txt, Vec } from './fields'

const presets: { l: string; maxForce: number; gain: number }[] = [
  { l: 'Micro servo (0.2 N·m)', maxForce: 0.2, gain: 5 },
  { l: 'Hobby servo (1.5 N·m)', maxForce: 1.5, gain: 10 },
  { l: 'Stepper NEMA17 (0.5 N·m)', maxForce: 0.5, gain: 8 },
  { l: 'Robot joint motor (8 N·m)', maxForce: 8, gain: 20 },
  { l: 'Leg actuator (30 N·m)', maxForce: 30, gain: 80 },
  { l: 'Industrial (150 N·m)', maxForce: 150, gain: 200 },
]

function ShapeEditor({ bodyId, s, canRemove }: { bodyId: string; s: Shape; canRemove: boolean }) {
  const update = useStore(st => st.updateShape)
  const remove = useStore(st => st.removeShape)
  const u = (patch: Partial<Shape>) => update(bodyId, s.id, patch)
  return (
    <div className="shape">
      <div className="row">
        <Sel label="Shape" value={s.type} onChange={v => u({ type: v })}
          options={[{ v: 'box', l: 'Box' }, { v: 'cylinder', l: 'Cylinder' }, { v: 'capsule', l: 'Capsule' }, { v: 'sphere', l: 'Sphere' }]} />
        <label className="field color"><span>Colour</span><input type="color" value={s.color} onChange={e => u({ color: e.target.value })} /></label>
        {canRemove && <button className="mini" onClick={() => remove(bodyId, s.id)}>remove</button>}
      </div>
      {s.type === 'box' && <Vec label="Size" unit="m" value={s.size} onChange={v => u({ size: v })} />}
      {(s.type === 'cylinder' || s.type === 'capsule') && (
        <div className="row">
          <Num label="Radius" unit="m" value={s.size[0]} onChange={v => u({ size: [v, s.size[1], 0] })} step={0.005} min={0.005} />
          <Num label="Length" unit="m" value={s.size[1]} onChange={v => u({ size: [s.size[0], v, 0] })} step={0.01} min={0.01} />
        </div>
      )}
      {s.type === 'sphere' && <Num label="Radius" unit="m" value={s.size[0]} onChange={v => u({ size: [v, 0, 0] })} step={0.005} min={0.005} />}
      <Vec label="Offset" unit="m" value={s.pos} onChange={v => u({ pos: v })} />
      <Vec label="Rotation" unit="°" value={s.euler} onChange={v => u({ euler: v })} step={5} />
      <Num label="Mass" unit="kg" value={s.mass} onChange={v => u({ mass: v })} step={0.05} min={0.001} />
    </div>
  )
}

function BodyEditor({ b, isRoot }: { b: Body; isRoot: boolean }) {
  const updateBody = useStore(s => s.updateBody)
  const updateJoint = useStore(s => s.updateJoint)
  const addShape = useStore(s => s.addShape)
  const j = b.joint
  return (
    <>
      <Txt label="Name" value={b.name} onChange={v => updateBody(b.id, { name: v })} />
      <Vec label={isRoot ? 'Position' : 'Attach at'} unit="m" value={b.pos} onChange={v => updateBody(b.id, { pos: v })} />
      <p className="hint">{isRoot ? 'Where the robot starts.' : 'Where this part connects to its parent, measured from the parent\'s centre.'}</p>

      {!isRoot && j && (
        <section>
          <h4>Joint</h4>
          <div className="row">
            <Sel label="Type" value={j.type} onChange={v => updateJoint(b.id, { type: v, range: v === 'hinge' ? [-90, 90] : [-0.2, 0.2] })}
              options={[{ v: 'hinge', l: 'Hinge (rotates)' }, { v: 'slide', l: 'Slider (extends)' }]} />
            <Sel label="Axis" value={axisKey(j.axis)} onChange={v => updateJoint(b.id, { axis: axisFrom(v) })}
              options={[{ v: 'x', l: 'X' }, { v: 'y', l: 'Y' }, { v: 'z', l: 'Z' }]} />
          </div>
          <Toggle label="Limit movement" value={j.limited} onChange={v => updateJoint(b.id, { limited: v })} />
          {j.limited && (
            <div className="row">
              <Num label="Min" unit={j.type === 'hinge' ? '°' : 'm'} value={j.range[0]} onChange={v => updateJoint(b.id, { range: [v, j.range[1]] })} step={j.type === 'hinge' ? 5 : 0.01} />
              <Num label="Max" unit={j.type === 'hinge' ? '°' : 'm'} value={j.range[1]} onChange={v => updateJoint(b.id, { range: [j.range[0], v] })} step={j.type === 'hinge' ? 5 : 0.01} />
            </div>
          )}
          <Num label="Damping" value={j.damping} onChange={v => updateJoint(b.id, { damping: v })} step={0.01} min={0} />

          <h4>Motor</h4>
          <Sel label="Control" value={j.actuator} onChange={v => updateJoint(b.id, { actuator: v })}
            options={[{ v: 'none', l: 'No motor (free joint)' }, { v: 'torque', l: 'Torque — push with a force' }, { v: 'velocity', l: 'Speed — spin at a rate' }, { v: 'position', l: 'Position — go to an angle' }]} />
          {j.actuator !== 'none' && (
            <>
              <Sel label="Preset" value="" onChange={v => { const p = presets[+v]; if (p) updateJoint(b.id, { maxForce: p.maxForce, gain: p.gain }) }}
                options={[{ v: '', l: 'Pick a motor…' }, ...presets.map((p, i) => ({ v: String(i), l: p.l }))]} />
              <div className="row">
                <Num label={j.type === 'hinge' ? 'Max torque' : 'Max force'} unit={j.type === 'hinge' ? 'N·m' : 'N'} value={j.maxForce} onChange={v => updateJoint(b.id, { maxForce: v })} step={0.1} min={0.01} />
                {j.actuator !== 'torque' && <Num label={j.actuator === 'velocity' ? 'Stiffness (kv)' : 'Stiffness (kp)'} value={j.gain} onChange={v => updateJoint(b.id, { gain: v })} step={1} min={0.1} />}
              </div>
              <Toggle label="Auto-drive (moves by itself)" value={!!j.drive} onChange={v => updateJoint(b.id, { drive: v ? { amp: j.actuator === 'torque' ? 1 : j.actuator === 'velocity' ? 5 : 0.8, freq: 0.5, phase: 0 } : undefined })} />
              {j.drive && (
                <div className="row">
                  <Num label="Amplitude" value={j.drive.amp} onChange={v => updateJoint(b.id, { drive: { ...j.drive!, amp: v } })} step={0.1} />
                  <Num label="Frequency" unit="Hz" value={j.drive.freq} onChange={v => updateJoint(b.id, { drive: { ...j.drive!, freq: v } })} step={0.05} min={0} />
                  <Num label="Phase" unit="rad" value={j.drive.phase} onChange={v => updateJoint(b.id, { drive: { ...j.drive!, phase: v } })} step={0.1} />
                </div>
              )}
            </>
          )}
        </section>
      )}

      <section>
        <h4>Shapes <span className="muted">({b.shapes.length})</span></h4>
        {b.shapes.map(s => <ShapeEditor key={s.id} bodyId={b.id} s={s} canRemove={b.shapes.length > 1} />)}
        <div className="row">
          <button className="mini" onClick={() => addShape(b.id, 'box')}>+ box</button>
          <button className="mini" onClick={() => addShape(b.id, 'cylinder')}>+ cylinder</button>
          <button className="mini" onClick={() => addShape(b.id, 'capsule')}>+ capsule</button>
          <button className="mini" onClick={() => addShape(b.id, 'sphere')}>+ sphere</button>
        </div>
      </section>
    </>
  )
}

function TaskEditor() {
  const task = useStore(s => s.build.task) ?? { kind: 'none' as const }
  const setTask = useStore(s => s.setTask)
  const kind = task.kind
  return (
    <section>
      <h4>Task <span className="muted">— what counts as success</span></h4>
      <Sel label="Goal" value={kind} onChange={v => setTask(
        v === 'lift' ? { kind: 'lift', mass: 0.5, size: 0.08, pos: [0.45, 0, 0.04], height: 0.3 }
        : v === 'travel' ? { kind: 'travel', distance: 2 }
        : v === 'stand' ? { kind: 'stand', seconds: 10 }
        : { kind: 'none' })}
        options={[{ v: 'none', l: 'Just run' }, { v: 'lift', l: 'Lift a box' }, { v: 'travel', l: 'Travel a distance' }, { v: 'stand', l: 'Stay upright' }]} />
      {task.kind === 'lift' && (
        <>
          <div className="row">
            <Num label="Box mass" unit="kg" value={task.mass} onChange={v => setTask({ ...task, mass: v })} step={0.1} min={0.01} />
            <Num label="Box size" unit="m" value={task.size} onChange={v => setTask({ ...task, size: v })} step={0.01} min={0.02} />
          </div>
          <Vec label="Box position" unit="m" value={task.pos} onChange={v => setTask({ ...task, pos: v })} />
          <Num label="Lift to height" unit="m" value={task.height} onChange={v => setTask({ ...task, height: v })} step={0.05} min={0.05} />
          <p className="hint">The yellow box is loose. Get it above the ring and it turns green.</p>
        </>
      )}
      {task.kind === 'travel' && <Num label="Distance" unit="m" value={task.distance} onChange={v => setTask({ ...task, distance: v })} step={0.5} min={0.1} />}
      {task.kind === 'stand' && <Num label="For" unit="s" value={task.seconds} onChange={v => setTask({ ...task, seconds: v })} step={1} min={1} />}
    </section>
  )
}

const axisKey = (a: [number, number, number]) => (Math.abs(a[0]) > 0.5 ? 'x' : Math.abs(a[1]) > 0.5 ? 'y' : 'z')
const axisFrom = (k: string): [number, number, number] => (k === 'x' ? [1, 0, 0] : k === 'y' ? [0, 1, 0] : [0, 0, 1])

export default function Inspector() {
  const build = useStore(s => s.build)
  const selectedId = useStore(s => s.selectedId)
  const updateBuild = useStore(s => s.updateBuild)
  const body = selectedId ? findBody(build.root, selectedId) : null
  return (
    <div className="inspector">
      {body ? (
        <>
          <div className="panel-head"><span>{body.id === build.root.id ? 'Base part' : 'Part'}</span></div>
          <BodyEditor b={body} isRoot={body.id === build.root.id} />
        </>
      ) : (
        <>
          <div className="panel-head"><span>Robot</span></div>
          <Txt label="Name" value={build.name} onChange={v => updateBuild({ name: v })} />
          <Sel label="Base" value={build.mount} onChange={v => updateBuild({ mount: v })}
            options={[{ v: 'free', l: 'Free — can move and fall' }, { v: 'fixed', l: 'Bolted to the ground' }]} />
          <Num label="Gravity" unit="m/s²" value={build.gravity} onChange={v => updateBuild({ gravity: v })} step={0.1} min={0} />
          <Num label="Floor grip" value={build.floorFriction} onChange={v => updateBuild({ floorFriction: v })} step={0.1} min={0} />
          <Sel label="Accuracy" value={String(build.timestep)} onChange={v => updateBuild({ timestep: parseFloat(v) })}
            options={[{ v: '0.004', l: 'Fast (4 ms step)' }, { v: '0.002', l: 'Normal (2 ms step)' }, { v: '0.001', l: 'Precise (1 ms step)' }]} />
          <p className="hint">Total mass: <b>{totalMass(build.root).toFixed(2)} kg</b>. Earth gravity is 9.81, Mars is 3.71, the Moon is 1.62.</p>
          <TaskEditor />
        </>
      )}
    </div>
  )
}
