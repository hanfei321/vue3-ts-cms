<template>
  <div class='map-echart'>
    <BaseEchars :options='options'></BaseEchars>
  </div>
</template>

<script lang='ts' setup>
import { coordinateData } from '../utiles/coordinate-data'
import BaseEchars from '@/base-ui/echarts'
import { computed, defineProps, withDefaults } from 'vue'
import { IDataType } from '../type/type'

const props = withDefaults(defineProps<{
  title?: string
  mapData: IDataType[]
}>(), { title: '' })

var convertData = function(data: any) {
  var res = []
  for (var i = 0; i < data.length; i++) {
    var geoCoord = coordinateData[data[i].name]
    if (geoCoord) {
      res.push({
        name: data[i].name,
        value: geoCoord.concat(data[i].value)
      })
    }
  }
  return res
}

const options = computed(() => {
  return {
    backgroundColor: '#fff',
    // title: {
    //   text: '全国销售情况',
    //   left: 'center',
    //   textStyle: {
    //     color: '#fff'
    //   }
    // },
    tooltip: {
      trigger: 'item',
      formatter: function(params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 10,
      data: ['销量'],
      textStyle: {
        color: '#000'
      }
    },
    visualMap: {
      min: 0,
      max: 60000,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['#00467F', '#A5CC82']
      },
      textStyle: {
        color: '#000'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#eefcef',
          borderColor: 'rgb(9, 54, 95)'
        },
        emphasis: {
          areaColor: '#d3effa'
        }
      }
    },
    series: [{
      name: '销量',
      type: 'scatter',
      coordinateSystem: 'geo',
      data: convertData(props.mapData),
      symbolSize: 12,
      label: {
        normal: {
          show: false
        },
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        emphasis: {
          borderColor: '#fff',
          borderWidth: 1
        }
      }
    },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
    // dataset: {source: mapdata}
  }
})
</script>

<style scoped>

</style>