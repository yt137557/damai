import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index.js"
import "./assets/styles/base.scss"
import "./assets/js/base"
import { Icon } from "vant"
import "vant/lib/index.css"
Vue.use(Icon)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
