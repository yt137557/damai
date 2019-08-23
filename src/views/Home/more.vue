<template>
  <div class="more-content">
    <!-- tab 切换和禁用 -->
    <van-sticky :offset-top="100">
      <van-tabs
        v-model="active"
        @disabled="onClickDisabled"
        type="border:none"
        title-active-color="#ff1268"
        @change="getBox"
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
    <!-- 数据列表请求 -->
    <ul class="cont-list">
      <router-link :to="'/buy/'+item.id" tag="li" v-for="item in listA" :key="item.id" chooseIfno>
        <img :src="item.verticalPic" />
        <div class="info">
          <h3>{{item.name}}</h3>
          <p class="location">{{item.logicAddress}}/{{item.showTime}}/{{item.venueName}}</p>
          <p class="price">￥{{item.priceStr}}</p>
        </div>
      </router-link>
    </ul>
    <!-- 弹出下拉框 -->
    <van-popup v-model="show" position="top">
      <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="推荐排序" @open="onConfirm" />
        <van-dropdown-item disabled title="距离最近" />
      </van-dropdown-menu>
    </van-popup>
  </div>
</template>
<script>
export default {
  props: {
    listA: Array,
    fixOne: Boolean
  },
  data() {
    return {
      active: 2,
      show: false,
      value1: 1,
      option1: [
        { text: '全部', value: 0 },
        { text: '演唱会', value: 1 },
        { text: '话剧歌剧', value: 2 },
        { text: ' 音乐会', value: 3 },
        { text: '曲苑杂坛', value: 4 },
        { text: '舞蹈芭蕾', value: 5 },
        { text: '体育比赛', value: 6 },
        { text: ' 儿童亲子', value: 7 },
        { text: '展览休闲', value: 8 },
        { text: '二次元', value: 9 },
        { text: '旅游展览', value: 10 }
      ],
      value: 0,
      option: [
        { text: '全部时间', value: 0 },
        { text: '今天', value: 1 },
        { text: '明天', value: 2 },
        { text: '本周末', value: 3 },
        { text: '一周内', value: 4 },
        { text: '一月内', value: 5 }
      ]
    }
  },
  methods: {
    onClickDisabled(name, title) {
      this.$toast('请先打开定位服务')
    },
    getBox() {
      this.show = true
    },
    onConfirm() {
      console.log(1)
      this.show = false
    }
  }
}
</script>
<style  lang='scss'>
@import './../../assets/styles/base.scss';
.more-content {
  .van-dropdown-menu {
    height: 80px;
  }
  .van-dropdown-item__content {
    height: 220px;
  }
  .van-cell {
    padding: 16px 16px;
    color: #323233;
    font-size: 26px;
  }
  .van-dropdown-menu__title {
    padding: 14px 8px;
    font-size: 29px;
    line-height: 27px;
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
