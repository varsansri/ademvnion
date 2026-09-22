import puppeteer from 'puppeteer-core'
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', headless: true, args: ['--disable-gpu','--use-angle=swiftshader','--enable-unsafe-swiftshader'] })
const page = await browser.newPage(); await page.setViewport({ width: 1400, height: 900 })
await page.goto('http://localhost:8766/app/', { waitUntil: 'load' })
await page.waitForFunction(() => !document.body.innerText.includes('Loading physics engine'), { timeout: 30000 })
await page.click('button.primary'); await new Promise(r => setTimeout(r, 2500))
const info = await page.evaluate(() => [...document.querySelectorAll('.motor')].map(m => ({
  name: m.querySelector('.mname')?.textContent, val: m.querySelector('.mval')?.textContent,
  fill: m.querySelector('.fill')?.getAttribute('style'), fillW: m.querySelector('.fill')?.getBoundingClientRect().width, barW: m.querySelector('.bar')?.getBoundingClientRect().width,
  peak: m.querySelector('.peak')?.getAttribute('style') })))
console.log(JSON.stringify(info, null, 1))
await browser.close()
