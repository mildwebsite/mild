import { createApp } from 'vue'
import HomePage from './pages/HomePage.vue'
import './assets/home.css'

const app = createApp(HomePage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
