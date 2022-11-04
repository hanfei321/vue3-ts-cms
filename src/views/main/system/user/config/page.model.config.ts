export const rules = {
  name: [
    {
      required: true,
      message: '用户名是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5~10个字母或者数字~',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{6,}$/,
      message: '用户名必须是6位以上的字母或者数字~',
      trigger: 'blur'
    }
  ],
  realname: [
    {
      required: true,
      message: '真实姓名是必传内容~',
      trigger: 'blur'
    }
  ],
  cellphone: [
    {
      required: true,
      message: '电话号码是必传内容~',
      trigger: 'blur'
    },
    {
      pattern: /^[0-9]{11,}$/,
      message: '电话号码必须是11位以上的数字~',
      trigger: 'blur'
    }
  ]
}
