import { App } from 'vue'

export default function registerProperties(app: App) {
  app.config.globalProperties.$filters = {
    name: 'zlk',
    fromatTime(value: string) {
      return '2021-08-12 22:22:22'
    }
  }
}
