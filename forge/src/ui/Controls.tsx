import { useStore } from '../store'

export default function Controls() {
  const mode = useStore(s => s.mode)
  const frame = useStore(s => s.frame)
  const engineReady = useStore(s => s.engineReady)
  const { run, pause, step, reset, setSpeed, setDrive, setFollow, undo, redo, shareLink, showToast } = useStore.getState()
  const follow = useStore(s => s.follow)
  const canUndo = useStore(s => s.past.length > 0)
  const canRedo = useStore(s => s.future.length > 0)
  const free = useStore(s => s.build.mount === 'free')
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
          {free && <label className="inline"><input type="checkbox" checked={follow} onChange={e => setFollow(e.target.checked)} /> Follow</label>}
          <span className="sep" />
          <button onClick={undo} disabled={!canUndo} title="Undo (Ctrl+Z)">↶</button>
          <button onClick={redo} disabled={!canRedo} title="Redo (Ctrl+Shift+Z)">↷</button>
          <button onClick={async () => { const url = await shareLink(); try { await navigator.clipboard.writeText(url); showToast('Link copied — the whole robot is in it') } catch { showToast('Link is in the address bar') } }} title="Put this robot in a link you can send">⤴ Share</button>
          <span className="sep" />
          <span className="status">{mode === 'run' ? `t = ${(frame?.time ?? 0).toFixed(2)} s` : 'Editing — changes apply instantly'}</span>
        </>
      )}
    </div>
  )
}
