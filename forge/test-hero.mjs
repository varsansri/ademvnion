import puppeteer from 'puppeteer-core'
// Homepage arm: it must load, sway on its own, and turn a joint when dragged.
const OUT = process.argv[2] || '.'
const base = process.argv[3] || 'http://localhost:8766'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--disable-gpu', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] })
const page = await browser.newPage(); await page.setViewport({ width: 1400, height: 1000 })
page.setDefaultNavigationTimeout(90000)   // the live site over the network, not localhost
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type() === 'error') errs.push(m.text()) }); page.on('requestfailed', r => errs.push('REQFAIL ' + r.url()))
const sleep = ms => new Promise(r => setTimeout(r, ms))

await page.goto(base + '/', { waitUntil: 'load' })
await page.waitForSelector('#armhero.ready', { timeout: 20000 })
await page.evaluate(() => document.getElementById('armhero').scrollIntoView({ block: 'center' }))
await sleep(600)
console.log('canvas:', await page.evaluate(() => !!document.querySelector('#armstage canvas')))
await page.screenshot({ path: `${OUT}/hero1.png` })

// It should be moving by itself before anyone touches it.
const a = await page.evaluate(() => ({ ...window.__arm.q }))
await sleep(1200)
const b = await page.evaluate(() => ({ ...window.__arm.q }))
console.log('idle sway moved:', Object.keys(b).filter(k => Math.abs(b[k] - a[k]) > 1e-3))

// Drag the forearm: the elbow should turn and the idle sway should stop.
// The middle of a mesh, not its origin: link origins often sit inside a
// neighbouring part, so a drag there grabs the wrong joint.
const at = link => page.evaluate(l => {
  const m = window.__arm.meshes.find(m => m.userData.link === l)
  m.geometry.computeBoundingSphere()
  const p = m.localToWorld(m.geometry.boundingSphere.center.clone()).project(window.__arm.camera)
  const r = document.querySelector('#armstage canvas').getBoundingClientRect()
  return { x: r.left + (p.x * 0.5 + 0.5) * r.width, y: r.top + (-p.y * 0.5 + 0.5) * r.height }
}, link)
const box = await at('upper_arm_link')
const before = await page.evaluate(() => ({ ...window.__arm.q }))
await page.mouse.move(box.x, box.y)
await page.mouse.down()
for (let i = 1; i <= 12; i++) { await page.mouse.move(box.x + i * 9, box.y + i * 5); await sleep(16) }
await page.mouse.up()
await sleep(300)
const after = await page.evaluate(() => ({ ...window.__arm.q }))
const moved = Object.keys(after).filter(k => Math.abs(after[k] - before[k]) > 0.02)
console.log('drag moved joints:', moved, '(want just shoulder_lift) | by', moved.map(k => (after[k] - before[k]).toFixed(2)).join(','))
console.log('idle stopped:', await page.evaluate(() => document.getElementById('armhero').classList.contains('touched')))
await page.screenshot({ path: `${OUT}/hero2.png` })

// Joint limits must hold however far you drag.
const box2 = await at('upper_arm_link')
await page.mouse.move(box2.x, box2.y); await page.mouse.down()
for (let i = 1; i <= 30; i++) { await page.mouse.move(box2.x + i * 40, box2.y + i * 20); await sleep(8) }
await page.mouse.up()
const lim = await page.evaluate(() => {
  const j = window.__arm.jointGroups.get('shoulder_lift').j
  return { q: window.__arm.q.shoulder_lift, lower: j.lower, upper: j.upper }
})
console.log('after a huge drag:', lim, 'in range:', lim.q >= lim.lower - 1e-6 && lim.q <= lim.upper + 1e-6)

// Dragging the empty background spins the camera instead.
const cam0 = await page.evaluate(() => window.__arm.camera.position.toArray())
const empty = await page.evaluate(() => { const r = document.querySelector('#armstage canvas').getBoundingClientRect(); return { x: r.left + 24, y: r.top + r.height / 2 } })
await page.mouse.move(empty.x, empty.y); await page.mouse.down()
for (let i = 1; i <= 10; i++) { await page.mouse.move(empty.x + i * 12, empty.y); await sleep(16) }
await page.mouse.up(); await sleep(300)
const cam1 = await page.evaluate(() => window.__arm.camera.position.toArray())
console.log('orbit moved camera:', cam0.some((v, i) => Math.abs(v - cam1[i]) > 0.01))
await page.screenshot({ path: `${OUT}/hero3.png` })

// Phone width.
await page.setViewport({ width: 390, height: 844 })
await sleep(800)
console.log('mobile canvas size:', await page.evaluate(() => { const c = document.querySelector('#armstage canvas'); return [c.clientWidth, c.clientHeight] }))
const over = await page.evaluate(() => {
  const w = document.documentElement.clientWidth
  return [...document.querySelectorAll('*')].filter(e => e.getBoundingClientRect().right > w + 1 || e.getBoundingClientRect().left < -1)
    .map(e => e.tagName + '.' + e.className + ' ' + Math.round(e.getBoundingClientRect().left) + '..' + Math.round(e.getBoundingClientRect().right)).slice(0, 8)
})
console.log('no horizontal scroll:', await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth + 1), over)
await page.screenshot({ path: `${OUT}/hero4.png` })

console.log('errors:', errs.length ? errs : 'none')
await browser.close()
