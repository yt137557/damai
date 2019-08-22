<template>
  <div class="ticket-page">
    <div class="ticket-bar">
      <van-tabs swipeable v-model="active">
        <van-tab v-for="item in categoryList" :key="item.value" :title="item.text"></van-tab>
      </van-tabs>
    </div>

    <div class="ticket-bottom">
      <TicketBanner></TicketBanner>
      <!-- 数据列表请求 -->
      <ul class="cont-list" v-if="musicList.length > 0? true:''">
        <router-link to="/buy" tag="li" v-for="item in musicList" :key="item.id">
          <img :src="item.verticalPic" />
          <div class="info">
            <h3>{{item.name}}</h3>
            <p class="location">{{item.logicAddress}}/{{item.showTime}}/{{item.venueName}}</p>
            <p class="price">￥{{item.priceStr}}</p>
          </div>
        </router-link>
      </ul>
      <van-loading size="24px" v-else vertical>加载中...</van-loading>
    </div>
  </div>
</template>
<script>
import TicketBanner from "./../../components/TicketBanner"
import { mapState, mapMutations } from "vuex"

export default {
  data() {
    return {
      categoryList: [
        { text: "全部", value: 0 },
        { text: "演唱会", value: 1 },
        { text: "话剧歌剧", value: 2 },
        { text: " 音乐会", value: 3 },
        { text: "体育比赛", value: 4 },
        { text: "曲苑杂坛", value: 5 },
        { text: " 儿童亲子", value: 6 },
        { text: "展览休闲", value: 7 },
        { text: "旅游展览", value: 8 },
        { text: "舞蹈芭蕾", value: 9 },
        { text: "二次元", value: 10 }
      ],
      active: 0
    }
  },
  components: {
    TicketBanner
  },
  computed: {
    ...mapState("home", ["musicList"])
  },
  methods: {
    ...mapMutations("home", ["getBannerlist"]),
    fn1() {
      console.log(this.$route)
      this.active = parseInt(this.$route.params.goodid)
    }
  },
  mounted() {
    this.getBannerlist()
    this.fn1()
  }
}
</script>
<style  lang ="scss">
.ticket-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.ticket-bottom {
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}
.cont-list {
  flex: 1;
  overflow-y: auto;
}

.van-tabs__wrap {
  color: #111;
  height: 90px !important;
}
.van-tab {
  font-size: 30px;
  line-height: 90px;
}

.van-dropdown-menu {
  height: 70px;
  background: #eee;
  margin-top: 20px;
}
.van-dropdown-menu__title {
  font-size: 30px;
  line-height: 80px;
}
.van-cell {
  padding: 18px 16px;
  font-size: 26px;
  line-height: 30px;
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
</style>
