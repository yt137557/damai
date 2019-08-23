import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index.js'
import './assets/styles/base.scss'
import './assets/js/base'
import {
  Icon,
  Loading,
  Tab,
  Tabs,
  Sticky,
  Popup,
  DropdownMenu,
  DropdownItem,
  Button,
  Dialog
} from 'vant'
import 'vant/lib/index.css'
Vue.use(Icon)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Popup)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Button)
  .use(Dialog)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
