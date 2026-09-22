import puppeteer from 'puppeteer-core'
const OUT = process.argv[2] || '.'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--disable-gpu','--use-angle=swiftshader','--enable-unsafe-swiftshader','--window-size=1400,900'] })
const page = await browser.newPage()
await page.setViewport({ width: 1400, height: 900 })
const logs = []
page.on('console', m => logs.push(`[${m.type()}] ${m.text()}`))
page.on('pageerror', e => logs.push(`[pageerror] ${e.message}`))
page.on('requestfailed', r => logs.push(`[reqfail] ${r.url()} ${r.failure()?.errorText}`))
await page.goto('http://localhost:8766/app/', { waitUntil: 'load', timeout: 60000 })
const t0 = Date.now()
let ready = false
while (Date.now() - t0 < 30000) {
  ready = await page.evaluate(() => !document.body.innerText.includes('Loading physics engine'))
  if (ready) break
  await new Promise(r => setTimeout(r, 300))
}
logs.push(`engine ready: ${ready} after ${Date.now() - t0} ms`)
await page.screenshot({ path: `${OUT}/forge_edit.png` })
if (ready) {
  await page.click('button.primary')
  await new Promise(r => setTimeout(r, 3500))
  const txt = await page.evaluate(() => document.querySelector('.verdict')?.innerText)
  logs.push('VERDICT: ' + (txt || '').replace(/\n/g, ' | ').slice(0, 400))
  await page.screenshot({ path: `${OUT}/forge_run.png` })
  // Try the walker sample
  await page.select('.panel-head select', 'walker')
  await new Promise(r => setTimeout(r, 800))
  await page.click('button.primary')
  await new Promise(r => setTimeout(r, 4000))
  const txt2 = await page.evaluate(() => document.querySelector('.verdict')?.innerText)
  logs.push('WALKER: ' + (txt2 || '').replace(/\n/g, ' | ').slice(0, 300))
  await page.screenshot({ path: `${OUT}/forge_walker.png` })
}
console.log(logs.join('\n'))
await browser.close()
