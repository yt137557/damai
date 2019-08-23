<<<<<<< HEAD
import axios from "axios"
=======
import axios from 'axios'
import { Toast } from 'vant'
>>>>>>> 710e7af81abec4a7b90516a3db144a5fad718f20
const request = axios.create({
  // 默认配置项
  baseURL: 'https://localhost:3000'
})

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
