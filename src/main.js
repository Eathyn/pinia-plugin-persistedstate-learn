import { createApp } from 'vue'

import pinia from './store/index.js'
import App from './App.vue'

createApp(App).use(pinia).mount('#app')
