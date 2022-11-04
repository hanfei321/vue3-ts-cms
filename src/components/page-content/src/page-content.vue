<template>
  <div class='page-content'>
    <div class='table-list'>
      <Table :list-data='userList' :list-count='listCount' v-bind='contentTableConfig' v-model:page='pageInfo'>

        <!--header中的插槽-->
        <template #headerHanler>
          <el-button v-if='isCreate' class='search-icon' @click='headerNewClick'>{{ newBtn }}</el-button>
        </template>
        <!--        列中插槽-->
        <template #createAt='scope'>
          <strong>{{ formatUtcString(scope.row.createAt) }}</strong>
        </template>
        <template #updateAt='scope'>
          <strong>{{ formatUtcString(scope.row.updateAt) }}</strong>
        </template>
        <template #handler='scope'>
          <div class='handler-btns'>
            <el-button v-if='isUpdate' size='small' type='primary' text :icon='EditPen'
                       @click='headerEditClick(scope.row)'>编辑
            </el-button>
            <el-button v-if='isDelete' size='small' type='primary' text :icon='Delete'
                       @click='handlDeleteClick(scope.row)'>删除
            </el-button>
          </div>
        </template>

        <template v-for='item in otherPropSlots' :key='item.props' #[item.slotname]='scope'>
          <template v-if='item.slotname'>
            <slot :name='item.slotname' :row='scope.row'></slot>
          </template>
        </template>
      </Table>
    </div>
    <el-dialog
      v-model='centerDialogVisible'
      title='警告'
      width='20%'
      align-center
    >
      <span>你确定要删除这条数据嘛？</span>
      <template #footer>
      <span class='dialog-footer'>
        <el-button @click='centerDialogVisible = false'>取消</el-button>
        <el-button type='primary' @click='handelDeletDialog'>
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, ref, watch } from 'vue'
import Table from '@/base-ui/table'

import { formatUtcString } from '@/utils/date-format'
import { EditPen, Delete } from '@element-plus/icons-vue'
import { useStore } from 'vuex'
import { usePermission } from '@/hooks/use-permission'

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
    },
    newBtn: {
      type: String,
      default: '新建'
    }
  },
  components: {
    Table
  },
  emits: ['headerNewData', 'headerEditData'],
  setup(props, { emit }) {
    const store = useStore()
    const isCreate = usePermission(props.pagename ?? '', 'create')
    const isUpdate = usePermission(props.pagename ?? '', 'update')
    const isDelete = usePermission(props.pagename ?? '', 'delete')
    const isQuery = usePermission(props.pagename ?? '', 'query')

    // 1,双向绑定pageInfo
    const pageInfo = ref({ pageCount: 1, pageSize: 10 })
    watch(pageInfo, () => getPageContent())

    // 2，发送网络请求
    const getPageContent = (queryInfo: any = {}) => {
      console.log(queryInfo)
      if (!isQuery) return
      store.dispatch('system/getPageLisitAction', {
        pageName: props.pagename,
        queryInfo: {
          offset: (pageInfo.value.pageCount - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }
    getPageContent()
    // 3，从vux中获取数据
    const userList = computed(() => store.getters[`system/pageListData`](props.pagename))
    const listCount = computed(() => store.getters[`system/pageListCount`](props.pagename))
    // 4,获取其他的动态插槽名称
    const otherPropSlots = props.contentTableConfig?.propList.filter(
      (item: any) => {
        if (item.slotname === 'createAt') return false
        if (item.slotname === 'updateAt') return false
        if (item.slotname === 'handler') return false
        return true
      }
    )
    //删除、新建
    const centerDialogVisible = ref(false)
    const deleteItemId = ref()
    const handlDeleteClick = (item: any) => {
      centerDialogVisible.value = true
      deleteItemId.value = item.id

    }
    const handelDeletDialog = () => {
      centerDialogVisible.value = false
      store.dispatch(`system/deletePageDataAction`, {
        pageName: props.pagename,
        id: deleteItemId.value
      })
    }
    const headerNewClick = () => {
      console.log('新建')
      emit('headerNewData')

    }
    const headerEditClick = (item: any) => {
      emit('headerEditData', item)
    }

    return {
      userList,
      formatUtcString,
      EditPen,
      Delete,
      getPageContent,
      listCount,
      pageInfo,
      otherPropSlots,
      isCreate,
      isUpdate,
      isDelete,
      handlDeleteClick,
      headerNewClick,
      headerEditClick,
      centerDialogVisible,
      handelDeletDialog
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