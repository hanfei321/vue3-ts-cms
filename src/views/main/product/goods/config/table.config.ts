export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    { prop: 'oldPrice', label: '原价格', minWidth: '70', slotname: 'oldPrice' },
    { prop: 'newPrice', label: '现价格', minWidth: '70', slotname: 'newPrice' },
    { prop: 'imgUrl', label: '图片', minWidth: '70', slotname: 'imgUrl' },
    { prop: 'status', label: '上架状态', minWidth: '70', slotname: 'status' },
    { prop: 'inventoryCount', label: '库存', minWidth: '70' },
    { prop: 'address', label: '地址', minWidth: '70' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '120',
      slotname: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '120',
      slotname: 'updateAt'
    },
    { label: '操作', minWidth: '120', slotname: 'handler' }
  ],
  showIndexColumn: true,
  showselectcolumn: true,
  title: '角色列表'
}
