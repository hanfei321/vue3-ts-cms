export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '部门名称', minWidth: '100' },
    { prop: 'leader', label: '部门领导', minWidth: '100' },
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
  title: '部门列表'
}
