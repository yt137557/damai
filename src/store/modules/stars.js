import request from '../../utils/axios'
export default {
  namespaced: true,
  state: {
    starsList: [],
    jsList: [],
    xxb: []
  },
  mutations: {
    setstarsList (state, payload) {
      state.starsList = payload
    },
    setJsList (state, payload) {
      state.jsList = payload
    }
  },
  actions: {
    getStarsList ({ commit }) {
      request
        .get('http://localhost:3000/ychmx')
        .then(data => {
          commit('setstarsList', data)
        })
        .catch(error => {
          console.log(2)
        })
    },
    getJsList ({ commit }) {
      request
        .get('http://localhost:3000/jslist')
        .then(data => {
          commit('setJsList', data)
        })
        .catch(error => {
          console.log(2)
        })
    }
  }
}
