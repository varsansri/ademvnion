import { useEffect, useState } from 'react'
import type { Vec3 } from '../model/types'

// A number box that lets you type freely ("0.", "-", "1e-3") and only pushes
// finished numbers to the model. It re-syncs from the model when not focused.
function NumInput({ value, onChange, step, min, max, label }: {
  value: number; onChange: (v: number) => void; step?: number; min?: number; max?: number; label?: string
}) {
  const fmt = (v: number) => (Number.isFinite(v) ? String(+v.toFixed(4)) : '0')
  const [text, setText] = useState(fmt(value))
  const [focused, setFocused] = useState(false)
  useEffect(() => { if (!focused) setText(fmt(value)) }, [value, focused])
  return (
    <input type="number" aria-label={label} value={text} step={step} min={min} max={max}
      onFocus={() => setFocused(true)}
      onBlur={() => { setFocused(false); setText(fmt(value)) }}
      onChange={e => {
        setText(e.target.value)
        const v = parseFloat(e.target.value)
        if (Number.isFinite(v)) onChange(v)
      }} />
  )
}

export function Num({ label, value, onChange, step = 0.01, min, max, unit }: {
  label: string; value: number; onChange: (v: number) => void; step?: number; min?: number; max?: number; unit?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <span className="input">
        <NumInput value={value} onChange={onChange} step={step} min={min} max={max} label={label} />
        {unit && <em>{unit}</em>}
      </span>
    </label>
  )
}

export function Vec({ label, value, onChange, step = 0.01, unit }: {
  label: string; value: Vec3; onChange: (v: Vec3) => void; step?: number; unit?: string
}) {
  const set = (i: number, v: number) => { const n = [...value] as Vec3; n[i] = v; onChange(n) }
  return (
    <div className="field vec">
      <span>{label}{unit && <em> {unit}</em>}</span>
      <span className="inputs">
        {(['x', 'y', 'z'] as const).map((k, i) => (
          <NumInput key={k} label={`${label} ${k}`} value={value[i]} step={step} onChange={v => set(i, v)} />
        ))}
      </span>
    </div>
  )
}

export function Sel<T extends string>({ label, value, options, onChange }: {
  label: string; value: T; options: { v: T; l: string }[]; onChange: (v: T) => void
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <select value={value} onChange={e => onChange(e.target.value as T)}>
        {options.map(o => <option key={o.v} value={o.v}>{o.l}</option>)}
      </select>
    </label>
  )
}

export function Txt({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <label className="field">
      <span>{label}</span>
      <input type="text" value={value} onChange={e => onChange(e.target.value)} />
    </label>
  )
}

export function Toggle({ label, value, onChange }: { label: string; value: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="field toggle">
      <span>{label}</span>
      <input type="checkbox" checked={value} onChange={e => onChange(e.target.checked)} />
    </label>
  )
}
