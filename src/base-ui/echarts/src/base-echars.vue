<template>
  <div class='base-echars'>
    <div ref='echarsDivRef' :style='{width:width,height:height}'></div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted, ref, defineProps, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEchart from '@/base-ui/echarts/hook/useEchart'

const props = withDefaults(defineProps<{
  options: EChartsOption
  width?: string
  height?: string
}>(), { width: '100%', height: '360px' })

const echarsDivRef = ref<HTMLElement>()
onMounted(() => {
  const { setOptions } = useEchart(echarsDivRef.value!)
  watchEffect(() => {
    setOptions(props.options)
  })
})

</script>

<style scoped>

</style>