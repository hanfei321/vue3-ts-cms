<template>
  <el-dropdown>
    <span class='el-dropdown-link'>
       <span class='el-avatr'>
      <el-avatar :size='35' shape='square'
                 src='https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80' />
        </span>
          <span>{{ username }}</span>
        </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon='User'>个人中心</el-dropdown-item>
        <el-dropdown-item :icon='Paperclip' @click='winOpenClick'>
          项目地址
        </el-dropdown-item>
        <el-dropdown-item :icon='Document' @click='docmentWinOpen'>项目文档</el-dropdown-item>
        <el-dropdown-item :icon='CircleClose' @click='exitClick'>退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { User, Paperclip, CircleClose, Document } from '@element-plus/icons-vue'
import LocalCache from '@/utils/cache'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'user-info',
  setup() {
    const store = useStore()
    const router = useRouter()
    const username = computed(() => store.state.Login.userInfo.name)
    const exitClick = () => {
      LocalCache.deleteCache('token')
      router.push('/main')
    }
    const winOpenClick = () => {
      window.open('https://github.com/hanfei321/vue3-ts-cms.git')
    }
    const docmentWinOpen = () => {
      window.open('/doc/proDoc.html')
    }
    return {
      username,
      User,
      Paperclip,
      CircleClose,
      Document,
      exitClick,
      winOpenClick,
      docmentWinOpen
    }
  }
})
</script>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}

.el-avatr {
  margin: 10px;
  box-shadow: 0 6px 10px 0 #00000024;
  height: 35px;
  border-radius: 3px;

}
</style>