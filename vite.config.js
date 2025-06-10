import { defineConfig } from 'vite'

export default defineConfig({
  base: '/VZK-Studio/', // This is crucial for GitHub Pages
  build: {
    assetsInlineLimit: 0, 
    assetsDir: 'static', // Optional but recommended
    outDir: 'dist', // This is the default but good to confirm
    emptyOutDir: true // Cleans the dist folder before build
  }
})