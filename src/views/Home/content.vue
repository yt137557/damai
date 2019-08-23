<template>
  <div class="content-page">
    <div class="swiper-container swiperOne" style="height:282px">
      <div class="swiper-wrapper">
        <router-link
          tag="div"
          :to="'/buy/'+item.id"
          class="swiper-slide"
          v-for="item in bannerlist"
          :key="item.pic"
        >
          <img :src="item.pic" />
        </router-link>
      </div>
      <div class="swiper-pagination"></div>
    </div>

    <ul class="navigation">
      <router-link :to="'/tickets/'+item.id" tag="li" v-for="item in logolist" :key="item.id">
        <img :src="item.pic" />
        <span>{{item.title}}</span>
      </router-link>
    </ul>
    <router-link :to="'/posters'" tag="div" class="poster">
      <img :src="posterPic" v-if="posterPic.length>0?true:''" />
      <van-loading size="24px" v-else vertical>加载中...</van-loading>
    </router-link>

    <star></star>
    <coming :list="nearList"></coming>
    <h2>更多演出</h2>
    <more :listA="musicList"></more>
  </div>
</template>
<script>
// import Vue from "vue"
// import { Icon, Loading } from "vant"
// Vue.use(Icon).use(Loading)
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
import star from './stars'
import coming from './coming'
import more from './more'
import { mapMutations, mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  components: {
    star,
    coming,
    more
  },
  computed: {
    ...mapState('home', [
      'bannerlist',
      'logolist',
      'posterPic',
      'nearList',
      'musicList'
    ])
  },
  methods: {
    ...mapMutations('home', ['getBannerlist']),
    init () {
      var mySwiper = new Swiper('.swiperOne', {
        loop: true, // 循环模式选项
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  mounted () {
    this.getBannerlist()
  },

  updated () {
    this.init()
    // console.log(this.nearList)
  }
}
</script>
<style  lang='scss'>
@import "./../../assets/styles/base.scss";
.content-page {
  width: 100%;
  height: 270px;
  .swiper-container {
    img {
      width: 100%;
      height: 282px;
    }
  }
  .navigation {
    width: 100%;
    height: 316px;
    box-sizing: border-box;
    padding: 40px 0 24px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 10px;
    li {
      img {
        height: 64px;
        margin-bottom: 8px;
      }
      width: 25%;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 40px;
    }
  }
  .poster {
    height: 240px;
    img {
      width: 100%;
      height: 100%;
      background-size: cover;
    }
  }
  h2 {
    @include commonH;
  }
}
</style>
