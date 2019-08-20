import Vue from "vue"
import App from "./App.vue"
import router from "./router"
import store from "./store/index.js"
import { Search } from "vant"
import "./assets/styles/base.scss"
Vue.config.productionTip = false
Vue.use(Search)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
