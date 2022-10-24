<template>
  <div class='login-panel'>
    <h1 class='title'>超级后台管理系统</h1>
    <el-tabs type='border-card' class='demo-tabs' stretch v-model='currentTab'>
      <el-tab-pane name='account'>
        <template #label>
        <span class='custom-tabs-label'>
          <el-icon size='20px' class='login-icon'>
            <svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' data-v-029747aa=''><path fill='currentColor'
                                                                                                     d='M512 512a192 192 0 1 0 0-384 192 192 0 0 0 0 384zm0 64a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0z'></path></svg>
          </el-icon>
          <span>账号登录</span>
        </span>
        </template>
        <Account ref='AccountRef' />
      </el-tab-pane>
      <el-tab-pane name='phone'>
        <template #label>
        <span class='custom-tabs-label'>
          <el-icon size='20px' class='login-icon'>
            <svg viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg' data-v-029747aa=''><path fill='currentColor'
                                                                                                     d='M224 768v96.064a64 64 0 0 0 64 64h448a64 64 0 0 0 64-64V768H224zm0-64h576V160a64 64 0 0 0-64-64H288a64 64 0 0 0-64 64v544zm32 288a96 96 0 0 1-96-96V128a96 96 0 0 1 96-96h512a96 96 0 0 1 96 96v768a96 96 0 0 1-96 96H256zm304-144a48 48 0 1 1-96 0 48 48 0 0 1 96 0z'></path></svg>
          </el-icon>
          <span>手机登录</span>
        </span>
        </template>
        <Phone></Phone>
      </el-tab-pane>
    </el-tabs>
    <div class='login-check'>
      <el-checkbox v-model='checkedpassword'>记住密码</el-checkbox>
      <el-link type='primary'>忘记密码</el-link>
    </div>
    <el-button type='primary' class='login-btn' @click='handLoginClick'>立即登录</el-button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Account from './login-account.vue'
import Phone from './login-phone.vue'
import { ref } from 'vue'


export default defineComponent({
  name: 'login-panel',
  components: {
    Account,
    Phone
  },
  setup() {
    //定义属性
    const checkedpassword = ref(true)
    const AccountRef = ref<InstanceType<typeof Account>>()
    const currentTab = ref<string>('account')
    //定义方法
    const handLoginClick = () => {
      console.log('立即登录')

      //区分账号登录手机登录
      if (currentTab.value === 'account') {
        // 可选链 value有值调用LonginAction 好处是不会出现后面写错等低级错误
        AccountRef.value?.LonginAction(checkedpassword.value)
      } else {
        console.log('调用手机')
      }
    }
    return {
      checkedpassword,
      AccountRef,
      currentTab,
      handLoginClick
    }
  }
})
</script>

<style scoped>
.login-panel {
  margin-bottom: 150px;
  width: 420px;

}

.title {
  text-align: center;
}

.login-btn {
  font-size: 18px;
  width: 100%;
  height: 40px;
  margin-top: 20px;
}

.login-check {
  display: flex;
  justify-content: space-between;
}

.login-icon {
  top: 4px;
  right: 5px;
}

</style>