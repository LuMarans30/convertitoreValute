import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/monthly-rates": {
        target: "https://ec.europa.eu/budg/inforeuro/api/public",
        changeOrigin: true,
        secure: false,
        ws: true,
      }
    }
  },
  plugins: [preact()],
});