// Loads /inside/unitree-go2/, times the 3D start-up, exercises X-ray, a part pick and
// every bench part, and saves screenshots. Serve the repo root on :8766 first.
import puppeteer from 'puppeteer-core'
const out = process.argv[2] || '.'
const base = process.argv[3] || 'http://127.0.0.1:8766'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage()
await page.setViewport({ width: 1400, height: 900 })
const errors = []
page.on('pageerror', e => errors.push(String(e)))
page.on('console', m => { if (m.type() === 'error') errors.push(m.text()) })
await page.goto(base + '/inside/unitree-go2/', { waitUntil: 'load' })
await page.evaluate(() => { new PerformanceObserver(l => { window.__long = (window.__long || []).concat(l.getEntries().map(e => Math.round(e.duration))) }).observe({ type: 'longtask', buffered: true }) })
const t0 = Date.now()
await page.evaluate(() => document.getElementById('go2-3d').scrollIntoView({ block: 'center' }))
await page.waitForFunction(() => window.__go2 && window.__bench, { timeout: 60000 })
console.log('3D ready in', Date.now() - t0, 'ms')
await new Promise(r => setTimeout(r, 1500))
await page.screenshot({ path: out + '/go2-a-view.png' })
await page.evaluate(() => window.__go2.select('4g'))
await new Promise(r => setTimeout(r, 2500))
await page.screenshot({ path: out + '/go2-b-xray-4g.png' })
await page.evaluate(() => document.getElementById('parts-3d').scrollIntoView())
for (const id of ['brain', 'main', '4g', 'wifi', 'radio', 'uwb', 'motors', 'fans', 'lidar']) {
  const t = Date.now()
  await page.evaluate(i => window.__bench.show(i), id)
  await new Promise(r => setTimeout(r, 900))
  await page.screenshot({ path: `${out}/go2-part-${id}.png` })
  console.log('part', id, Date.now() - t - 900, 'ms')
}
console.log('long tasks (ms):', JSON.stringify(await page.evaluate(() => window.__long || [])))
console.log('errors:', errors.length ? errors : 'none')
await browser.close()
