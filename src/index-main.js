import { createApp } from 'vue'
import IndexPage from './pages/IndexPage.vue'
import './assets/index.css'

const app = createApp(IndexPage)
app.config.globalProperties.$img = (path) => import.meta.env.BASE_URL + path
app.mount('#app')
