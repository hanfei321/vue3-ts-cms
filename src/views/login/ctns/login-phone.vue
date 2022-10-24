<template>
  <div class='login-account'>
    <el-form label-width='65px' :rules='rules' :model='phone'>
      <el-form-item label='手机号' prop='num'>
        <el-input v-model='phone.num'></el-input>
      </el-form-item>
      <el-form-item label='验证码' prop='code'>
        <div class='get-code'>
          <el-input v-model='phone.code'></el-input>
          <el-button type='primary' class='get-btn'>获取验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang='ts'>
import { reactive, ref } from 'vue'
import { rules } from '@/views/login/config/phone-config'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'login-phone',
  setup() {
    const phone = reactive({
      num: '',
      code: ''
    })


    return {
      phone,
      rules
    }
  }
})
</script>

<style scoped>
.get-code {
  display: flex;
}

.get-btn {
  margin-left: 30px;
}
</style>