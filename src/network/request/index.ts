import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import 'element-plus/theme-chalk/el-loading.css'
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'

// 接口声明类型
interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  intercrptors?: HYRequestInterceptors<T>
  showLoading?: Boolean
}

let DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  intercrptors?: HYRequestInterceptors
  loading?: LoadingInstance
  showLoading: Boolean

  //HYRequestConfig类型扩展
  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.intercrptors = config.intercrptors
    //对应实例的拦截器
    this.instance.interceptors.request.use(
      this.intercrptors?.requestInterceptor,
      this.intercrptors?.requestInterceptorCatch
    )
    this.instance.interceptors.response.use(
      this.intercrptors?.responseInterceptor,
      this.intercrptors?.responseInterceptorCatch
    )

    //添加所有的实例的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log('所有实例请求')
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '请求数据...',
            background: 'rgba(0,0,0,0.5)'
          })
        }
        return config
      },

      (err) => {}
    )
    this.instance.interceptors.response.use(
      (res) => {
        this.loading?.close()
        const data = res.data
        if (data.returnCode === '-1001') {
          console.log('请求失败,错误信息')
        } else {
          return data
        }
      },
      (err) => {
        this.loading?.close()
        switch (err.response.status) {
          case 404:
            console.log('404错误')
          case 500:
            console.log('500错误')
        }
      }
    )
  }

  request<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求对请求config的处理
      if (config.intercrptors?.requestInterceptor) {
        config = config.intercrptors.requestInterceptor(config)
      }
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.intercrptors?.responseInterceptor) {
            res = config.intercrptors.responseInterceptor(res)
          }
          this.showLoading = DEFAULT_LOADING
          resolve(res)
        })
        .catch((err) => {
          this.showLoading = DEFAULT_LOADING
          console.log(err)
        })
    })
  }

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export { HYRequest }
