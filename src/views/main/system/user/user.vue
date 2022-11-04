<template>
  <div class='user'>
    <PageSearch :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                @queryBtnClick='headelQueryBtnClick'></PageSearch>
    <PageContent :content-table-config='contentTableConfig'
                 pagename='users'
                 ref='pageContentRef'
                 :new-btn='newBtn'
                 @headerNewData='headerNewData' @headerEditData='headerEditData'>
      <template #status='scope'>
        <el-button plain :type='scope.row.enable ? "success":"warning"' size='small'>
          {{ scope.row.enable ? '启用' : '禁用' }}
        </el-button>
      </template>
    </PageContent>
    <pageModel :model-form-config='modelFormConfigRef' ref='pageModelRef' :defaultdata='defaultdata'
               page-name='users' :rules='rules'></pageModel>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { SearchFormConfig } from './config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/table.config'
import { usePageSearch } from '@/hooks/use-page-search'
// import useStore from '@/store/index'
import { useStore } from 'vuex'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { ModelFormConfig } from './config/model.config'
import { usePageModel } from '@/hooks/use-page-model'
import { rules } from '@/views/main/system/user/config/page.model.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    pageModel
  },

  setup() {
    const store = useStore()
    // 搜索重置按钮的数据返回
    const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
    const newBtn = '新建用户'

    //pagemodel 相关hook 是否显示密码框
    const newCallBack = () => {
      const passwordItem = ModelFormConfig.fromItem.find((item) => item.field === 'password')
      passwordItem!.isHidden = false
    }
    const editCallBack = () => {
      const passwordItem = ModelFormConfig.fromItem.find((item) => item.field === 'password')
      passwordItem!.isHidden = true
      console.log('--------')
    }
    const [pageModelRef, defaultdata, headerNewData, headerEditData] = usePageModel(newCallBack, editCallBack)

    //动态请求部门和角色，由于数据异步请求，无法从新加载，这里采用这样方法
    const modelFormConfigRef = computed(() => {
      const departmentIdItem = ModelFormConfig.fromItem.find((item) => {
        return item.field === 'departmentId'
      })
      departmentIdItem!.option = store.state.entireDepartment.map((item: any) => {
        return { title: item.name, value: item.id }
      })

      const roleIdItem = ModelFormConfig.fromItem.find((item) => {
        return item.field === 'roleId'
      })
      roleIdItem!.option = store.state.entireRole.map((item: any) => {
        return { title: item.name, value: item.id }
      })

      return ModelFormConfig
    })


    return {
      SearchFormConfig,
      contentTableConfig,
      ModelFormConfig,
      modelFormConfigRef,
      headelResetBtnClick,
      headelQueryBtnClick,
      pageContentRef,
      newBtn,
      pageModelRef,
      headerNewData,
      headerEditData,
      defaultdata,
      rules


    }
  }
})
</script>

<style scoped lang='css'>

</style>
