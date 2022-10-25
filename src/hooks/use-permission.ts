import { useStore } from 'vuex'

// 权限查找
export function usePermission(pageName: string, hanldeName: string) {
  const store = useStore()
  const permissions = store.state.Login.permission
  const verifyPermission = `system:${pageName}:${hanldeName}`
  return !!permissions.find((item: any) => item === verifyPermission)
}
