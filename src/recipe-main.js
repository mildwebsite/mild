import { createApp } from 'vue'
import RecipePage from './pages/RecipePage.vue'
import './assets/recipe.css'

const app = createApp(RecipePage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
