<template>
  <div class='user'>
    <PageSearch :SearchFormConfig='SearchFormConfig'></PageSearch>
    <PageContent :content-table-config='contentTableConfig' pagename='user'></PageContent>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import { SearchFormConfig } from './config/search.config'
import { contentTableConfig } from '@/views/main/system/user/config/table.config'
// import useStore from '@/store/index'
import { useStore } from 'vuex'


export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },

  setup() {


    return {
      SearchFormConfig,
      contentTableConfig


    }
  }
})
</script>

<style scoped lang='css'>

</style>
