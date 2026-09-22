import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// The homepage hero arm. Built separately from the teardown pages because it
// is loaded by the plain static index.html at the repo root, which has no
// build step: the filenames must stay fixed so index.html never changes.
// Output is committed to ../hero and served by the Cloudflare Worker.
export default defineConfig({
  base: '/hero/',
  publicDir: false, // reuses /inside/so-arm101/{data.json,so101.glb}
  build: {
    outDir: '../hero', emptyOutDir: true, target: 'es2022',
    rollupOptions: {
      input: resolve(__dirname, 'src/hero.ts'),
      output: { entryFileNames: 'hero.js', chunkFileNames: 'hero-[name].js', assetFileNames: 'hero-[name][extname]' },
    },
  },
})
