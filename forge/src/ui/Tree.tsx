import { useStore } from '../store'
import type { Body } from '../model/types'
import { samples } from '../model/samples'
import { emptyBuild } from '../model/samples'

function Node({ b, depth, isRoot }: { b: Body; depth: number; isRoot: boolean }) {
  const selected = useStore(s => s.selectedId)
  const select = useStore(s => s.select)
  const addChild = useStore(s => s.addChild)
  const removeBody = useStore(s => s.removeBody)
  const duplicateBody = useStore(s => s.duplicateBody)
  const active = selected === b.id
  const j = b.joint
  const tag = isRoot ? 'root' : j ? (j.actuator === 'none' ? j.type : `${j.type} · ${j.actuator}`) : ''
  return (
    <div>
      <div className={'node' + (active ? ' active' : '')} style={{ paddingLeft: 10 + depth * 14 }} onClick={() => select(b.id)}>
        <span className="dot" style={{ background: b.shapes[0]?.color ?? '#888' }} />
        <span className="name">{b.name}</span>
        <span className="tag">{tag}</span>
        <span className="actions">
          <button title="Add a part attached to this one" onClick={e => { e.stopPropagation(); addChild(b.id) }}>+</button>
          {!isRoot && <button title="Mirror-copy this part (and everything attached) to the other side" onClick={e => { e.stopPropagation(); duplicateBody(b.id) }}>⧉</button>}
          {!isRoot && <button title="Remove this part and everything attached to it" onClick={e => { e.stopPropagation(); removeBody(b.id) }}>×</button>}
        </span>
      </div>
      {b.children.map(c => <Node key={c.id} b={c} depth={depth + 1} isRoot={false} />)}
    </div>
  )
}

export default function Tree() {
  const build = useStore(s => s.build)
  const select = useStore(s => s.select)
  const setBuild = useStore(s => s.setBuild)
  const loadSample = useStore(s => s.loadSample)
  const selected = useStore(s => s.selectedId)
  return (
    <div className="tree">
      <div className="panel-head">
        <span>Parts</span>
        <select value="" onChange={e => { if (e.target.value === '__new') setBuild(emptyBuild()); else if (e.target.value) loadSample(e.target.value) }}>
          <option value="">Load…</option>
          {samples.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
          <option value="__new">Empty robot</option>
        </select>
      </div>
      <div className={'node build' + (selected === null ? ' active' : '')} onClick={() => select(null)}>
        <span className="name">{build.name}</span>
        <span className="tag">{build.mount === 'free' ? 'free' : 'bolted down'}</span>
      </div>
      <Node b={build.root} depth={0} isRoot />
      <p className="hint">Click a part here or in the 3D view. Drag the arrows to move it. <b>+</b> attaches a new part, <b>⧉</b> mirror-copies it. Ctrl+Z undoes.</p>
    </div>
  )
}
