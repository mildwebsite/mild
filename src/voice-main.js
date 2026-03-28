import { createApp } from 'vue'
import VoicePage from './pages/VoicePage.vue'
import './assets/voice.css'

const app = createApp(VoicePage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
