import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Simplified Vite config to ensure reliable dev server startup in sandbox
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    hmr: {
      host: '0.0.0.0',
      clientPort: 3000,
    },
  },
})
