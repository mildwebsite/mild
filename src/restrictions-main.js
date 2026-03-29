import { createApp } from 'vue'
import RestrictionsPage from './pages/RestrictionsPage.vue'
import './assets/restrictions.css'

const app = createApp(RestrictionsPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
