import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig(({ command }) => ({
  plugins: [vue()],
  base: command === 'serve' ? '/' : '/mild/',
  publicDir: 'public',
  build: {
    rollupOptions: {
      input: {
        recipes: resolve(__dirname, 'recipes.html'),
        browse:  resolve(__dirname, 'browse.html'),
      }
    }
  }
}))
