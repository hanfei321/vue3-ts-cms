import { createApp } from 'vue'
import App from './App.vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/theme-chalk/index.css'
// import './network/axios-demo'
import hyrequset from './network/index'

//初始化css
import 'normalize.css'
import './assets/css/index.less'

import router from './router'
import store from './store'
import { registerApp } from '@/global'
import { setupStore } from '@/store'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import registerProperties from '@/global/register-properties/register-properties'

const app = createApp(App)
app.use(registerProperties)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//elment-puls的局部引用
// registerApp(app)
//进入main页面后重新加载数据到vuex
setupStore()

createApp(App).use(store).use(router).mount('#app')

// interface DataType {
//   data: any
//   returnCode: string
//   success: boolean
// }
//
// hyrequset
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'get',
//     // showLoading: false,
//     intercrptors: {
//       requestInterceptor: (config) => {
//         console.log('单独请求config')
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独响应res')
//         return res
//       }
//     }
//   })
//   .then((res) => {
//     console.log(res)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })
//   .catch((err) => {
//     console.log(err)
//   })
