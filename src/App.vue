<template>
  <div class='app'>
    <el-config-provider :locale='locale'>
      <router-view />
    </el-config-provider>
  </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import { computed, ref } from 'vue'
import { zhCn } from 'element-plus/lib/locale'
import { en } from 'element-plus/lib/locale'

export default defineComponent({
  name: 'app',
  setup() {
    const language = ref('zh-cn')
    const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

    return {
      language,
      locale
    }
  }
})
</script>
<style lang='less'>


.app {
  height: 100%;
}
</style>
