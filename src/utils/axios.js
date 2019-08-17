import axios from "axios"

const request = axios.create({
  baceUrl: "https://mtop.damai.cn"
})
request.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    return Promise.reject(error)
  }
)
export default request
