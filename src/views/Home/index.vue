<template>
  <div class="home-page">
    <!-- 首页的头部bar -->
    <div class="header">
      <router-link :to="'/city'" class="location">
        <van-icon name="location" size="34px" />
        {{isCity}}
      </router-link>

      <router-link :to="'/search'" tag="div" class="search">
        <van-icon name="search" size="46px" />
        <span>搜索明星、演出比赛、场馆</span>
      </router-link>
      <router-link :to="'/sign-up'">
        <van-icon name="contact" size="54px" color="#000" />
      </router-link>
    </div>
    <Content></Content>
  </div>
</template>

<script>
import Content from './content'
import { mapState } from 'vuex'
export default {
  components: {
    Content
  },
  computed: {
    ...mapState('city', ['isCity'])
  }
}
</script>
<style  lang='scss'>
.home-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    width: 100%;
    display: flex;
    height: 104px;
    align-items: center;
    box-sizing: border-box;
    padding: 0 16px;
    background-color: #f5f5f5;
  }
  .location {
    margin-right: 20px;
    font-size: 34px;
    color: #222;
    vertical-align: middle;
    .van-icon-location {
      top: 4px;
      margin-right: 6px;
    }
  }
  .search {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 68px;
    background: #fff;
    font-size: 30px;
    border-radius: 40px;
    color: #999;
    margin-right: 20px;
  }
}
.content-page {
  flex: 1;
  overflow: hidden;
  overflow-y: auto;
}
</style>
