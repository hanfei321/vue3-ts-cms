<template>
  <div class='dashboard'>
    <h2>dashboard1</h2>
    <el-row :gutter='12' class='elrow'>
      <el-col :span='7'>
        <card title='分类商品数量(饼图)'>
          <pie-echars :pir-data='categoryCountData'></pie-echars>
        </card>
      </el-col>
      <el-col :span='10'>
        <card title='不同城市商品销量'>
          <mapEchart :mapData='addressGoodsData'></mapEchart>
        </card>
      </el-col>
      <el-col :span='7'>
        <card title='分类商品数量(玫瑰图)'>
          <rose-echart :pir-data='categoryCountData'></rose-echart>
        </card>
      </el-col>
    </el-row>
    <el-row :gutter='15' class='elrow'>
      <el-col :span='12' class='elrow-col'>
        <card title='分类商品的销量'>
          <line-echart v-bind='categoryGoodsSale'></line-echart>
        </card>
      </el-col>
      <el-col :span='12' class='elrow-col'>
        <card title='分类商品的收藏'>
          <bar-echart v-bind='CategoryFavorData'></bar-echart>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { useStore } from 'vuex'
import card from '@/base-ui/card'
import baseEchar from '@/base-ui/echarts/index'
import { pieEchars, roseEchart, lineEchart, barEchart, mapEchart } from '@/components/page-echars/index'

export default defineComponent({
  name: 'dashboard',
  components: {
    pieEchars,
    card,
    baseEchar,
    roseEchart,
    lineEchart,
    barEchart,
    mapEchart
  },
  setup() {
    // 请求数据
    const store = useStore()
    store.dispatch('Dashboard/getDashboardDataAction')

    //获取饼图（玫瑰图）数据
    const categoryCountData = computed(() => {
      return store.state.Dashboard.categoryGoodsCount.map((item: any) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    //获取折线图数据
    const categoryGoodsSale = computed(() => {
      const xLabels: any[] = []
      const values: any[] = []
      const categoryGoodsSale = store.state.Dashboard.categoryGoodsSale

      for (const item of categoryGoodsSale) {
        xLabels.push(item.name)
        values.push(item.goodsCount)
      }
      return {
        xLabels, values
      }

    })
    //获取树状图数据
    const CategoryFavorData = computed(() => {
      const xLabels: any[] = []
      const values: any[] = []
      const CategoryFavorData = store.state.Dashboard.categoryGoodsFavor

      for (const item of CategoryFavorData) {
        xLabels.push(item.name)
        values.push(item.goodsFavor)
      }
      return {
        xLabels, values
      }

    })

    //获取地图销量数据
    const addressGoodsData = computed(() => {
      return store.state.Dashboard.addressGoodsSale.map((item: any) => {
        return { name: item.address, value: item.count }
      })

    })

    return {
      categoryCountData,
      categoryGoodsSale,
      CategoryFavorData,
      addressGoodsData
    }
  }
})
</script>

<style scoped>
.elrow {
  margin-top: 20px;
  padding: 0px 10px;
}

.elrow-col {
  margin-bottom: 15px;
}
</style>
