import { useEffect, useState } from 'react'
import Viewport from './view/Viewport'
import Tree from './ui/Tree'
import Inspector from './ui/Inspector'
import Controls from './ui/Controls'
import Verdict from './ui/Verdict'
import { exportMjcf, loadFromUrl, useStore } from './store'

export default function App() {
  const [showXml, setShowXml] = useState(false)
  const build = useStore(s => s.build)
  const toast = useStore(s => s.toast)
  useEffect(() => {
    void loadFromUrl()
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement
      if (t && (t.tagName === 'INPUT' || t.tagName === 'SELECT' || t.tagName === 'TEXTAREA')) return
      const st = useStore.getState()
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'z') { e.preventDefault(); if (e.shiftKey) st.redo(); else st.undo() }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'y') { e.preventDefault(); st.redo() }
      else if (e.key === ' ') { e.preventDefault(); if (st.frame?.running) st.pause(); else st.run() }
      else if (e.key.toLowerCase() === 'r') st.reset()
      else if (e.key === 'Delete' || e.key === 'Backspace') { if (st.selectedId && st.selectedId !== st.build.root.id) st.removeBody(st.selectedId) }
      else if (e.key === 'Escape') st.select(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])
  const download = () => {
    const blob = new Blob([exportMjcf()], { type: 'application/xml' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = `${build.name.replace(/[^\w]+/g, '_') || 'robot'}.xml`
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 1000)
  }
  return (
    <div className="app">
      <header className="top">
        <a className="brand" href="/"><img className="mark" src="/img/logo-80.webp" width="24" height="24" alt="" /> Adem <em>Forge</em></a>
        <span className="tagline">Robot design software in your browser — build, set the numbers, run.</span>
        <span className="grow" />
        <a className="mini" href="/inside/so-arm101/">Inside a real robot</a>
        <button className="mini" onClick={() => setShowXml(true)}>View MJCF</button>
        <button className="mini" onClick={download}>Download .xml</button>
      </header>
      <aside className="left"><Tree /></aside>
      <main className="center">
        <Viewport />
        <Controls />
      </main>
      <aside className="right">
        <Inspector />
        <Verdict />
      </aside>
      {toast && <div className="toast">{toast}</div>}
      {showXml && (
        <div className="modal" onClick={() => setShowXml(false)}>
          <div className="sheet" onClick={e => e.stopPropagation()}>
            <div className="panel-head"><span>MJCF — opens in MuJoCo, Isaac Lab, and any MuJoCo-compatible simulator</span><button className="mini" onClick={() => setShowXml(false)}>close</button></div>
            <pre>{exportMjcf()}</pre>
          </div>
        </div>
      )}
    </div>
  )
}
