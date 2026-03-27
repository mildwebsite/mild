import { createApp } from 'vue'
import RecipesPage from './pages/RecipesPage.vue'
import './assets/recipes.css'

const app = createApp(RecipesPage)
// $img(path) resolves public/ assets correctly with any base URL
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
