import { createApp } from 'vue'
import BenefitsPage from './pages/BenefitsPage.vue'
import './assets/benefits.css'

const app = createApp(BenefitsPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
