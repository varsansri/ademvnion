import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// The 3D Go2 on /inside/unitree-go2/. That page is plain static HTML with no
// build step, so the filenames stay fixed, exactly like the hero arm.
// Output is committed to ../inside/unitree-go2/js; go2.glb and go2.json next
// to the page come from build_go2.py.
export default defineConfig({
  base: '/inside/unitree-go2/js/',
  publicDir: false,
  build: {
    outDir: '../inside/unitree-go2/js', emptyOutDir: true, target: 'es2022',
    rollupOptions: {
      input: resolve(__dirname, 'src/go2.ts'),
      output: { entryFileNames: 'go2.js', chunkFileNames: 'go2-[name].js', assetFileNames: 'go2-[name][extname]' },
    },
  },
})
