<template>
  <div class="chengshi">
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
      <van-button
        class="address-box-2"
        :key="ele.damaiId"
        v-for="ele in item.cities"
        @click="tijiao"
      >{{ele.name}}</van-button>
    </template>
  </div>
</template>

<script src="./index.js"></script>

<style lang="scss">
@import '../../assets/styles/base.scss';
html,
body {
  font-size: 28px;
  color: #666;
}
.chengshi {
  .city-title {
    height: 60px;
    line-height: 60px;
    background: #f2f3f4;
    box-sizing: border-box;
    padding-left: 24px;
  }
  .city-address {
    color: #666;
    height: 60px;
    line-height: 60px;
    width: 30%;
    margin-bottom: 20px;
    margin-left: 2.5%;
  }
  .address-box {
    box-sizing: border-box;
    padding: 20px;
    padding-bottom: 0;
    flex-wrap: wrap;
  }
  .address-box-2 {
    height: 80px;
    width: 100%;
    line-height: 80px;
    padding-left: 28px;
    text-align: left;
    border-top: none;
  }
}
</style>
