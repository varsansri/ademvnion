import { useEffect, useRef, useState } from 'react'
import { useStore } from '../store'
import { totalMass } from '../model/types'

// The "did it work?" panel: per-motor load vs. limit, power, energy, and
// whether the robot fell over. Peak load is tracked here since the worker
// only reports the instantaneous force.

export default function Verdict() {
  const frame = useStore(s => s.frame)
  const actuators = useStore(s => s.actuators)
  const build = useStore(s => s.build)
  const loadError = useStore(s => s.loadError)
  const setCtrl = useStore(s => s.setCtrl)
  const driveOn = useStore(s => s.driveOn)
  const peaks = useRef<number[]>([])
  const [, bump] = useState(0)

  useEffect(() => {
    if (!frame) return
    const p = peaks.current
    if (p.length !== frame.force.length) { p.length = 0; for (let i = 0; i < frame.force.length; i++) p.push(0) }
    if (frame.time === 0) p.fill(0)
    // Ignore the first 0.3 s: position motors jolt to their targets on start-up.
    if (frame.time > 0.3) for (let i = 0; i < frame.force.length; i++) p[i] = Math.max(p[i], Math.abs(frame.force[i]))
    bump(x => x + 1)
  }, [frame])

  if (loadError) return (
    <div className="verdict error">
      <h4>This robot can't be built</h4>
      <p>{loadError}</p>
      <p className="hint">Usually a size of 0, a mass of 0, or two parts named the same.</p>
    </div>
  )
  if (!frame) return <div className="verdict"><p className="hint">Press Run to see how it performs.</p></div>

  const mass = totalMass(build.root)
  const fell = build.mount === 'free' && frame.rootUp < 0.3 && frame.time > 0.2
  const overs = actuators.filter((a, i) => peaks.current[i] >= a.maxForce * 0.98).length
  const height = frame.rootPos[2]

  return (
    <div className="verdict">
      <div className="stats">
        <Stat label="Time" value={frame.time.toFixed(2)} unit="s" />
        <Stat label="Mass" value={mass.toFixed(2)} unit="kg" />
        <Stat label="Power" value={frame.power.toFixed(1)} unit="W" />
        <Stat label="Energy" value={frame.energy.toFixed(1)} unit="J" />
        <Stat label="Height" value={height.toFixed(2)} unit="m" />
        <Stat label="Contacts" value={String(frame.contacts)} />
      </div>
      <div className={'flag ' + (fell ? 'bad' : overs ? 'warn' : 'ok')}>
        {fell ? 'Fell over — lower the mass, widen the stance, or add stiffness.'
          : overs ? `${overs} motor${overs > 1 ? 's' : ''} at the limit — it wants more torque than you gave it.`
          : frame.time > 0 ? 'Standing and within limits.' : 'Ready.'}
      </div>
      {actuators.length > 0 && (
        <div className="motors">
          <h4>Motors <span className="muted">— load vs. limit (peak marked)</span></h4>
          {actuators.map((a, i) => {
            const f = Math.abs(frame.force[i] ?? 0), pk = peaks.current[i] ?? 0
            const pct = Math.min(100, (f / a.maxForce) * 100), ppk = Math.min(100, (pk / a.maxForce) * 100)
            const c = frame.ctrl[i] ?? 0
            const [lo, hi] = a.kind === 'torque' ? [-1, 1] : a.kind === 'velocity' ? [-20, 20] : [-Math.PI, Math.PI]
            return (
              <div key={a.name} className="motor">
                <div className="mrow">
                  <span className="mname">{a.joint.replace(/_joint$/, '')}</span>
                  <span className="mval">{f.toFixed(2)} / {a.maxForce} {a.kind === 'torque' || a.kind === 'position' ? 'N·m' : 'N·m'}</span>
                </div>
                <div className="bar"><div className={'fill' + (pct > 95 ? ' hot' : '')} style={{ width: pct + '%' }} /><div className="peak" style={{ left: ppk + '%' }} /></div>
                <input type="range" min={lo} max={hi} step={(hi - lo) / 200} value={c} disabled={driveOn && !!a.drive}
                  title={driveOn && a.drive ? 'Auto-drive is controlling this motor. Turn it off to drive by hand.' : 'Drive this motor'}
                  onChange={e => setCtrl(i, parseFloat(e.target.value))} />
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

function Stat({ label, value, unit }: { label: string; value: string; unit?: string }) {
  return <div className="stat"><span className="l">{label}</span><span className="v">{value}{unit && <em> {unit}</em>}</span></div>
}
