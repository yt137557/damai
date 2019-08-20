export default {
  namespaced: true,
  state: {
    login: false,
    logining: []
  },
  mutations: {
    setlogining(state, payload) {
      state.logining[0] = payload
      state.login = true
    }
  },
  actions: {}
}
