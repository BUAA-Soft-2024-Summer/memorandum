import axios from 'axios'
import router from '../router'

export const baseUrl = 'http://localhost:8080/'

const service = axios.create({
  baseURL: baseUrl, // 改上面的吧

  timeout: 0
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    // token

    return config
  },
  function (error) {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // 对响应数据做点什么
    // const data = JSON.parse(response.request.response)
    const data = response.data
    if (data.code == 462) {
     
      location.reload()
    }
    console.log(data)
    if (data) {
      return Promise.resolve(data)
    } else {
      // message.info(data.msg);
      return Promise.reject(data)
    }
  },
  function (error) {
    // const data = JSON.parse(error.request.response)

    // ElMessage({
    //   message: error,
    //   type: 'error'
    // })
    // 对响应错误做点什么
    return Promise.reject(error)
  }
)

export default service
