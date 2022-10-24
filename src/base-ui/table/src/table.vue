<template>
  <div class='table'>
    <div class='table-header'>
      <slot name='tableHeader'>
        <div class='title'>{{ title }}</div>
        <div class='handler'>
          <slot name='headerHanler'></slot>
        </div>
      </slot>
    </div>
    <el-table :data='listData' border style='width: 100%' class='table-user' @selection-change='selectionchange'>
      <el-table-column v-if='showSelectColumn' type='selection' width='60' align='center'></el-table-column>
      <el-table-column v-if='showIndexColumn' type='index' width='80px' align='center' label='序号'></el-table-column>
      <template v-for='item in propList' :key='item.prop'>
        <el-table-column v-bind='item' align='center'>
          <template #default='scope'>
            <slot :name='item.slotname' :row='scope.row'>
              {{ scope.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class='table-footer'>
      <slot name='tableFooter'>
        <el-pagination
          v-model:currentPage='currentPage4'
          v-model:page-size='pageSize4'
          :page-sizes='[100, 200, 300, 400]'
          :small='small'
          :disabled='disabled'
          :background='background'
          layout='total, sizes, prev, pager, next, jumper'
          :total='400'
          @size-change='handleSizeChange'
          @current-change='handleCurrentChange'
        />
      </slot>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'tableuser',
  props: {
    title: {
      type: String,
      defulat: ''
    },
    listData: {
      type: Array,
      required: true
    },
    propList: {
      type: Array,
      required: true
    },
    showIndexColumn: {
      type: Boolean,
      defulat: false
    },
    showSelectColumn: {
      type: Boolean,
      defulat: false
    }
  },
  emit: ['selectionCH'],
  setup(props, { emit }) {
    const store = useStore()
    const selectionchange = (value: any) => {
      emit('selectionCH', value)
    }

    return {
      selectionchange
    }
  }
})
</script>

<style scoped lang='less'>
.table-header {
  display: flex;
  height: 45px;
  padding: 0 5px;
  justify-content: space-between;
  align-items: center;

  .title {
    color: #393550;
    font-size: 20px;
    font-weight: 700;
  }

  .handler {
    align-items: center;
  }
}

.table-footer {
  margin-top: 15px;

  .el-pagination {
    text-align: right;
    margin-left: 550px;
  }
}
</style>