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
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    },
    {
      field: 'oldPrice',
      type: 'input',
      label: '原价格',
      placeholder: '请输入原价格'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '现价格',
      placeholder: '请输入现价格'
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      placeholder: '请输入时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ]
}
