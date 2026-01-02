import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // This is the correct base for your custom domain aidantam.ca
  base: './', 
})