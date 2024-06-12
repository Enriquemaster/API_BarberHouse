import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8000/api/listado',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/api/productos': {
        target: 'http://127.0.0.1:8000/api/productos',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/api/servicios': {
        target: 'http://127.0.0.1:8000/api/servicios',
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  }
})