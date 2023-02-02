<template>
  <div class='department'>
    department
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import pageSearch from '@/components/page-search'
import pageContent from '@/components/page-content'

export default defineComponent({
  name: 'department',
  components: {
    pageSearch,
    pageContent
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
