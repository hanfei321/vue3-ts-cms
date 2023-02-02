import { ref } from 'vue'
import pageModel from '@/components/page-model'

type callBackType = () => void

export function usePageModel(newcb?: callBackType, editcb?: callBackType, titleNew?: string, titleEdit?: string) {
  const pageModelRef = ref<InstanceType<typeof pageModel>>()
  const defaultdata = ref({})
  const headerNewData = () => {
    if (pageModelRef.value) {
      defaultdata.value = {}
      pageModelRef.value.dialogVisible = true
      switch (titleNew) {
        case 'department':
          pageModelRef.value.titleHeard = '新建部门'
          break;
        case 'role':
          pageModelRef.value.titleHeard = '新建角色'
          break;
        case 'category':
          pageModelRef.value.titleHeard = '新建类别'
          break;
        default:
          pageModelRef.value.titleHeard = '新建'
      }

    }
    newcb && newcb()
  }
  const headerEditData = (item: any) => {
    if (pageModelRef.value) {
      pageModelRef.value.dialogVisible = true

      switch (titleEdit) {
        case 'departmentEdit':
          pageModelRef.value.titleHeard = '编辑部门'
          break;
        case 'roleEdit':
          pageModelRef.value.titleHeard = '编辑角色'
          break;
        case 'categoryEdit':
          pageModelRef.value.titleHeard = '编辑类别'
          break;
        default:
          pageModelRef.value.titleHeard = '编辑'
      }
      defaultdata.value = { ...item }
    }
    editcb && editcb()
  }
  return [pageModelRef, defaultdata, headerNewData, headerEditData]
}
