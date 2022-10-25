export const contentTableConfig = {
  propList: [
    { prop: 'name', label: '菜单名称', minWidth: '100' },
    { prop: 'type', label: '菜单类型', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    {
      prop: 'permission',
      label: '按钮权限',
      minWidth: '80'
    },
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
  showIndexColumn: false,
  showselectcolumn: false,
  title: '菜单列表',
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  },
  showFooter: false
}
