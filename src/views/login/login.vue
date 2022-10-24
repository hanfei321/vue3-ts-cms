<template>
  <div class='login'>
    <Panel></Panel>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Panel from './ctns/login-panel.vue'

export default defineComponent({
  name: 'login',
  components: {
    Panel
  }
})
</script>

<style scoped>
.login {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  background: url('../../assets/img/login-bg.svg');

}

</style>