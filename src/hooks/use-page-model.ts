import { ref } from 'vue'
import pageModel from '@/components/page-model'

type callBackType = () => void

export function usePageModel(newcb?: callBackType, editcb?: callBackType) {
  const pageModelRef = ref<InstanceType<typeof pageModel>>()
  const defaultdata = ref({})
  const headerNewData = () => {
    if (pageModelRef.value) {
      defaultdata.value = {}
      pageModelRef.value.dialogVisible = true
      pageModelRef.value.titleHeard = '新建用户'
    }
    newcb && newcb()
  }
  const headerEditData = (item: any) => {
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true
      pageModelRef.value.titleHeard = '编辑用户'
      defaultdata.value = { ...item }
    }
    editcb && editcb()
  }
  return [pageModelRef, defaultdata, headerNewData, headerEditData]
}
