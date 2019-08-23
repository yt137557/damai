<template>
  <div class="search_main">
    <div class="history" v-if="hisList.length>0">
      <div class="top">
        <span>搜索记录</span>
        <i>X</i>
      </div>

      <ul>
        <li v-for="item in hisList" :key="item.name">
          <router-link to="#">{{item}}</router-link>
        </li>
      </ul>
    </div>
    <p>热搜</p>
    <ul>
      <li v-for="(item,index) in wordList" :key="item.id" @click="getHisList(index)" ref="wordlL">
        <router-link to="#">{{item.word}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Search from '../../store/modules/search'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'ssbq',
  computed: {
    ...mapState('Search', ['wordList', 'hisList'])
  },
  methods: {
    ...mapActions('Search', ['getWordList']),
    getHisList (index) {
      let retult = []
      retult += this.$refs.wordlL[index].innerText
      // console.log(this.$refs)
      this.hisList.unshift(retult)
      if (this.hisList.length > 10) {
        // console.log(111)
        this.hisList.pop()
      }
    }
  },
  created () {
    this.getWordList()
  }
}
</script>

<style lang="scss">
.Z-stars {
  width: 100%;
  .star-top {
    position: relative;
    .tu1 {
      width: 100%;
      height: 180px;
    }
    .touxiang {
      width: 109px;
      height: 109px;
      position: absolute;
      top: 70%;
      left: 35%;
      border-radius: 51%;
    }
    .guanzhu {
      width: 36px;
      height: 36px;
      position: absolute;
      top: 110%;
      left: 53%;
    }
  }
  p {
    vertical-align: bottom;
    text-align: center;
    width: 100%;
    margin-top: 60px;
    font-size: 20px;
    .big-v {
      width: 18px;
      height: 18px;
      margin-left: 6px;
    }
  }
  .fans {
    width: 100%;
    margin-top: 10px;
    text-align: center;
    padding-bottom: 30px;
    border-bottom: 12px solid #f5f5f5;
  }
  .star-buttom {
    width: 100%;
    margin-top: 30px;
    overflow: hidden;
    padding-bottom: 25px;
    border-bottom: 1px solid #eee;
    .jies {
      padding: 0 25px;
    }
    .left {
      float: left;
      display: flex;
      flex-direction: column;
      text-align: center;
      span {
        margin: 2px 0;
        font-size: 22px;
        color: #111111;
      }
      .yt {
        font-size: 12px;
        color: #888;
      }
    }
    .right {
      margin-left: 20px;
      float: left;
      dt {
        font-size: 16px;
        color: #111111;
        margin-top: 10px;
      }
      dd {
        font-size: 14px;
        margin-top: 15px;
        color: #888;
      }
    }
  }
  .di {
    width: 100%;
    height: 40px;
  }
}
</style>
