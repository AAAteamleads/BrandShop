import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

createApp(App)
  .component('fa', FontAwesomeIcon)
  .mount('#app')
