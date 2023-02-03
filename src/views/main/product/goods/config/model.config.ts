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
      label: '商品名称',
      placeholder: '请输入商品名称'
    },
    {
      field: 'newPrice',
      type: 'input',
      label: '商品价格',
      placeholder: '请输入商品价格'
    },
    {
      field: 'address',
      type: 'input',
      label: '地址',
      placeholder: '请输入地址'
    },
    {
      field: 'inventoryCount',
      type: 'input',
      label: '库存',
      placeholder: '请输入库存数量'
    },
    {
      field: 'status',
      type: 'input',
      label: '上架状态',
      placeholder: '请输入库存数量'
    },
    {
      field: 'imgUrl',
      type: 'input',
      label: '照片路径',
      placeholder: '请输入库存数量'
    },

  ]
}
