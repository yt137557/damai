<template>
  <div>
    <van-tabs swipeable>
      <van-tab v-for="item in categoryList" :key="item" :title="item">
        <TicketBanner></TicketBanner>
      </van-tab>
    </van-tabs>
    <!-- <router-view></router-view> -->
  </div>
</template>
<script>
import Vue from "vue"
import { Tab, Tabs, Sticky } from "vant"
import TicketBanner from "./../../components/TicketBanner"
Vue.use(Tab)
  .use(Tabs)
  .use(Sticky)

export default {
  data() {
    return {
      categoryList: [
        "全部",
        "演唱会",
        "话剧歌剧",
        "音乐会",
        "曲苑杂坛",
        "舞蹈芭蕾",
        "体育比赛",
        "儿童亲子",
        "展览休闲",
        "二次元",
        "旅游展览"
      ]
    }
  },
  components: {
    TicketBanner
  }
}
</script>
<style  lang ="scss">
.van-tabs__wrap {
  color: #111;
  height: 90px !important;
}
.van-tab {
  font-size: 30px;
  line-height: 90px;
}
</style>
