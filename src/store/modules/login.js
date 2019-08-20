// 调用axios封装的请求组件
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
