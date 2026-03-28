import { createApp } from 'vue'
import SettingsPage from './pages/SettingsPage.vue'
import './assets/settings.css'

const app = createApp(SettingsPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
