import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Source lives in forge/, the compiled app is committed to ../app and served
// by the Cloudflare Worker at /app/ with no build step on their side.
export default defineConfig({
  plugins: [react()],
  base: '/app/',
  build: { outDir: '../app', emptyOutDir: true, target: 'es2022', sourcemap: false },
  worker: { format: 'es' },
  optimizeDeps: { exclude: ['@mujoco/mujoco'] },
})
