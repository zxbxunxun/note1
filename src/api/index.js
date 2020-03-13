import axios from 'axios'

export default config => {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000/',
    timeout: 5000
  })
  // 请求拦截器
  instance.interceptors.request.use(
    config => {
      console.log(config)
      return config
    },
    err => {
      console.log(config)
      return err
    }
  )
  // 相应拦截器
  instance.interceptors.response.use(
    res => {
      return res
    },
    err => {
      return err
    }
  )
  return instance(config)
}
