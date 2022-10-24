<template>
  <div class='role'>
    <page-search :SearchFormConfig='SearchFormConfig'></page-search>
    <pageContent :content-table-config='contentTableConfig' pagename='role'></pageContent>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'
import { SearchFormConfig } from './config/search.config'


export default defineComponent({
  name: 'role',
  props: {},
  components: {
    pageContent,
    pageSearch
  },
  setup() {
    return {
      SearchFormConfig,
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
