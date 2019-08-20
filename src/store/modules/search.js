import request from "../../utils/axios"

export default {
  namespaced: true,
  state: {
    wordList: [],
    hisList: []
  },
  mutations: {
    setWordList(state, payload) {
      state.wordList = payload
    }
  },
  actions: {
    getWordList({ commit }) {
      request
        .get("http://localhost:3000/data")
        .then(data => {
          commit("setWordList", data)
        })
        .catch(error => {
          console.log(2)
        })
    }
  }
}
