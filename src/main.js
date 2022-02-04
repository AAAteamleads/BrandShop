import { createApp } from 'vue'
import App from './App.vue'
import './assets/scss/style.scss'
import store from './store/index'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)


import Amplify from 'aws-amplify';
import '@aws-amplify/ui-vue';
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);


const app = createApp(App);
app
  .component('fa', FontAwesomeIcon)
  .use(store)
  .mount('#app')
