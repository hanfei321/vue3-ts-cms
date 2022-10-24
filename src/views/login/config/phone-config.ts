export const rules = {
  num: [
    {
      required: true,
      message: '手机号是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11,}$/,
      message: '手机号必须是11个数字~',
      trigger: 'blur'
    }
  ],
  code: [
    {
      required: true,
      message: '验证码是必传内容~',
      trigger: 'blur'
    },

    {
      pattern: /^[0-9]{6,}$/,
      message: '手机号必须是6个数字~',
      trigger: 'blur'
    }
  ]
}