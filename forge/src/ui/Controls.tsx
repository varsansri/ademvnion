import { useStore } from '../store'

export default function Controls() {
  const mode = useStore(s => s.mode)
  const frame = useStore(s => s.frame)
  const engineReady = useStore(s => s.engineReady)
  const { run, pause, step, reset, setSpeed, setDrive } = useStore.getState()
  const speed = useStore(s => s.speed)
  const driveOn = useStore(s => s.driveOn)
  const running = !!frame?.running
  return (
    <div className="controls">
      {!engineReady ? (
        <span className="status">Loading physics engine…</span>
      ) : (
        <>
          {running
            ? <button className="primary" onClick={pause}>❚❚ Pause</button>
            : <button className="primary" onClick={run}>▶ Run</button>}
          <button onClick={step} title="Advance one frame">⏭ Step</button>
          <button onClick={reset} title="Back to the starting pose (also returns to editing)">↺ Reset</button>
          <span className="sep" />
          <label className="inline">Speed
            <select value={speed} onChange={e => setSpeed(parseFloat(e.target.value))}>
              <option value={0.1}>0.1×</option><option value={0.25}>0.25×</option><option value={0.5}>0.5×</option>
              <option value={1}>1×</option><option value={2}>2×</option>
            </select>
          </label>
          <label className="inline"><input type="checkbox" checked={driveOn} onChange={e => setDrive(e.target.checked)} /> Auto-drive</label>
          <span className="sep" />
          <span className="status">{mode === 'run' ? `t = ${(frame?.time ?? 0).toFixed(2)} s` : 'Editing — changes apply instantly'}</span>
        </>
      )}
    </div>
  )
}
