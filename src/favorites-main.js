import { createApp } from 'vue'
import FavoritesPage from './pages/FavoritesPage.vue'
import './assets/favorites.css'

const app = createApp(FavoritesPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
