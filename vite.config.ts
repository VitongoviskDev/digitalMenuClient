import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // 👈 This exposes it to your local network (0.0.0.0)
    port: 5173, // Optional: define the port if you want a fixed one
  },
})
