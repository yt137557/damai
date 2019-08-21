<template>
  <div class="more-content">
    <van-sticky :offset-top="100">
      <van-tabs
        v-model="active"
        @disabled="onClickDisabled"
        type="border:none"
        title-active-color="#ff1268"
        @change="fn1"
      >
        <van-tab>
          <div slot="title">
            全部分类
            <i class="iconfont icon-shixi"></i>
          </div>
        </van-tab>
        <van-tab title="全部时间">
          <div slot="title">
            全部时间
            <i class="iconfont icon-shixi"></i>
          </div>
        </van-tab>
        <van-tab title="推荐排序"></van-tab>
        <van-tab title="距离最近" disabled></van-tab>
      </van-tabs>
    </van-sticky>
    <van-popup v-model="show">内容</van-popup>
    <ul class="cont-list">
      <li v-for="item in listA" :key="item.id">
        <img :src="item.verticalPic" />
        <div class="info">
          <h3>{{item.name}}</h3>
          <p class="location">{{item.logicAddress}}/{{item.showTime}}/{{item.venueName}}</p>
          <p class="price">￥{{item.priceStr}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import Vue from "vue"
import { Tab, Tabs, Sticky, Popup } from "vant"

Vue.use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Popup)
export default {
  props: {
    listA: Array,
    fixOne: Boolean
  },
  data() {
    return {
      active: 2,
      show: false
    }
  },
  methods: {
    onClickDisabled(name, title) {
      this.$toast("请先打开定位服务")
    },
    fn1() {
      this.show = true
    }
  },
  mounted() {}
}
</script>
<style  lang='scss'>
@import "./../../assets/styles/base.scss";
.more-content {
  // .choose {
  //   width: 100%;
  //   // height: 90px;
  //   display: flex;
  //   justify-content: space-around;
  //   align-items: center;
  //   font-size: 30px;
  //   color: #111;
  //
  // }
  .van-tabs__nav .van-tab span {
    line-height: 90px !important;
  }

  .cont-list li {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    padding: 0 30px;
    margin: 48px 0 70px 0;
    height: 240px;
    img {
      height: 100%;
    }
    .info {
      width: 100%;
      height: 100%;
      flex: 1;
      margin-left: 20px;
      position: relative;
      h3 {
        font-size: 30px;
        line-height: 38px;
        color: #111;
        font-weight: 700;
      }
      p {
        width: 100%;
        line-height: 36px;
        font-size: 20px;
        color: #aaa;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        overflow: hidden;
      }
      .price {
        position: absolute;
        bottom: 0;
        left: 0;
        color: #ff1268;
      }
    }
  }
}
</style>
