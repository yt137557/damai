export default {
  namespaced: true,
  state: {
    data: null,
    isCity: null
  },
  mutations: {
    getData (state, payload) {
      state.data = payload
    },
    getCity (state, payload) {
      state.isCity = payload.city
    }
  }
}
