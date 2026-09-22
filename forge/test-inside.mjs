import puppeteer from 'puppeteer-core'
const OUT = process.argv[2] || '.'
const base = process.argv[3] || 'http://localhost:8766'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--disable-gpu','--use-angle=swiftshader','--enable-unsafe-swiftshader'] })
const page = await browser.newPage(); await page.setViewport({ width: 1400, height: 1000 })
const errs = []; page.on('pageerror', e => errs.push(e.message)); page.on('console', m => { if (m.type()==='error') errs.push(m.text()) }); page.on('requestfailed', r => errs.push('REQFAIL ' + r.url()))
const sleep = ms => new Promise(r => setTimeout(r, ms))
await page.goto(base + '/inside/so-arm101/', { waitUntil: 'load' }); await sleep(4000)
console.log('side panel rows:', await page.evaluate(() => document.querySelectorAll('#side .row').length), '| canvas:', await page.evaluate(() => !!document.querySelector('#stage canvas')))
await page.screenshot({ path: `${OUT}/inside1.png` })
// click a servo in the list
await page.evaluate(() => document.querySelector('#side .row[data-part="sts3215"]').click()); await sleep(400)
console.log('part view title:', await page.evaluate(() => document.querySelector('#side h3')?.textContent), '| hash:', await page.evaluate(() => location.hash))
await page.screenshot({ path: `${OUT}/inside2.png` })
// take it out
await page.evaluate(() => document.querySelector('#toggle').click()); await sleep(300)
await page.evaluate(() => document.querySelector('#back').click()); await sleep(300)
console.log('totals after hiding servos:', await page.evaluate(() => document.querySelector('#side .totals')?.innerText.replace(/\n/g,' ')))
await page.evaluate(() => document.querySelector('#restore').click()); await sleep(300)
// explode + joint
await page.evaluate(() => { const e = document.querySelector('#explode'); e.value = '0.7'; e.dispatchEvent(new Event('input')) })
await page.evaluate(() => { const j = document.querySelector('input[data-joint="elbow_flex"]'); j.value = '1.2'; j.dispatchEvent(new Event('input')) })
await sleep(500); await page.screenshot({ path: `${OUT}/inside3.png` })
console.log('errors:', errs.length ? errs : 'none')
await browser.close()
