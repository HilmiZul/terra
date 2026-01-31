import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/index'
import 'bootstrap/dist/css/bootstrap.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './assets/fa/css/all.min.css'

AOS.init()

const app = createApp(App)
app
  .use(router)
  .mount('#app')
