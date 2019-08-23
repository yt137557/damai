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
      <li v-for="item in week" :key="item.endDate" @click="getDateInfo(item.endDate)" :class='{active:curLi ===item.endDate}' >{{item.today}}</li>
    </ul>
    <div class="swiper-container swiperTwo">
      <div class="swiper-wrapper">
        <router-link
        
          :to="'/buy/'+item.id"
          tag="div"
          class="swiper-slide"
          v-for="item in lista= result ? tempArr : list "
          :key="item.index"
        >
          <img :src="item.verticalPic" />
          <p>{{item.venueName}}</p>
          <p class="price">￥{{item.priceLow}}起</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  props: {
    list: Array,
    all: Array
  },
  data () {
    return {
<<<<<<< HEAD
      week: [],
      xingqi: ["周日", "周一", "周二", "周四", "周五", "周六"],
      tempArr: [],
      curLi:'2019.8.23'
    }
  },
  computed:{
    result(){
      if(this.tempArr.length===0){
        return false;
      }else{
        return true
      }
    }
  },
  methods: {
    initS() {
      let mySwiper = new Swiper(".swiperTwo", {
=======
      week: ['今天', '明天']
    }
  },
  methods: {
    initS () {
      var mySwiper = new Swiper('.swiperTwo', {
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
        slidesOffsetBefore: 40,
        slidesPerView: 2.3
      })
    },
<<<<<<< HEAD
    getWeek() {
      this.week = []
      let date = new Date()
      let month = date.getMonth() + 1
      month = month > 10 ? month : "0" + month
      let tian = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
      let fullDate = `${date.getFullYear()}.${month}.${date.getDate()}`
      this.week = [
        { today: "今天", endDate: fullDate },
        {
          today: "明天",
          endDate: `${date.getFullYear()}.${month}.${tian + 1}`
=======
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
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
        }
      ]
      let obj = {}
      for (let j = 2; j < 7; j++) {
        let index = (date.getDay() + j) % 7
        obj = {
          today: this.xingqi[index],
          endDate: `${date.getFullYear()}.${month}.${tian + j}`
        }
        this.week.push(obj)
      }
    },
    getDateInfo(payload) {
      this.curLi=payload;
      this.tempArr = this.all.filter(function(item) {
        return item.showTime.indexOf(payload) > -1
      })
    }
    
  },
  mounted () {
    this.getWeek()
  },
<<<<<<< HEAD
  updated() {
=======

  updated () {
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
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
    & .active {
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
