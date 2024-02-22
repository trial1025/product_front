/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'
import PrimeVue from 'primevue/config'

// Styles
import 'primevue/resources/themes/saga-blue/theme.css' // 主題
import 'primevue/resources/primevue.min.css' // 核心樣式
import 'primeicons/primeicons.css' // 圖示
import 'primeflex/primeflex.css'

const app = createApp(App)

registerPlugins(app)

app.use(PrimeVue)

app.mount('#app')
