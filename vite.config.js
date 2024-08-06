import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Mendengarkan pada semua alamat IP
    port: 3000, // Ganti dengan port yang diinginkan
  }
})
