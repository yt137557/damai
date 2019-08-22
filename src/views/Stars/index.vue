<template>
  <div class="Z-stars">
    <template v-for="(item,index) in starsList" v-if="index===xxx">
      <div class="star-top">
        <img class="tu1" :src="item.img1" alt />
        <img class="touxiang" :src="item.img2" alt />
        <img class="guanzhu" src="../../img/下载 (1).png" @click="getguanzhu" />
      </div>
      <p>
        <span>{{item.name}}</span>
        <img class="big-v" src="../../img/下载.png" />
      </p>
      <div class="fans" :key="item.id">{{item.fensnum}}粉丝</div>
    </template>

    <template v-for="obj in jsList" v-if="obj.id===xxx" @click="tz">
      <div class="star-buttom">
        <div class="jies">
          <div class="left">
            <span class="yt">{{obj.week}}</span>
            <span>{{obj.day}}</span>
            <span class="yt">{{obj.month}}</span>
          </div>
          <div class="right">
            <dl>
              <dt>{{obj.main}}</dt>
              <dd>{{obj.dizhi}}</dd>
            </dl>
          </div>
        </div>
      </div>
    </template>
    <div class="di"></div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'
export default {
  name: 'Stars',
  data () {
    return {
      ids: Number,
      xxx: parseInt(this.$route.params.goid)
    }
  },
  methods: {
    ...mapActions('Stars', ['getStarsList', 'getJsList']),
    tz () {
      this.$router.push({ path: '/' })
    },
    getguanzhu () {
      this.$router.push({ path: '/login' })
    }
  },
  computed: {
    ...mapState('Stars', ['starsList', 'jsList'])
  },
  created () {
    this.getStarsList()
    this.getJsList()
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
