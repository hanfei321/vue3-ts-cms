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
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [10, 100],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: props.pirData
      }
    ]
  }
})
</script>

<style scoped>

</style>