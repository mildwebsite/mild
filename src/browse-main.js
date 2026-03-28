import { createApp } from 'vue'
import BrowsePage from './pages/BrowsePage.vue'
import './assets/browse.css'

const app = createApp(BrowsePage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
