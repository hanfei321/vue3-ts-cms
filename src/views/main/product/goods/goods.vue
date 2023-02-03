<template>
  <div class="goods">
    <PageSearch
      :SearchFormConfig="SearchFormConfig"
      @resetBtnClick="headelResetBtnClick"
      @queryBtnClick="headelQueryBtnClick"
    ></PageSearch>
    <PageContent
      :content-table-config="contentTableConfig"
      newBtn="新建商品"
      @headerNewData="headerNewData"
      @headerEditData="headerEditData"
      pagename="goods"
      ref="pageContentRef"
    >
      <template #imgUrl="scpoe">
        <el-image
          style="width: 65px; height: 80px"
          :src="scpoe.row.imgUrl"
          :preview-src-list="[scpoe.row.imgUrl]"
        />
      </template>
      <template #oldPrice="scope">{{ '￥' + scope.row.oldPrice }}</template>
      <template #newPrice="scope">{{ '￥' + scope.row.newPrice }}</template>
      <template #status="scope">
        <el-button
          plain
          :type="scope.row.status ? 'success' : 'warning'"
          size="small"
        >
          {{ scope.row.status ? '已上架' : '下架' }}
        </el-button>
      </template>
    </PageContent>
    <page-model
      :model-form-config="ModelFormConfig"
      page-name="goods"
      :defaultdata="defaultdata"
      ref="pageModelRef"
    ></page-model>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import pageModel from '@/components/page-model'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'
import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModel } from '@/hooks/use-page-model'
import { ModelFormConfig } from './config/model.config'

const [pageContentRef, headelResetBtnClick, headelQueryBtnClick] =
  usePageSearch()
const [pageModelRef, defaultdata, headerNewData, headerEditData] =
  usePageModel()
</script>

<style scoped></style>
