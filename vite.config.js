import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/mwalimu.ai/", // Set the base path for deployment
  plugins: [react()],
})
