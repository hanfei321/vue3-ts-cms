<template>
  <div class='role'>
    <page-search :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                 @queryBtnClick='headelQueryBtnClick'></page-search>
    <pageContent :content-table-config='contentTableConfig' pagename='role' ref='pageContentRef'
                 :new-btn='newBtn'></pageContent>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'


export default defineComponent({
  name: 'role',
  props: {},
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
    const newBtn = '新建角色'
    return {
      SearchFormConfig,
      contentTableConfig,
      headelResetBtnClick,
      headelQueryBtnClick,
      pageContentRef,
      newBtn

    }
  }
})
</script>

<style scoped></style>
