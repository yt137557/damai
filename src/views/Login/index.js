import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
import { Field, Button, CellGroup, Toast } from 'vant'
import 'vant/lib/index.css'
import request from '../../utils/axios'

Vue.use(Field)
  .use(Button)
  .use(CellGroup)
  .use(Toast)

export default {
  name: 'login',
  data() {
    return {
      username: '',
      zhanghao: false,
      password1: '',
      mima: false
    }
  },
  computed: {
    ...mapState('login', ['login', 'logining'])
  },
  methods: {
    ...mapMutations('login', ['setlogining']),
    qingqiu() {
      request
        .get(`http://localhost:3000/liu/${this.username}`)
        .then(res => {
          if (this.password1 === res.password) {
            Toast('登录成功')
            this.setlogining({ id: this.username })
            window.login = this.login
            // console.log(this.$route)
            // console.log(this.$router)
            // console.log(this)
            let toPath = this.$route.query.redirect || '/'
            this.$router.replace(toPath)
          } else {
            Toast('密码错误')
          }
        })
        .catch(err => {
          Toast('账号错误')
          console.log(err)
        })
    },
    chance() {
      if (this.username == '' || isNaN(this.username)) {
        this.$toast('账号输入不合规定')
      } else {
        this.qingqiu()
      }
    }
  }
}
