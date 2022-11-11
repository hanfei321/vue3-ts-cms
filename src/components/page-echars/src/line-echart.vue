<template>
  <div class='pie-echarts'>
    <BaseEchars :options='options'></BaseEchars>
  </div>
</template>

<script lang='ts' setup>
import BaseEchars from '@/base-ui/echarts'
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
    color: ['rgba(98,79,238,0.7)', '#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        label: {
          backgroundColor: '#6a7985'
        }
      }
    },
    legend: {
      data: ['Line 1']
    },
    toolbox: {
      feature: {
        saveAsImage: {}
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: props.xLabels
      }
    ],
    yAxis: [
      {
        type: 'value'
      }
    ],
    series: [
      {
        name: 'Line 1',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: {
          width: 0
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: 'rgba(147,139,206,0.7)'
            },
            {
              offset: 1,
              color: 'rgba(209,208,246,0.44)'
            }
          ])
        },
        emphasis: {
          focus: 'series'
        },
        data: props.values
      }

    ]
  }
})
</script>

<style scoped>

</style>