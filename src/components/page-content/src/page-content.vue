<template>
  <div class='page-content'>
    <div class='table-list'>
      <Table :list-data='userList' v-bind='contentTableConfig'>

        <!--header中的插槽-->
        <template #headerHanler>
          <el-button class='search-icon'>新建用户</el-button>
        </template>
        <!--        列中插槽-->
        <template #status='scope'>
          <el-button plain :type='scope.row.enable ? "success":"warning"' size='small'>
            {{ scope.row.enable ? '启用' : '禁用' }}
          </el-button>
        </template>
        <template #createAt='scope'>
          <strong>{{ formatUtcString(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt='scope'>
          <strong>{{ formatUtcString(scope.row.updateAt) }}</strong>
        </template>
        <template #handler>
          <div class='handler-btns'>
            <el-button size='small' type='primary' text :icon='EditPen'>编辑</el-button>
            <el-button size='small' type='primary' text :icon='Delete'>删除</el-button>
          </div>
        </template>
      </Table>
    </div>

  </div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import Table from '@/base-ui/table'

import { formatUtcString } from '@/utils/date-format'
import { EditPen, Delete } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'page-content',
  props: {
    contentTableConfig: {
      type: Object,
      reuqired: true
    },
    pagename: {
      type: String,
      reuqired: true
    }
  },
  components: {
    Table
  },
  setup(prop) {
    const store = useStore()
    store.dispatch('system/getPageLisitAction', {
      pageName: prop.pagename,
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    const userList = computed(() => store.getters[`system/pageListData`](prop.pagename))

    return {
      userList,
      formatUtcString,
      EditPen,
      Delete
    }
  }
})
</script>

<style scoped>
.table-list {
  padding: 20px;
  border-top: 20px solid #e6eef0;

}

.handler-btns {
  font-weight: bold;
}

.search-icon {
  background-color: #393550;
  color: white;
  font-weight: bold;
}
</style>