import request from './../../utils/axios'
export default {
  namespaced: true,
  state: {
    bannerlist: [],
    logolist: [],
    posterPic: [],
    nearList: [],
    musicList: [],
    allInfo: []
  },
  mutations: {
    getBannerlist(state) {
      request.get('http://localhost:3000/ydata').then(res => {
        state.allInfo = []
        let temp = res.data
        state.posterPic = temp.bannerList[0].pic
        state.bannerlist = temp.focusPicList
        state.logolist = temp.navigationList
        state.nearList = temp.nearByCity
        state.musicList = temp.projectInfo
        state.allInfo = state.musicList.concat(temp.nearByCity)
        // console.log(state.allInfo)
      })
    }
  }
}
