import type { Build } from './model/types'

// The whole robot travels in the URL: JSON -> deflate -> base64url in "#b=".
// Falls back to plain base64 JSON where CompressionStream is missing.

const b64url = (bytes: Uint8Array) => btoa(String.fromCharCode(...bytes)).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
const unb64url = (s: string): Uint8Array => Uint8Array.from(atob(s.replace(/-/g, '+').replace(/_/g, '/').padEnd(Math.ceil(s.length / 4) * 4, '=')), c => c.charCodeAt(0))

async function pipe(bytes: Uint8Array, stream: CompressionStream | DecompressionStream): Promise<Uint8Array> {
  const out = new Blob([bytes as BlobPart]).stream().pipeThrough(stream as unknown as ReadableWritablePair<Uint8Array, Uint8Array>)
  return new Uint8Array(await new Response(out).arrayBuffer())
}

export async function encodeBuild(b: Build): Promise<string> {
  const json = new TextEncoder().encode(JSON.stringify(b))
  if ('CompressionStream' in globalThis) {
    const z = await pipe(json, new CompressionStream('deflate-raw'))
    return '#b=' + b64url(z)
  }
  return '#j=' + b64url(json)
}

export async function decodeBuild(hash: string): Promise<Build | null> {
  try {
    const m = /^#(b|j)=([A-Za-z0-9_-]+)$/.exec(hash)
    if (!m) return null
    let bytes = unb64url(m[2])
    if (m[1] === 'b') bytes = await pipe(bytes, new DecompressionStream('deflate-raw'))
    const b = JSON.parse(new TextDecoder().decode(bytes)) as Build
    if (!b || !b.root || !Array.isArray(b.root.shapes)) return null
    return b
  } catch {
    return null
  }
}
