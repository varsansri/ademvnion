import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// The 3D viewer shared by every photo-teardown page. Those pages are
// static HTML with no build step, so the filenames stay fixed. Output goes to
// ../3d/, next to the robot models, outside /inside/ so the Inside build
// (which empties ../inside) never deletes it. emptyOutDir stays off: the
// models built by build_menagerie.py live in the same folder.
export default defineConfig({
  base: '/3d/',
  publicDir: false,
  build: {
    outDir: '../3d', emptyOutDir: false, target: 'es2022',
    rollupOptions: {
      input: resolve(__dirname, 'src/toon.ts'),
      output: { entryFileNames: 'toon.js', chunkFileNames: 'toon-[name].js', assetFileNames: 'toon-[name][extname]' },
    },
  },
})
