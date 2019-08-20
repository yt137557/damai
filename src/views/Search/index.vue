<template>
  <div class="search">
    <form action="/">
      <van-search placeholder="请输入搜索关键词" show-action shape="round" class="search_inp" @cancel="tiaozhuan" />
    </form>
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
  </div>
</template>

<script>
import "vant/lib/index.css"
import Search from "../../store/modules/search"
import { mapActions, mapState} from "vuex"
export default {
  name: "Search",
  components: {
    Search
  },
  computed: {
    ...mapState("Search", ["wordList", "hisList"]),
  },
  methods: {
    ...mapActions("Search", ["getWordList"]),
    getHisList(index) {
      let retult = []
      retult += this.$refs.wordlL[index].innerText
      // console.log(this.$refs)
      this.hisList.unshift(retult)
      if (this.hisList.length > 10) {
        // console.log(111)
        this.hisList.pop()
      }
    },
    tiaozhuan(){
      this.$router.push({path:'/'});
    }
  },
  created() {
    this.getWordList()
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
