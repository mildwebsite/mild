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
        recipes:       resolve(__dirname, 'recipes.html'),
        browse:        resolve(__dirname, 'browse.html'),
        index:         resolve(__dirname, 'index.html'),
        collaboration: resolve(__dirname, 'collaboration.html'),
        contact:       resolve(__dirname, 'contact.html'),
        cook:          resolve(__dirname, 'cook.html'),
        privacy:       resolve(__dirname, 'privacy.html'),
        recipe:        resolve(__dirname, 'recipe.html'),
      }
    }
  }
}))
