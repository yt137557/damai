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
<<<<<<< HEAD
  DropdownItem,
  Button,
  Dialog
} from "vant"
import "vant/lib/index.css"
=======
  DropdownItem
} from 'vant'
import 'vant/lib/index.css'
window.login = false
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
Vue.use(Icon)
  .use(Loading)
  .use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Popup)
  .use(DropdownMenu)
  .use(DropdownItem)
<<<<<<< HEAD
  .use(Button)
  .use(Dialog)
=======
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
