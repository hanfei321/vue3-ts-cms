<template>
  <div class="category">
    <pageSearch :SearchFormConfig='SearchFormConfig' @resetBtnClick='headelResetBtnClick'
                 @queryBtnClick='headelQueryBtnClick'></pageSearch>
    <pageContent :content-table-config='contentTableConfig' newBtn="新建类别" pagename="category"
    @headerNewData='headerNewData' @headerEditData='headerEditData' ref='pageContentRef'></pageContent>
    <page-model :model-form-config='ModelFormConfig' page-name='category' :defaultdata='defaultdata'
                ref='pageModelRef'></page-model>
  </div>
</template>

<script lang="ts" setup>
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { SearchFormConfig } from './config/search.config';
import { contentTableConfig } from './config/table.config';
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'
import { ModelFormConfig } from './config/model.config';
const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] = usePageSearch()
const [pageModelRef, defaultdata, headerNewData, headerEditData] = usePageModel(undefined,undefined,'category','categoryEdit')
</script>

<style scoped></style>
