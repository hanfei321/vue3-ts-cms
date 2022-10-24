export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '用户名', minWidth: '100' },
    { prop: 'realname', label: '真实姓名', minWidth: '100' },
    { prop: 'cellphone', label: '手机号码', minWidth: '100' },
    { prop: 'enable', label: '状态', minWidth: '80', slotname: 'status' },
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
  title: '用户列表'
}
