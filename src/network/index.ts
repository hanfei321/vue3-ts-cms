// 统一出口
import { HYRequest } from '@/network/request'
import { BASE_URL, TIME_OUT } from '@/network/request/config'
import { AxiosRequestConfig } from 'axios'
import LocalCache from '@/utils/cache'

interface AXIrequestconfig extends AxiosRequestConfig {
  headers?: any
}

export default new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  intercrptors: {
    requestInterceptor: (config: AXIrequestconfig) => {
      const token = LocalCache.getCache('token')
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    requestInterceptorCatch: (err) => {
      return err
    },
    responseInterceptor: (res) => {
      return res
    },
    responseInterceptorCatch: (err) => {
      return err
    }
  }
})
