import { createApp } from 'vue'
import CameraPage from './pages/CameraPage.vue'
import './assets/camera.css'

const app = createApp(CameraPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
