import { useState } from 'react'
import Viewport from './view/Viewport'
import Tree from './ui/Tree'
import Inspector from './ui/Inspector'
import Controls from './ui/Controls'
import Verdict from './ui/Verdict'
import { exportMjcf, useStore } from './store'

export default function App() {
  const [showXml, setShowXml] = useState(false)
  const build = useStore(s => s.build)
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
        <a className="brand" href="/"><span className="mark">A</span> Adem <em>Forge</em></a>
        <span className="tagline">Robot design software in your browser — build, set the numbers, run.</span>
        <span className="grow" />
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
