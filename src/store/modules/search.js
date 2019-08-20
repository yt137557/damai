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
  // mutations: {
  //   // getHisList(state, payload) {
  //   //   let index = state.wordList.findIndex(item => {
  //   //     return item.id === payload.id
  //   //   })
  //   //   if (index > -1) {
  //   //     let obj = state.wordList[index]
  //   //   } else {
  //   //     let obj = { ...payload }
  //   //     state.wordList.push(obj)
  //   //   }
  //   //   window.localStorage.setItem("words", JSON.stringify(state.wordList))
  //   // }
  // },
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
