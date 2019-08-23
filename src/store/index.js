import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import home from './modules/home'
<<<<<<< HEAD
=======
import login from './modules/login'
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20

Vue.use(Vuex)
export default new Vuex.Store({
  modules: { city, home, login }
})
