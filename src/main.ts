import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { IonicVue } from '@ionic/vue'
import { createPinia } from 'pinia'

import '@ionic/vue/css/core.css'
import '@ionic/vue/css/normalize.css'
import '@ionic/vue/css/structure.css'
import '@ionic/vue/css/typography.css'
import '@ionic/vue/css/padding.css'
import '@ionic/vue/css/float-elements.css'
import '@ionic/vue/css/text-alignment.css'
import '@ionic/vue/css/text-transformation.css'
import '@ionic/vue/css/flex-utils.css'
import '@ionic/vue/css/display.css'

import './theme/variables.css'

const savedDarkMode = localStorage.getItem('rec_dark_mode') === 'true'
document.body.classList.toggle('dark', savedDarkMode)

const app = createApp(App)
const pinia = createPinia()

app.use(IonicVue)
app.use(pinia)
app.use(router)

router.isReady().then(() => {
  app.mount('#app')
})