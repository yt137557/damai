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
  Search
} from 'vant'
import 'vant/lib/index.css'
window.login = false
Vue.use(Icon)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Popup)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Search)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
