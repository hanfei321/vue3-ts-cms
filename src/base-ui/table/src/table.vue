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
    <el-table :data='listData' border style='width: 100%' class='table-user' @selection-change='selectionchange'
              v-bind='childrenProps'>
      <el-table-column v-if='showSelectColumn' type='selection' width='60' align='center'></el-table-column>
      <el-table-column v-if='showIndexColumn' type='index' width='80px' align='center' label='序号'></el-table-column>
      <template v-for='item in propList' :key='item.prop'>
        <el-table-column v-bind='item' align='center' show-overflow-tooltip>
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
          v-model:currentPage='page.pageCount'
          v-model:page-size='page.pageSize'
          :page-sizes='[10, 20, 30,]'
          :background='true'
          layout='total, sizes, prev, pager, next, jumper'
          :total='listCount'
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
    },
    listCount: {
      type: Number,
      defulat: 0
    },
    page: {
      type: Object,
      defulat: () => ({ pageCount: 0, pageSize: 10 })
    },
    childrenProps: {
      type: Object,
      defulat: () => {
      }
    },
    showFooter: {
      type: Boolean,
      defulat: true
    }
  },
  emits: ['selectionCH', 'update:page'],
  setup(props, { emit }) {
    const store = useStore()
    const selectionchange = (value: any) => {
      emit('selectionCH', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (pageCount: number) => {
      emit('update:page', { ...props.page, pageCount })
    }


    return {
      selectionchange,
      handleSizeChange,
      handleCurrentChange
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
    margin-left: 500px;
  }
}
</style>