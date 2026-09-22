import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// Static teardown pages. Built output is committed to ../inside and served
// by the Cloudflare Worker at /inside/.
export default defineConfig({
  base: '/inside/',
  publicDir: 'public',
  build: {
    outDir: '../inside', emptyOutDir: true, target: 'es2022',
    rollupOptions: { input: { index: resolve(__dirname, 'index.html'), so101: resolve(__dirname, 'so-arm101/index.html') } },
  },
})
