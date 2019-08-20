<template>
  <div class="more-content">
    <ul class="choose">
      <li>
        全部分类
        <i class="iconfont icon-shixi"></i>
      </li>
      <li>
        全部时间
        <i class="iconfont icon-shixi"></i>
      </li>
      <li class="active">推荐排序</li>
      <li>距离最近</li>
    </ul>

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
export default {
  props: {
    listA: Array
  }
}
</script>
<style scoped lang='scss'>
@import "./../../assets/styles/base.scss";
.more-content {
  .choose {
    width: 100%;
    height: 84px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
    color: #111;
    li {
      i {
        color: #ddd;
        font-size: 12px;
        vertical-align: middle;
      }
      &.active {
        color: #ff1268;
      }
    }
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
