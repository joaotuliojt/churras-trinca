import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { esbuildCommonjs } from '@originjs/vite-plugin-commonjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, './src/components')
      },
      {
        find: '@styles/stitches',
        replacement: path.resolve(__dirname, './src/styles/stitches.ts')
      }
    ]
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(['react-moment'])]
    }
  }
})
