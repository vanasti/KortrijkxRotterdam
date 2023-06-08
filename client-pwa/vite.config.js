import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
   server: {
    proxy: {
      "/api": {
        target: "https://kleef.ddev.site",
        changeOrigin: true,
        secure: false,
      },
    },
  },
   build: {
    // generate manifest.json in outDir
    manifest: true
  },
})
