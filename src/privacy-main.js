import { createApp } from 'vue'
import PrivacyPage from './pages/PrivacyPage.vue'
import './assets/privacy.css'

const app = createApp(PrivacyPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
