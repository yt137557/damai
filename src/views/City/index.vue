<template>
  <div>
    <p class="city-title">定位城市</p>
    <div class="address-box">
      <van-button type="default" class="city-address">定位失败</van-button>
    </div>
    <p class="city-title">热门城市/区域</p>
    <div class="address-box">
      <van-button
        type="default"
        class="city-address"
        v-for="item in  data&&data[0].cities"
        :key="item.damaiId"
        @click="tijiao"
      >{{item.name}}</van-button>
    </div>
    <template v-for="item in data&&data.slice(1)">
      <p class="city-title" :key="item.prefix">{{item.prefix.toUpperCase()}}</p>
      <div
        class="address-box-2"
        :key="ele.damaiId"
        v-for="ele in item.cities"
        @click="tijiao"
      >{{ele.name}}</div>
    </template>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import '../../assets/styles/base.scss';
html,
body {
  font-size: 14px;
  color: #666;
}
.city-title {
  height: 30px;
  line-height: 30px;
  background: #f2f3f4;
  box-sizing: border-box;
  padding-left: 12px;
}
.city-address {
  color: #666;
  height: 30px;
  line-height: 30px;
  width: 30%;
  margin-bottom: 10px;
  margin-left: 2.5%;
}
.address-box {
  box-sizing: border-box;
  padding: 10px;
  padding-bottom: 0;
  flex-wrap: wrap;
}
.address-box-2 {
  height: 40px;
  line-height: 40px;
  padding-left: 14px;
}
</style>
