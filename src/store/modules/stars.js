import request from '../../utils/axios'
export default {
  namespaced: true,
  state: {
    starsList: [],
    jsList: [],
    xxb: []
  },
  mutations: {
    setstarsList(state, payload) {
      state.starsList = payload
    },
    setJsList(state, payload) {
      state.jsList = payload
    }
  },
  actions: {
    getStarsList({ commit }) {
      request
        .get('http://localhost:3000/ychmx')
        .then(res => {
          commit('setstarsList', res.data)
        })
        .catch(error => {
          console.log(2)
        })
    },
    getJsList({ commit }) {
      request
        .get('http://localhost:3000/jslist')
        .then(res => {
          commit('setJsList', res.data)
        })
        .catch(error => {
          console.log(2)
        })
    }
  }
}
