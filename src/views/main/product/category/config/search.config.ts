import { IForm } from '@/base-ui/form'

export const SearchFormConfig: IForm = {
  stylewidth: '120px',
  Itemstyle: {
    padding: '10px 50px 0px 20px'
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
