import { createApp } from 'vue'
import CookPage from './pages/CookPage.vue'
import './assets/cook.css'

const app = createApp(CookPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
