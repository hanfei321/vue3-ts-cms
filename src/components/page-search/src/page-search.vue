<template>
  <div class='page-search'>
    <Hyfrom v-bind='SearchFormConfig' v-model='formData'>
      <template #header class='user-header'>
        <h1 style='color: #393550'>高级检索</h1>
      </template>
      <template #footer>
        <div class='user-footer'>
          <el-button :icon='Search' class='search-icon' @click='handleQueryClick'>搜索</el-button>
          <el-button :icon='RefreshRight' class='refresh-icon' @click='handleResetClick'>重置</el-button>
        </div>
      </template>
    </Hyfrom>
  </div>

</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import Hyfrom from '@/base-ui/form'
import { Search, RefreshRight } from '@element-plus/icons-vue'

export default defineComponent({
  name: 'page-search',
  props: {
    SearchFormConfig: {
      type: Object,
      reuqired: true
    }
  },
  components: {
    Hyfrom
  },
  emits: ['resetBtnClick', 'queryBtnClick'],
  setup(prop, { emit }) {
    const formItems = prop.SearchFormConfig?.fromItem ?? []
    const formQriginData: any = {}
    for (const item of formItems) {
      formQriginData[item.field] = ''
    }
    const formData = ref(formQriginData)
    const handleResetClick = () => {
      formData.value = formQriginData
      emit('resetBtnClick')
    }
    // 优化三
    const handleQueryClick = () => {
      console.log('搜索点击')
      emit('queryBtnClick', formData.value)

    }
    return {
      formData,
      Search,
      RefreshRight,
      handleResetClick,
      handleQueryClick
    }
  }
})
</script>

<style scoped>
.user-header {
  color: #393550;
}

.user-footer {
  text-align: right;
  padding: 0 50px 20px 0;
  margin-top: 10px;
}

.search-icon {
  background-color: #393550;
  color: white;
  font-weight: bold;
}

.refresh-icon {
  color: #393550;
  font-weight: bold;
}

/*.refresh-icon :hover {*/
/*  color: white;*/
/*  border-color: rgba(57, 53, 80, 0.99);*/
/*  background-color: rgba(57, 53, 80, 0.98);*/
/*}*/

/*.refresh-icon :focus {*/
/*  color: white;*/
/*  border-color: rgba(57, 53, 80, 0.99);*/
/*  background-color: rgba(57, 53, 80, 0.98);*/
/*}*/

.refresh-icon:focus, .refresh-icon:hover {
  border-color: rgba(57, 53, 80, 0.68);
  background-color: #f4f2ff;
  outline: 0;
}
</style>