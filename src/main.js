import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/style.scss'
import store from './store/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

// createApp(App, 'fa', FontAwesomeIcon).use(router).mount('#app')

const app = createApp(App)
app.component('fa', FontAwesomeIcon).use(store).use(router).mount('#app')
