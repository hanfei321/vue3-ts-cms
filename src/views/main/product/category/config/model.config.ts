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
      label: '商品类别',
      placeholder: '请输入商品类别'
    },
  ]
}
