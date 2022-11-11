<template>
  <div class='bar-echarts'>
    <BaseEchars :options='options'></BaseEchars>
  </div>
</template>

<script lang='ts' setup>
import BaseEchars from '@/base-ui/echarts/index'
import { IDataType } from '@/components/page-echars/type/type'
import { computed, defineProps } from 'vue'
import * as echarts from 'echarts'

const props = defineProps<{
  title?: string
  xLabels: string[]
  values: any[]
}>()

const options = computed(() => {
  return {
    grid: {
      left: '5%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      data: props.xLabels,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.values
      }
    ]
  }
})
</script>

<style scoped>

</style>