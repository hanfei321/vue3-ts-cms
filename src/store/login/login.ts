import { Module } from 'vuex'
import { ILoginState } from '@/store/login/type'
import { IRootState } from '@/store/type'
import {
  accountLoginRequest,
  userInfoByIdRequest,
  userMenusByIdRequest
} from '@/network/login/login'
import { IAccount } from '@/network/login/type'
import LocalCache from '@/utils/cache'
import router from '@/router'
import { mapMenusToRoutes } from '@/utils/map-menus'

const Login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userInfo: {},
      UserMenu: []
    }
  },
  getters: {},
  mutations: {
    cacheToken(state, token: string) {
      state.token = token
      console.log(token)
    },
    cacheUserInfo(state, UserInfo: any) {
      state.userInfo = UserInfo
    },
    cacheUserMenus(state, UserMenu: any) {
      state.UserMenu = UserMenu

      const routes = mapMenusToRoutes(UserMenu)
      // console.log(routes)
      // 遍历routes，把每个元素动态给main下子路由
      routes.forEach((route) => {
        router.addRoute('main', route)
      })
    }
  },
  actions: {
    // 登录请求
    async accountLoginAction({ commit }, payload: IAccount) {
      const LoginRequset = await accountLoginRequest(payload)
      const { id, token } = LoginRequset.data
      commit('cacheToken', token)
      LocalCache.setCache('token', token)

      //用户信息请求
      const UserInfoRequest = await userInfoByIdRequest(id)
      const UserInfo = UserInfoRequest.data
      // 我们也需要缓存userinfo，因为我们希望用户之前登录过，不用再登录，先保存用户信息
      LocalCache.setCache('userinfo', UserInfo)
      commit('cacheUserInfo', UserInfo)

      //用户菜单请求
      const UserMenusRequest = await userMenusByIdRequest(UserInfo.role.id)
      const UserMenus = UserMenusRequest.data
      commit('cacheUserMenus', UserMenus)
      LocalCache.setCache('UserMenus', UserMenus)

      //跳转到首页
      router.push('/main')
    },
    loadLogin({ commit }) {
      const token = LocalCache.getCache('token')
      if (token) {
        commit('cacheToken', token)
      }
      const UserInfo = LocalCache.getCache('userinfo')
      if (UserInfo) {
        commit('cacheUserInfo', UserInfo)
      }
      const UserMenus = LocalCache.getCache('UserMenus')
      if (UserMenus) {
        commit('cacheUserMenus', UserMenus)
      }
    }
  }
}

export default Login
