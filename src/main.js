import './assets/css/main.css'

import { createApp } from 'vue'
import router from './Router';
import App from './App.vue'

createApp(App).use(router).mount('#app')
