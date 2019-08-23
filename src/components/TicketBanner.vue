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

