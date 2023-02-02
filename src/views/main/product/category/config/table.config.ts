export const contentTableConfig = {
  propList: [
    { prop: 'id', label: '编号', minWidth: '100' },
    { prop: 'name', label: '商品分类', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '115',
      slotname: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '115',
      slotname: 'updateAt'
    },
    { label: '操作', minWidth: '110', slotname: 'handler' }
  ],
  showIndexColumn: true,
  showselectcolumn: true,
  title: '商品列表'
}
