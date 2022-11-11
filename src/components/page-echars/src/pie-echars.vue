<template>
  <div class='pie-echarts'>
    <BaseEchars :options='options'></BaseEchars>
  </div>
</template>

<script lang='ts' setup>
import BaseEchars from '@/base-ui/echarts/index'
import { IDataType } from '@/components/page-echars/type/type'
import { computed, defineProps } from 'vue'

const props = defineProps<{
  pirData: IDataType[]
}>()

const options = computed(() => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'horizontal',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.pirData,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>

<style scoped>

</style>