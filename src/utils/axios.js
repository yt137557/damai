import axios from 'axios'

const request = axios.create({
  baceUrl: 'http://localhost:3000/'
})

request.interceptors.response.use(
  response => {
    return response
  },
  error => {
    console.log(1)
    return Promise.reject(error)
  }
)
export default request
