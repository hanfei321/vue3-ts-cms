<template>
  <div class='department'>
    <pageSearch :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                 @queryBtnClick='headelQueryBtnClick'></pageSearch>
    <pageContent :content-table-config='contentTableConfig' newBtn="新建部门" pagename="department"
    @headerNewData='headerNewData' @headerEditData='headerEditData' ref='pageContentRef'></pageContent>
    <page-model :model-form-config='ModelFormConfig' page-name='department' :defaultdata='defaultdata'
                ref='pageModelRef'></page-model>
  </div>
</template>

<script lang='ts' setup>
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'
import { ModelFormConfig } from './config/model.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'
const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
const [pageModelRef, defaultdata, headerNewData, headerEditData] = usePageModel( undefined,undefined,'department','departmentEdit')


</script>

<style scoped></style>
