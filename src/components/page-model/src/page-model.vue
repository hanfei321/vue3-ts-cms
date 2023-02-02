<template>
  <div class='page-model'>
    <el-dialog v-model='dialogVisible' :title='titleHeard' width='30%' center destroy-on-close>
    <span>
      <HyFrom v-bind='modelFormConfig' v-model='formDate' :rules='rules'></HyFrom>
      <slot></slot>
    </span>
      <template #footer>
      <span class='dialog-footer'>
        <el-button @click='dialogVisible = false'>取消</el-button>
        <el-button type='primary' @click='handleConfirmClick'>
          确定
        </el-button>
      </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import HyFrom from '@/base-ui/form/src/hy-from.vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'page-model',
  props: {
    modelFormConfig: {
      type: Object,
      required: true
    },
    defaultdata: {
      type: Object,
      default: () => {
      }
    },
    overInfo: {
      type: Object,
      default: () => ({})
    },
    pageName: {
      type: String,
      required: true
    },
    rules: {
      type: Object,
      default: () => {
      }
    },
  },
  components: {
    HyFrom
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formDate = ref<any>({})
    const store = useStore()
    watch(() => props.defaultdata, (newValue) => {
      for (const item of props.modelFormConfig.fromItem) {
        formDate.value[`${item.field}`] = newValue[`${item.field}`]
      }
    })
    const titleHeard = ref('')
    const handleConfirmClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaultdata).length) {
        //编辑
        store.dispatch('system/EditPageDataAction', {
          pageName: props.pageName,
          editData: { ...formDate.value, ...props.overInfo },
          id: props.defaultdata.id
        })
      } else {
        //新建
        store.dispatch('system/createPageDataAction', {
          pageName: props.pageName,
          newData: { ...formDate.value, ...props.overInfo }
        })
      }

    }
    return {
      dialogVisible,
      formDate,
      titleHeard,
      handleConfirmClick

    }
  }
})
</script>

<style scoped>

</style>