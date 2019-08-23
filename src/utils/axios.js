import axios from 'axios'
import { Toast } from 'vant'
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
