import { createApp } from 'vue'
import AuthPage from './pages/AuthPage.vue'
import './assets/auth.css'

const app = createApp(AuthPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
