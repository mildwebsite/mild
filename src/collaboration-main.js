import { createApp } from 'vue'
import CollaborationPage from './pages/CollaborationPage.vue'
import './assets/collaboration.css'

const app = createApp(CollaborationPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
