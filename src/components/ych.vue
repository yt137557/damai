<template>
  <div>
    <router-link
      :to="'/stars/' + index"
      class="xq"
      v-for="(item,index) in mxList"
      v-if="item.name===dex"
      :key="item.id"
    >
      <div class="left">
        <img class="touxiang" :src="item.img" alt />
        <img class="da-v" src="../img/下载.png" alt />
      </div>
      <div class="right">
        <span>{{item.name}}</span>
        <p>{{item.main}}</p>
      </div>
      <span class="jt">></span>
    </router-link>
  </div>
</template>

<script>
import request from '../utils/axios'
import { mapState } from 'vuex'
export default {
  name: 'ych',
  data() {
    return {
      mxList: []
    }
  },
  computed: {
    ...mapState('Search', ['hisList', 'wordList', 'dex'])
  },
  methods: {
    getmxList() {
      request
        .get('http://localhost:3000/zjl')
        .then(res => {
          this.mxList.push(...res.data)
          // console.log(this.mxList[0].name === this.dex)
        })
        .catch(error => {
          console.log(2)
        })
    }
  },
  created() {
    this.getmxList()
  }
}
</script>

<style lang="scss" scoped>
.xq {
  padding: 20px;
  overflow: hidden;
  width: 89%;
  display: flex;
  .left {
    // width: 100%;
    position: relative;
    .touxiang {
      width: 50px;
      height: 50px;
      border-radius: 51%;
    }
    .da-v {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 34px;
      left: 34px;
    }
  }
  .right {
    margin-left: 20px;
    width: 100%;
    p {
      width: 100%;
      margin-top: 15px;
    }
    span {
      font-size: 14px;
      color: #111;
      font-weight: 700;
    }
  }
  .jt {
    margin-top: 15px;
    font-size: 20px;
    color: #cccccc;
  }
}
</style>
