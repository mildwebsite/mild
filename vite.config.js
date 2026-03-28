import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { viteSingleFile } from 'vite-plugin-singlefile'

const entry = process.env.VITE_ENTRY

export default defineConfig(({ command }) => ({
  plugins: [vue(), ...(entry ? [viteSingleFile()] : [])],
  base: command === 'serve' ? '/' : './',
  publicDir: false,
  build: {
    outDir: '.',
    emptyOutDir: false,
    rollupOptions: {
      input: entry ? { [entry]: resolve(__dirname, `${entry}.html`) } : {
        recipes:       resolve(__dirname, 'recipes.html'),
        browse:        resolve(__dirname, 'browse.html'),
        index:         resolve(__dirname, 'index.html'),
        collaboration: resolve(__dirname, 'collaboration.html'),
        contact:       resolve(__dirname, 'contact.html'),
        cook:          resolve(__dirname, 'cook.html'),
        privacy:       resolve(__dirname, 'privacy.html'),
        recipe:        resolve(__dirname, 'recipe.html'),
        home:          resolve(__dirname, 'home.html'),
        favorites:     resolve(__dirname, 'favorites.html'),
        camera:        resolve(__dirname, 'camera.html'),
        voice:         resolve(__dirname, 'voice.html'),
      }
    }
  }
}))
