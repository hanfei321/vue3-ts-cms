import { RouteRecordRaw } from 'vue-router'
import { breadtype } from '@/base-ui/breadcrumb'

let fristmenu: any = null

export function mapMenusToRoutes(userMenus: any[]): RouteRecordRaw[] {
  const routes: RouteRecordRaw[] = []

  //1,先加载所有的routes
  const allRoutes: RouteRecordRaw[] = []
  // webpack函数require.context,  在路径../router/main  查找.ts  是否向下查找true
  const routeFiles = require.context('../router/main', true, /\.ts/)
  //遍历
  routeFiles.keys().forEach((key) => {
    //拼接 例如 .      ../router/main /analysis/dashboard/dashboard      .ts
    // console.log(key)
    const route = require('../router/main' + key.split('.')[1])
    allRoutes.push(route.default)
  })
  console.log(allRoutes)
  //拿用户的菜单和所有路由映射中的path做对比，找出添加到routes中返回出去
  const _recurseGetRoute = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 2) {
        const route = allRoutes.find((route) => route.path === menu.url)
        if (route) {
          routes.push(route)
        }
        //保存第一个菜单，做/main的路由重定向
        if (!fristmenu) {
          fristmenu = menu
        }
      } else {
        //递归
        _recurseGetRoute(menu.children)
      }
    }
  }

  _recurseGetRoute(userMenus)

  return routes
}

//面包屑取菜单name
export function pathMapBreadcrumbs(usermenu: any, currentpath: string) {
  const breadcrumbs: breadtype[] = []
  pathmaptomenu(usermenu, currentpath, breadcrumbs)
  return breadcrumbs
}

//解决刷新后active问题
export function pathmaptomenu(
  usermenu: any,
  currentpath: string,
  breadcrumbs?: breadtype[]
): any {
  for (const item of usermenu) {
    if (item.type === 1) {
      const findmenu = pathmaptomenu(item.children ?? [], currentpath)
      if (findmenu) {
        breadcrumbs?.push({ name: item.name })
        breadcrumbs?.push({ name: findmenu.name })
        return findmenu
      }
    } else if (item.type === 2 && item.url === currentpath) {
      return item
    }
  }
}

export { fristmenu }
