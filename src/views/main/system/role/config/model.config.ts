import { IForm } from '@/base-ui/form'

export const ModelFormConfig: IForm = {
  // stylewidth: '120px',
  Itemstyle: {
    padding: '8px 30px 0px 0px'
  },
  colLayout: {
    span: 24
  },
  fromItem: [
    {
      field: 'name',
      type: 'input',
      label: '角色名',
      placeholder: '请输入角色名'
    },
    {
      field: 'intro',
      type: 'input',
      label: '角色介绍',
      placeholder: '请输入角色介绍'
    }
  ]
}
