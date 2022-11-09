<template>
  <div class='dashboard'>
    <h2>dashboard1</h2>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'dashboard',
  setup() {
    onMounted(() => {
      const store = useStore()
      store.dispatch('Dashboard/getDashboardDataAction')
    })
    return {}
  }
})
</script>

<style scoped></style>
