import { App } from 'vue'
import 'element-plus/theme-chalk/base.css'
import {
  ElButton,
  ElTable,
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus'

const components = [
  ElButton,
  ElTable,
  // ElAlert,
  // ElAside,
  // ElAutocomplete,
  // ElAvatar,
  // ElBacktop,
  // ElBadge,
  ElTabs,
  ElTabPane,
  ElIcon,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
]

export function registerApp(app: App) {
  for (const cpn of components) {
    app.component(cpn.name, cpn)
  }
}
