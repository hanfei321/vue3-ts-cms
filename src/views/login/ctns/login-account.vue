<template>
  <div class="login-account">
    <el-form label-width="55px" :rules="rules" :model="account" ref="formRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { reactive, ref } from 'vue'
import { rules } from '@/views/login/config/account-config'
import { defineComponent } from 'vue'
import { ElForm } from 'element-plus'
import LocalCache from '@/utils/cache'
import useStore from '@/store/index'

export default defineComponent({
  name: 'login-account',
  components: {},
  setup() {
    const store = useStore
    const account = reactive({
      //设置获取本地缓存的值赋值，如果没有， 默认 ''
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const LonginAction = (checkedpassword: Boolean) => {
      console.log('真正登录')
      formRef.value?.validate((valid) => {
        //判断验证检索
        if (valid) {
          //判断记住密码
          if (checkedpassword) {
            //本地缓存
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            //否则删除缓存

            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          //vuex
          store.dispatch('Login/accountLoginAction', { ...account })
        }
      })
    }

    return {
      account,
      rules,
      LonginAction,
      formRef,
      store
    }
  }
})
</script>

<style scoped></style>
