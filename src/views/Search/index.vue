<template>
  <div class="search">
    <form action="/">
      <van-search
        placeholder="请输入搜索关键词"
        show-action
        shape="round"
        class="search_inp"
        @cancel="tiaozhuan"
      />
    </form>
    <div class="search_main" v-if="xuanzhong">
      <div class="history" v-if="hisList.length>0">
        <div class="top">
          <span>搜索记录</span>
          <i @click="sethisList">X</i>
        </div>
        <ul>
          <li v-for="item in hisList" :key="Math.random()" @click="yincang">
            <span>{{item}}</span>
          </li>
        </ul>
      </div>

      <p>热搜</p>
      <ul>
        <li v-for="(item,index) in wordList" :key="item.id" @click="getHisList(index)" ref="wordlL">
          <!-- <router-link to="#">{{item.word}}</router-link> -->
          <span>{{item.word}}</span>
        </li>
      </ul>
    </div>
    <Ych v-else></Ych>
  </div>
</template>

<script>
import 'vant/lib/index.css'
import Search from '../../store/modules/search'
import { mapActions, mapState, mapMutations } from 'vuex'
import Ych from '../../components/ych'
export default {
  name: 'Search',
  data() {
    return {
      xuanzhong: true
    }
  },
  components: {
    Search,
    Ych
  },
  computed: {
    ...mapState('Search', ['wordList', 'hisList', 'dex'])
  },
  methods: {
    ...mapActions('Search', ['getWordList']),
    ...mapMutations('Search', ['sethisList', 'setindex', 'sethisList1']),

    getHisList(index) {
      let retult = []
      // this.xuanzhong = false
      retult += this.$refs.wordlL[index].innerText
      this.hisList.unshift(retult)
      window.localStorage.setItem('xxx', JSON.stringify(this.hisList))
      if (this.hisList.length > 10) {
        this.hisList.pop()
      }
      this.yincang(event)
    },
    tiaozhuan() {
      this.$router.push({ path: '/' })
    },
    yincang(event) {
      this.xuanzhong = false
      let index = event.target.innerText
      console.log(event.target)
      if (index == this.dex) {
        return
      } else {
        this.setindex({ dex: index })
      }
      // console.log(this.dex)
    }
  },
  created() {
    this.getWordList()
    let aaa = window.localStorage.getItem('xxx')
    this.sethisList1(JSON.parse(aaa))
  }
}
</script>

<style lang="scss">
.search {
  width: 100%;
  .search_main {
    width: 339px;
    margin: 0 auto;
    padding-bottom: 20px;
  }
  p {
    width: 100%;
    color: #999999;
    font-size: 12px;
  }
  ul {
    display: flex;
    font-size: 12px;
    color: #222222;
    flex-wrap: wrap;
    li {
      border: 1px solid #e7e7e7;
      border-radius: 20px;
      margin: 5px 15px;
      padding: 6px;
    }
  }
  .top {
    width: 100%;
    font-size: 12px;
    overflow: hidden;
    span {
      color: #999999;
      float: left;
    }
    i {
      float: right;
    }
  }
}
</style>
