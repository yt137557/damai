import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import login from './modules/login'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { city, login }
})
