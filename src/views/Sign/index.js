import Vue from 'vue'
import { Field, Button, CellGroup, Picker, Popup, Toast } from 'vant'
import 'vant/lib/index.css'
import request from '../../utils/axios'

Vue.use(Field)
  .use(Button)
  .use(CellGroup)
  .use(Picker)
  .use(Popup)
  .use(Toast)

export default {
  name: 'sign-up',
  data() {
    return {
      btnst: false,
      username: '',
      zhanghao: false,
      password1: '',
      password2: '',
      mima: false,
      columns: [
        '中国大陆 +86',
        '中国香港 +852',
        '中国澳门 +853',
        '中国台湾 +886'
      ],
      value: '中国大陆 +86',
      showPicker: false
    }
  },
  methods: {
    qingqiu() {
      request
        .post('http://localhost:3000/liu', {
          id: this.username,
          password: this.password2
        })
        .then(function(res) {
          Toast('注册成功')
          location.href = '/#/login'
        })
        .catch(function(err) {
          Toast('账号已被注册')
        })
    },
    chance() {
      if (this.username == '' || isNaN(this.username)) {
        this.$toast('账号输入不合规定')
      } else {
        this.qingqiu()
      }
    },
    onChange(picker, value, index) {
      Toast(`当前值：${value}, 当前索引：${index}`)
    },
    onCancel() {
      this.showPicker = false
    },
    onConfirm(value) {
      this.value = value
      this.onCancel()
    },
    liang() {
      if (this.zhanghao === true && this.mima === true) {
        this.btnst = true
      } else {
        console.log(this.zhanghao, this.mima)
        this.btnst = false
      }
    },
    check(value) {
      if (value.length > 0 && this.password1 === this.password2) {
        if (this.password1.length < 6 || this.password1.length > 18) {
          Toast('密码长度不符合规定')
        } else {
          this.mima = true
          this.liang()
        }
      } else {
        this.mima = false
        this.liang()
      }
    }
  },
  watch: {
    username(value) {
      if (value.length > 6) {
        this.zhanghao = true
        this.liang()
      } else {
        this.zhanghao = false
        this.liang()
      }
    },
    password1(value) {
      this.check(value)
    },
    password2(value) {
      this.check(value)
    }
  }
}
