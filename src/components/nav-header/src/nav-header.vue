<template>
  <div class='nav-header'>
    <el-icon size='30px' @click='ExpandIconClick' class='fold-menu'>
      <Fold v-if='!ExpandB'></Fold>
      <Expand v-else-if='ExpandB'></Expand>
    </el-icon>
    <div class='content'>
      <breadcrumb :breadcrumbs='breadcrumbs'></breadcrumb>
      <NavInfo></NavInfo>
    </div>

  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, computed } from 'vue'
import { Expand, Fold } from '@element-plus/icons-vue'
import NavInfo from './user-info.vue'
import Breadcrumb, { breadtype } from '@/base-ui/breadcrumb/index'
import { pathMapBreadcrumbs } from '@/utils/map-menus'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'nav-header',
  emits: ['foldChange'],
  components: {
    Breadcrumb,
    Expand,
    Fold,
    NavInfo

  },
  setup(props, { emit }) {
    //伸缩按钮
    let ExpandB = ref(false)
    const ExpandIconClick = () => {
      ExpandB.value = !ExpandB.value
      emit('foldChange', ExpandB.value)
    }

    //面包屑
    const breadcrumbs = computed(() => {
      const store = useStore()
      const usermuens = store.state.Login.UserMenu
      const route = useRoute()
      const breadpath = route.path
      return pathMapBreadcrumbs(usermuens, breadpath)
    })
    return {
      ExpandB,
      ExpandIconClick,
      breadcrumbs
    }
  }
})
</script>

<style scoped>
.nav-header {
  display: flex;
  width: 100%;
}

.fold-menu {
  cursor: pointer;
  display: flex;
  top: 10px;
}

.content {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
}
</style>