import request from "../../utils/axios"

export default {
  namespaced: true,
  state: {
    wordList: [],
    hisList: [],
    dex: ""
  },
  mutations: {
    setWordList(state, payload) {
      state.wordList = payload
    },
    sethisList(state) {
      state.hisList = []
      window.localStorage.setItem("xxx", "")
    },
    setindex(state, payload) {
      state.dex = payload.dex
    },
    sethisList1(state, payload) {
      state.hisList = payload
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
