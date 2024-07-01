import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import axios from 'axios'
import router from './router'

axios.defaults.baseURL = "http://127.0.0.1:8000/api/v1/post/"

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')
