<template>
  <div class='role'>
    <page-search :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                 @queryBtnClick='headelQueryBtnClick'></page-search>
    <pageContent :content-table-config='contentTableConfig' pagename='role' ref='pageContentRef'
                 :new-btn='newBtn' @headerNewData='headerNewData' @headerEditData='headerEditData'></pageContent>
    <page-model :model-form-config='ModelFormConfig' page-name='role' :defaultdata='defaultdata'
                ref='pageModelRef' :over-info='overInfo'>
      <div class='menu-tree'>
        <el-tree
          ref='treeRef'
          :data='menu'
          show-checkbox
          node-key='id'
          highlight-current
          :props='{children:"children",label:"name"}'
          @check='handleCheckChange'
        />
      </div>
    </page-model>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'
import PageModel from '@/components/page-model/src/page-model.vue'
import { ModelFormConfig } from './config/model.config'
import { usePageModel } from '@/hooks/use-page-model'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'role',
  props: {},
  components: {
    PageModel,
    pageContent,
    pageSearch
  },
  setup() {
    const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
    const newBtn = '新建角色'

    const [pageModelRef, defaultdata, headerNewData, headerEditData] = usePageModel(undefined,undefined,'role','roleEdit')
    const store = useStore()
    const menu = computed(() => store.state.entireMenu)

    const overInfo = ref({})
    const handleCheckChange = (data1: any, data2: any) => {
      const checkedKeys = data2.checkedKeys
      const halfCheckedKeys = data2.halfCheckedKeys
      const menuList = [...checkedKeys, ...halfCheckedKeys]
      overInfo.value = { menuList }
    }
    return {
      SearchFormConfig,
      contentTableConfig,
      headelResetBtnClick,
      headelQueryBtnClick,
      pageContentRef,
      newBtn,
      ModelFormConfig,
      pageModelRef,
      defaultdata,
      headerNewData,
      headerEditData,
      menu,
      handleCheckChange,
      overInfo


    }
  }
})
</script>

<style scoped>
.menu-tree {
  margin-left: 30px;
}
</style>
