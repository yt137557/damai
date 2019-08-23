<template>
  <div class="buy-page">
    <div class="buyHead">
      <img
          :src="personalInfo&&personalInfo.verticalPic"

        />
    </div>
    <div class="buyHeader">
      <div class="insert">
        <img
          :src="personalInfo&&personalInfo.verticalPic"
        />
          <van-loading size="24px" v-if='showloading' vertical>加载中...</van-loading>
        <div class="instr">
          <h3>{{personalInfo.name}}</h3>
          <p>{{personalInfo.logicAddress}}</p>
          <p class="price-range">
            <strong>￥{{personalInfo.formattedPriceStr}}</strong>元
          </p>
        </div>
      </div>
    </div>

    <div class="bar-box">
      <p class="bar">
        <span v-for="item in 3" :key="item">
          <i class="iconfont icon-x"></i>不支持选座
        </span>
      </p>
      <div class="date-loca">
        <div class="row">
          <p class="time">
           {{personalInfo.showTime}}
            <i class="iconfont icon-arrow-right-copy-copy"></i>
          </p>
          <p>活动时间以现场为主</p>
        </div>
        <div class="cor">
          <div>
            <p class="time">{{personalInfo.logicAddress}}|{{personalInfo.venueName}} </p>
            <p>金田路与滨河大道交叉口西北向</p>
          </div>
          <span>
            <i class="iconfont icon-weizhi"></i>
          </span>
        </div>
      </div>
      <p class="bar">
        <span v-for="item in 3" :key="item">
          <i class="iconfont icon-x"></i>不支持选座
        </span>
      </p>
    </div>
    <ul class="check-tab">
      <li v-for="item in 3" :key="item">详情</li>
    </ul>

    <div class="detail-info">
      <h2>项目结束</h2>
      <div :class="{'hiddenbox':showMore?'hiddenbox':''}">
        <h4>票价说明</h4>
        <p>小组赛（17-19/9）</p>
        <p>一般门票Standard Ticket 45元(MOP50)</p>
        <p>「东亚超级联赛 - 非凡 12」篮球赛是获得国际篮球总会认证的篮球赛，赛事规模逐渐扩大，中国男子篮球职业联赛(CBA) 的辽宁飞豹、深圳领航者和浙江广厦猛狮，日本B.联赛(B.LEAGUE)球队包括千叶喷射机、新泻天鹅、琉球黄金帝王和宇都宫王道，韩国篮球联赛(KBL)的全州KCC 宙斯盾和首尔SK骑士，以及来自菲律宾职业篮球联赛(PBA)的黑水精英、生力啤酒人和菲律宾电信，12支东亚区篮球俱乐部将于今夏云集澳门竞逐皇者宝座。</P>
        <h4>温馨提示</h4>
        <p>因该项目为境外项目，基于为您提供票务服务所必须，我们可能会将您在购票页面提供的个人信息（姓名、性别、电话、身份证、港澳台通行证或护照号码）中的全部或部分提交给我们位于香港的关联公司大麦娱乐有限公司（"大麦"）及境外项目主办方，用于现场验票、安检及身份确认等。这些信息可能会存储在大麦所在的香港地区和项目所在国家/地区。我们会确保您授权共享的个人信息仅为给您提供票务服务的目的使用，并会与信息接收方签署严格的数据保护协议，要求他们按照适用的法律规定保护您的个人信息。</p>
    </div>
     <div class='lookmore' @click="showinfo" v-show='showMore'>查看更多</div>
    </div>

  </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      showMore: true,
      personalInfo: {},
      showloading: false
    }
  },
  computed: {
    ...mapState('home', ['musicList'])
  },
  methods: {
    ...mapMutations('home', ['getBannerlist']),
    showinfo () {
      this.showMore = false
    },
    fn2 () {
      if (this.musicList.length === 0) {
        this.showloading = true
      } else {
        this.personalInfo = this.musicList.find(item => item.id == this.$route.params.showId)
        console.log(this.personalInfo)
      }
    }
  },
  mounted () {
    this.getBannerlist()
    console.log(this.musicList)
    this.fn2()
  },
  updated () {

  }
}
</script>>
<style lang='scss'>
.buy-page{
  position: relative;
}
.buyHeader {
  height: 430px;
  box-sizing: border-box;
  padding: 60px 0 0 40px;
  border-bottom: 1px solid #e7e7e7;
  background: rgba(126, 190, 200,0.2);
}
.buyHead{
  position: absolute;
  top: 0;
  z-index: -1;
  -webkit-filter: blur(5px);
  filter: blur(50px);
  width: 100%;
  opacity: .9;
  img{
    height: 430px;
   width: 100%;
  }

}
.insert {
  height: 320px;
  padding-right: 40px;
  display: flex;
  img {
    width: 230px;
    height: 320px;
    margin-right: 30px;
  }
  .instr {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 32px;
  }
  h3 {
    line-height: 50px;
  }
  p {
    font-size: 24px;
  }
  .price-range strong {
    font-size: 40px;
    font-weight: 700;
    color: #ff1268;
  }
}

.bar-box {
  width: 100%;
  .bar {
    // width: 100%;
    padding: 5px;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    background: #f8f8f8;
    border-radius: 20px 10px 0 0;
    i {
      color: #ff2d79;
      font-size: 34px;
      margin: 10px;
    }
  }
  .date-loca {
    width: 100%;
    box-sizing: border-box;
    padding: 30px;
    > div {
      width: 100%;
      height: 140px;
    }
    .cor {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-top: 1px solid #ccc;
      span {
        display: flex;
        width: 150px;
        height: 70%;
        justify-content: center;
        align-items: center;
        border-left: 1px solid #ccc;
      }
    }
    p {
      line-height: 40px;
      font-size: 26px;
    }
    .time {
      font-size: 36px;
      font-weight: 700;
      margin-bottom: 8px;
      flex: 1;
    }
  }
}
.check-tab {
  width: 100%;
  height: 104px;
  line-height: 104px;
  display: flex;
  font-size: 34px;
  color: #111;
  justify-content: space-around;
  margin-top: 20px;
  box-shadow: 0px 10px 20px 0px #eee; /*下边阴影  黄色*/
}
.hiddenbox{
  height: 410px;
  overflow: hidden;

}
.detail-info {
  // height: 635px;
  overflow: hidden;
  padding: 0 20px;
  position: relative;
  opacity: .7;
  .lookmore{
    position: absolute;
    height: 100px;
    line-height: 100px;
    width: 100%;
    color: #ff2d79;
    font-size: 42px;
    text-align: center;
    background: rgba(255, 255, 255,0.9 );
    bottom: 0px;
    left: 0;
  }
  h2 {
    line-height: 130px;
    height: 130px;
    font-size: 46px;
    color: #000;
    font-weight: 700;

  }
  h4{
    font-weight: 800;
    color: #000;
    font-size: 30px;
    line-height: 40px;
  }
  p{
    line-height: 2;
        color: #888;
    font-size: 24px;
  }
}
</style>
