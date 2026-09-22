import puppeteer from 'puppeteer-core'
import { writeFileSync } from 'node:fs'
// A still of the arm in its opening pose, shown while the real one loads.
// The canvas keeps no drawing buffer and only redraws when something changes,
// so an element screenshot usually lands on a cleared buffer. Reading the
// canvas from inside the page, right after forcing a frame, and retrying until
// the result is not blank, is the only reliable way to get it.
const OUT = process.argv[2]
const b = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--disable-gpu','--use-angle=swiftshader','--enable-unsafe-swiftshader'] })
const p = await b.newPage(); await p.setViewport({ width: 1400, height: 1000, deviceScaleFactor: 2 })
await p.goto('http://localhost:8766/', { waitUntil: 'load' })
await p.waitForSelector('#armhero.ready', { timeout: 30000 })
const url = await p.evaluate(() => new Promise((res, rej) => {
  const a = window.__arm
  const canvas = document.querySelector('#armstage canvas')
  canvas.dispatchEvent(new PointerEvent('pointerdown', { bubbles: true, clientX: -999, clientY: -999 }))
  let tries = 0
  const tick = () => {
    a.poseAt(6.8); a.applyJoints(); a.invalidate()
    const png = canvas.toDataURL('image/png')
    if (png.length > 40000) return res(png)          // a cleared buffer compresses to almost nothing
    if (++tries > 90) return rej(new Error('canvas stayed blank'))
    requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
}))
writeFileSync(`${OUT}/arm-poster.png`, Buffer.from(url.split(',')[1], 'base64'))
console.log('captured', url.length, 'chars of data url')
await b.close()
