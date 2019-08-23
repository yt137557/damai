<template>
  <div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" title="境外" />
      <van-dropdown-item title="全部时间" ref="item"></van-dropdown-item>
      <van-dropdown-item v-model="value" title="推荐排序" :options="option" />
      <van-dropdown-item v-model="value" title="距离最近" disabled />
    </van-dropdown-menu>
  </div>
</template>
<script>
<<<<<<< HEAD
=======
import Vue from 'vue'
import {
  Tab,
  Tabs,
  Sticky,
  Popup,
  Button,
  Toast,
  Dialog,
  DropdownMenu,
  DropdownItem
} from 'vant'

Vue.use(Tab)
  .use(Tabs)
  .use(Sticky)
  .use(Popup)
  .use(Button)
  .use(Dialog)
  .use(DropdownMenu)
  .use(DropdownItem)
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
export default {
  data () {
    return {
      value: 0,
      switch1: false,
      switch2: false,
      option: [
        { text: '推荐排序', value: 0 },
        { text: '最新上架', value: 1 },
        { text: '最新开场', value: 2 }
      ]
    }
  },
  methods: {
    fn1 (a) {
      this.$dialog.alert({ message: '请开启定位服务' })
    }
  }
}
</script>
<style lang="scss">
// .choose {
//   width: 100%;
//   height: 80px;
//   margin-top: 20px;
//   display: flex;
//   justify-content: space-around;
//   align-items: center;
//   background: #f5f5f5;

//   .van-dropdown-menu__item {
//     position: absolute;
//   }

//   .van-button__text {
//     font-size: 30px;
//     color: red;
//   }

//   .active {
//     width: 122px;
//     height: 50px;
//   }
//}
</style>
