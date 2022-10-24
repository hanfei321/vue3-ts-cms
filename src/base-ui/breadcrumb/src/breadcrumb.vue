<template>
  <el-breadcrumb separator='/'>
    <template v-for='item in breadcrumbs' :key='item.name'>
      <el-breadcrumb-item :to='{ path: item.path }'>{{ item.name }}</el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue'
import { breadtype } from '../index'


export default defineComponent({
  name: 'breadcrumb',
  props: {
    breadcrumbs: {
      type: Array as PropType<breadtype[]>,
      default: () => []
    }
  }

})
</script>

<style scoped>

</style>