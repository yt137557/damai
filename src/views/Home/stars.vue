<template>
  <div class="stars">
    <h2>
      大咖在大麦
      <span>
        查看更多&nbsp;
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </span>
    </h2>
    <div class="swiper-container swiperThird">
      <div class="swiper-wrapper starlist">
        <div class="swiper-slide">
          <div class="starTop">
            <img src="https://intercms.damai.cn/artist/pic/1535596053705/1535596053705-main.jpg" />
            <div>
              <h3>周杰伦</h3>
              <p>181.5万粉丝</p>
            </div>
            <p class="focus">
              <i class="iconfont icon-jiahao"></i>关注
            </p>
          </div>
          <p class="comming">
            最近6场演出
            <span>
              <i class="iconfont icon-arrow-right-copy-copy"></i>
            </span>
          </p>
        </div>
        <div class="swiper-slide">
          <div class="starTop">
            <img src="https://intercms.damai.cn/artist/pic/1535596053705/1535596053705-main.jpg" />
            <div>
              <h3>周杰伦</h3>
              <p>181.5万粉丝</p>
            </div>
            <p class="focus">
              <i class="iconfont icon-jiahao"></i>关注
            </p>
          </div>
          <p class="comming">
            最近6场演出
            <span>
              <i class="iconfont icon-arrow-right-copy-copy"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue"
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"

import { Icon } from "vant"
Vue.use(Icon)
export default {
  methods: {
    swiperThird() {
      var mySwiper = new Swiper(".swiperThird", {
        slidesOffsetBefore: 40,
        spaceBetween: 20
      })
    }
  },
  mounted() {
    this.swiperThird()
  }
}
</script>
<style scoped lang='scss'>
@import "./../../assets/styles/base.scss";
.stars {
  margin-top: 40px;
  width: 100%;
  height: 330px;
  h2 {
    @include commonH;
  }
  .swiperThird {
    height: 230px;
    .swiper-slide {
      height: 100%;
      width: 486px !important;
      padding: 0 24px;
      box-sizing: border-box;
      border: 1px solid #eee;
      box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.05);
      border-radius: 8px;
    }
    .starTop {
      border-bottom: 1px solid #eee;
      height: 156px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      img {
        width: 120px;
        height: 120px;
        border-radius: 50%;
      }
      div {
        flex: 1;
        height: 100%;
        font-size: 32px;
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;

        h2 {
          color: #111;
        }
        p {
          margin-top: 10px;
          font-size: 26px;
          color: #888;
        }
      }
    }
    .comming {
      height: 76px;
      line-height: 76px;
      text-align: left;
      font-size: 32px;
    }
  }
  .focus {
    width: 134px;
    height: 70px;
    line-height: 70px;
    text-align: center;
    font-size: 26px;
    padding: 0 24px;
    border-radius: 44px;
    color: #ff1268;
    border: 2px solid #ff1268;
    box-sizing: border-box;
  }
  .comming {
    width: 100%;
    font-size: 32px;
    height: 76px;
    line-height: 76px;
    span {
      float: right;
    }
  }
}
// }
</style>
