import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import home from './modules/home'
import login from './modules/login'
import Search from './modules/search'
import Stars from './modules/stars'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { city, home, login, Search, Stars }
})
