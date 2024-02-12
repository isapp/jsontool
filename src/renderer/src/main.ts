import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Home from './views/Home.vue'
import JSONPathDebugger from './views/JSONPathDebugger.vue'
import JSONBeautify from './views/JSONBeautify.vue'

declare global {
  interface Window {
    api: any
  }
}

const app = createApp(App)
const pinia = createPinia()

const routes = [
  { path: '/', component: Home },
  { path: '/json-path', component: JSONPathDebugger },
  { path: '/json-beautify', component: JSONBeautify }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

app.use(router)
app.use(pinia)
app.mount('#app')
