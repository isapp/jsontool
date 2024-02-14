import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createPinia } from 'pinia'
import App from './App.vue'
import Home from './views/Home.vue'
import JSONPathDebugger from './views/JSONPathDebugger.vue'
import JSONBeautify from './views/JSONBeautify.vue'
import { Route } from './enums/routes'

declare global {
  interface Window {
    api: any
    electron: any
  }
}

const app = createApp(App)
const pinia = createPinia()

const routes = [
  { path: Route.Home, component: Home },
  { path: Route.JsonPath, component: JSONPathDebugger },
  { path: Route.JsonBeautify, component: JSONBeautify }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

app.use(router)
app.use(pinia)
app.mount('#app')
