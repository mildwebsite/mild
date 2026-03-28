import { createApp } from 'vue'
import ContactPage from './pages/ContactPage.vue'
import './assets/contact.css'

const app = createApp(ContactPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
