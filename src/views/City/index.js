import 'vant/lib/index.css'
import request from '../../utils/axios'
import { mapState, mapMutations } from 'vuex'
import Vue from 'vue'
import { Button } from 'vant'
import router from '../../router'
Vue.use(Button)

export default {
  name: 'login',
  data() {
    return {}
  },

  computed: {
    ...mapState('city', ['data', 'isCity'])
  },
  methods: {
    ...mapMutations('city', ['getData', 'getCity']),
    qingqiu() {
      request
        .get('http://localhost:3000/city')
        .then(res => {
          this.getData(res.data.areas)
        })
        .catch(err => {
          console.log(err)
        })
    },
    tijiao(eve) {
      this.getCity({ city: eve.target.innerText })
      console.log(this.isCity)
      // router.push('/')
    }
  },
  created() {
    this.qingqiu()
  }
}
