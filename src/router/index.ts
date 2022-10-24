import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LocalCache from '@/utils/cache'
import { fristmenu } from '@/utils/map-menus'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    name: 'main',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/no-found.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = LocalCache.getCache('token')
    if (!token) {
      return '/login'
    }
  }
  //重定向
  if (to.path === '/main') {
    return fristmenu.url
  }
})
export default router
