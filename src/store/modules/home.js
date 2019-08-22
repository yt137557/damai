import request from "./../../utils/axios"
export default {
  namespaced: true,
  state: {
    bannerlist: [],
    logolist: [],
    posterPic: [],
    nearList: [],
    musicList: []
  },
  mutations: {
    getBannerlist(state) {
      request.get("http://localhost:3000/data").then(res => {
        let temp = res.data
        state.posterPic = temp.bannerList[0].pic
        state.bannerlist = temp.focusPicList
        state.logolist = temp.navigationList
        state.nearList = temp.nearByCity
        state.musicList = temp.projectInfo
      })
    }
    // getinfo(state,payload){

    // }
  }
}
