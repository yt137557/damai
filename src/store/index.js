import Vue from "vue"
import Vuex from "vuex"
import city from "./modules/city"
import Search from "./modules/search"
import Stars from "./modules/stars"
Vue.use(Vuex)
export default new Vuex.Store({
  modules: { city, Search, Stars }
})
