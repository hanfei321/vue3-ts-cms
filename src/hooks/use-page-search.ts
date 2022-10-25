import { ref } from 'vue'

import pageContent from '@/components/page-content'

export function usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const headelResetBtnClick = () => {
    pageContentRef.value?.getPageContent()
  }
  const headelQueryBtnClick = (queryInfo: any) => {
    pageContentRef.value?.getPageContent(queryInfo)
    console.log(pageContentRef.value)
  }
  return [pageContentRef, headelResetBtnClick, headelQueryBtnClick]
}
