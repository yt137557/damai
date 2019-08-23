<template>
  <div class="recent-perform">
    <h2>
      近期演出
      <span>
        演出日历
        <i class="iconfont icon-arrow-right-copy-copy"></i>
      </span>
    </h2>
    <ul class="week">
      <li v-for="item in week" :key="item.index">{{item}}</li>
    </ul>
    <div class="swiper-container swiperTwo">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="item in list" :key="item.index">
          <img :src="item.verticalPic" />
          <p>{{item.venueName}}</p>
          <p class="price">￥{{item.priceLow}}起</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: {
    list: Array
  },
  data () {
    return {
      week: ['今天', '明天']
    }
  },
  methods: {
    initS () {
      var mySwiper = new Swiper('.swiperTwo', {
        slidesOffsetBefore: 40,
        slidesPerView: 2.3
      })
    },
    getWeek () {
      let date = new Date()
      date = date.getDay() + 2
      for (let i = date; i < date + 5; i++) {
        let yushu = i % 7
        if (yushu === 1) {
          this.week.push('周一')
        } else if (yushu === 2) {
          this.week.push('周二')
        } else if (yushu === 3) {
          this.week.push('周三')
        } else if (yushu === 4) {
          this.week.push('周四')
        } else if (yushu === 5) {
          this.week.push('周五')
        } else if (yushu === 6) {
          this.week.push('周六')
        } else if (yushu === 0) {
          this.week.push('周日')
        }
      }
    }
  },
  mounted () {
    this.getWeek()
  },

  updated () {
    if (this.list.length > 0) {
      this.initS()
    }
  }
}
</script>
<style scoped lang='scss'>
@import "./../../assets/styles/base.scss";
.recent-perform {
  height: 660px;
  h2 {
    @include commonH;
    .van-icon-arrow {
      top: 2px;
    }
  }
  .week {
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    margin: 0 48px 34px;
    color: #999;
    font-size: 30px;
    > li:first-child {
      color: #111;
    }
  }
  .swiperTwo {
    height: 558px;
    img {
      width: 300px;
      height: 438px;
      border-radius: 6px;
    }
    p {
      width: 300px;
      margin-top: 10px;
      line-height: 1.5;
      color: #000;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 30px;
    }
    .price {
      font-weight: 400;
    }
  }
}
</style>
