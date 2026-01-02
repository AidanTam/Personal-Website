import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Changed from "/Personal-Website/" to "/" because you are now using aidantam.ca
  base: "/", 
})
