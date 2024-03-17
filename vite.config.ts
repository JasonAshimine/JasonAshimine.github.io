import { defineConfig } from 'vite';
import * as path from "path";
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: './deploy'
  },
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@src": path.resolve(__dirname, "src"),
      "@script": path.resolve(__dirname, "src/script"),
      "@components": path.resolve(__dirname, "src/components"),
      "@": path.resolve(__dirname),
    },
  },
})
