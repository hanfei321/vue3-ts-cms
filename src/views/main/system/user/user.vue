<template>
  <div class='user'>
    <PageSearch :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                @queryBtnClick='headelQueryBtnClick'></PageSearch>
    <PageContent :content-table-config='contentTableConfig' pagename='users' ref='pageContentRef'>
      <template #status='scope'>
        <el-button plain :type='scope.row.enable ? "success":"warning"' size='small'>
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </PageContent>

    <el-dialog v-model='centerDialogVisible' title='Warning' width='30%' center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
      <template #footer>
      <span class='dialog-footer'>
        <el-button @click='centerDialogVisible = false'>Cancel</el-button>
        <el-button type='primary' @click='centerDialogVisible = false'>
          Confirm
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { SearchFormConfig } from './config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/table.config'
import { usePageSearch } from '@/hooks/use-page-search'
// import useStore from '@/store/index'
import { useStore } from 'vuex'
import pageContent from '@/components/page-content'


export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },

  setup() {
    // 搜索重置按钮的数据返回
    const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()

    const centerDialogVisible = ref(true)

    return {
      SearchFormConfig,
      contentTableConfig,
      headelResetBtnClick,
      headelQueryBtnClick,
      pageContentRef,
      centerDialogVisible


    }
  }
})
</script>

<style scoped lang='css'>

</style>
