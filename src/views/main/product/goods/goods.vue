<template>
  <div class='goods'>
    <PageSearch :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                @queryBtnClick='headelQueryBtnClick'></PageSearch>
    <PageContent :content-table-config='contentTableConfig' pagename='goods' ref='pageContentRef'>
      <template #imgUrl='scpoe'>
        <el-image
          style='width: 65px; height: 80px'
          :src='scpoe.row.imgUrl'
          :preview-src-list='[scpoe.row.imgUrl]'
        />
      </template>
      <template #oldPrice='scope'>{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice='scope'>{{ '￥' + scope.row.newPrice }}</template>
      <template #status='scope'>
        <el-button plain :type='scope.row.status ? "success":"warning"' size='small'>
          {{ scope.row.status ? '已上架' : '下架' }}
        </el-button>
      </template>
    </PageContent>

  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'

export default defineComponent({
  name: 'goods',
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
    return {
      contentTableConfig,
      SearchFormConfig,
      headelResetBtnClick,
      headelQueryBtnClick,
      pageContentRef
    }
  }
})
</script>

<style scoped>

</style>
