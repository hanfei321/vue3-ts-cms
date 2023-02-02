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
      label: '部门名称',
      placeholder: '请输入部门名称'
    },
    {
      field: 'leader',
      type: 'input',
      label: '部门领导',
      placeholder: '请输入部门领导'
    }
  ]
}
