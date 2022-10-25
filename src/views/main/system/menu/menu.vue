<template>
  <div class='menu'>
    <PageContent :content-table-config='contentTableConfig' pagename='menu'></PageContent>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content'
import { contentTableConfig } from './config/table.config'

export default defineComponent({
  name: 'menus',
  components: {
    pageContent
  },
  setup() {
    return {
      contentTableConfig
    }
  }
})
</script>

<style scoped></style>
