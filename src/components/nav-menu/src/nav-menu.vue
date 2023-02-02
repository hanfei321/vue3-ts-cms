<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="login" class="img" />
      <div class="title">Zlkun Vue3+Ts</div>
    </div>
    <el-menu
      :default-active="defulvalue"
      class="el-menu-vertical"
      :collapse="collapse"
      background-color="#304156"
      text-color="rgb(191, 203, 217)"
      active-text-color="#34495e"
    >
      <template v-for="(meunItem, index) in userMeun" :key="meunItem.id">
        <template v-if="meunItem.type === 1">
          <el-sub-menu :index="meunItem.id + ''">
            <template #title>
              <el-icon>
                <Monitor v-if="index === 0" />
                <Setting v-else-if="index === 1" />
                <Handbag v-else-if="index === 2" />
                <ChatRound v-else-if="index === 3" />
              </el-icon>
              <!--              <el-icon v-else-if='index === 1'>-->
              <!--                <Setting />-->
              <!--              </el-icon>-->
              <!--              <el-icon v-else-if='index === 2'>-->
              <!--                <Handbag />-->
              <!--              </el-icon>-->
              <!--              <el-icon v-else-if='index === 3'>-->
              <!--                <ChatRound />-->
              <!--              </el-icon>-->
              <span>{{ meunItem.name }}</span>
            </template>

            <template v-for="chilItem in meunItem.children" :key="chilItem.id">
              <el-menu-item
                :index="chilItem.id + ''"
                @click="meunurlclick(chilItem)"
              >
                <i v-if="chilItem.icon" :class="chilItem.icon"></i>
                <span>{{ chilItem.name }}</span>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>

        <teleport v-else-if="meunItem.type === 2">
          <el-menu-item :index="meunItem.id + ''">
            <i v-if="meunItem.icon" :class="meunItem.icon"></i>
            <span>{{ meunItem.name }}</span>
          </el-menu-item>
        </teleport>
      </template>
      <el-sub-menu>
        <template #title>
            <el-icon><location /></el-icon>
            <span>Navigator One</span>
          </template>
        <el-menu-item>123</el-menu-item>
      </el-sub-menu>

    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useStore } from 'vuex'
import { Monitor, Setting, Handbag, ChatRound } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { useRoute } from 'vue-router'
import { pathmaptomenu } from '@/utils/map-menus'

export default defineComponent({
  name: 'nav-menu',
  props: {
    collapse: {
      type: Boolean
    }
  },
  components: {
    Monitor,
    Setting,
    Handbag,
    ChatRound
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()
    const routepath = route.path
    const userMeun = computed(() => store.state.Login.UserMenu)
    const menu = pathmaptomenu(userMeun.value, routepath)
    const defulvalue = ref(menu.id + '')
    const meunurlclick = (item: any) => {
      router.push({
        path: item.url ?? '/not-found'
      })
    }

    return {
      userMeun,
      defulvalue,
      menu,
      meunurlclick
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu {
  height: 100%;

  .logo {
    display: flex;
    height: 28px;
    padding: 12px 10px 8px 10px;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 10px;
    }

    .title {
      font-size: 16px;
      font-weight: 700;
      color: white;
    }
  }

  .el-menu {
    border-right: none;
  }

  // 目录
  .el-sub-menu {
    background-color: #001529 !important;
    // 二级菜单 ( 默认背景 )
    .el-menu-item {
      padding-left: 50px !important;
      background-color: #1f2d3d !important;
    }
  }

  ::v-deep .el-sub-menu__title:hover {
    background-color: #263445 !important;
  }

  // hover 高亮
  .el-menu-item:hover {
    color: #fff !important; // 菜单
  }

  .el-menu-item.is-active {
    color: #fff !important;
    background-color: #001528 !important;
  }
}

.el-menu-vertical:not(.el-menu--collapse) {
  width: 100%;
  height: calc(100% - 48px);
}

.el-menu-item.is-active {
  color: rgb(64, 158, 255);
}

.el-sub-menu__title {
}

//.el-menu--collapse .el-sub-menu.is-active .el-sub-menu__title {
//  color: #001528;
//}
//
//.el-sub-menu.is-active .el-sub-menu__title {
//  border-bottom-color: var(--el-menu-active-color);
//}
</style>
