import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { systemstate } from '@/store/main/system/type'
import {
  getPageListData,
  PageDeleteData,
  PageNewData,
  PageEditData
} from '@/network/main/system/system'

const systemModule: Module<systemstate, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}List`]

        // switch (pageName) {
        //   case 'users':
        //     return state.userList
        //     break
        //   case 'role':
        //     return state.roleList
        //     break
        //   case 'goods':
        //     return state.goodsList
        //     break
        //   case 'menu':
        //     return state.menuList
        //     break
        // }
      }
    },
    pageListCount(state) {
      return (pageName: string) => {
        return (state as any)[`${pageName}Count`]

        // switch (pageName) {
        //   case 'users':
        //     return state.userCount
        //     break
        //   case 'role':
        //     return state.roleCount
        //     break
        //   case 'goods':
        //     return state.goodsCount
        //     break
        //   case 'menu':
        //     return state.menuCount
        //     break
        // }
      }
    }
  },
  mutations: {
    changeUsersList(state, userlist: any[]) {
      state.usersList = userlist
    },
    changeUsersCount(state, totalCount: number) {
      state.usersCount = totalCount
    },
    changeRoleList(state, rolelist: any[]) {
      state.roleList = rolelist
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    },
    changeGoodsList(state, goodslist: any[]) {
      state.goodsList = goodslist
    },
    changeGoodsCount(state, goodsCount: number) {
      state.goodsCount = goodsCount
    },
    changeMenuList(state, menulist: any[]) {
      state.menuList = menulist
    },
    changeMenuCount(state, menuCount: number) {
      state.menuCount = menuCount
    }
  },
  actions: {
    async getPageLisitAction({ commit }, payload: any) {
      console.log(payload.pageName)
      const pageName = payload.pageName
      const pageUrl = `/${pageName}/list`

      // switch (pageName) {
      //   case 'users':
      //     pageUrl = '/users/list'
      //     break
      //   case 'role':
      //     pageUrl = '/role/list'
      //     break
      //   case 'goods':
      //     pageUrl = '/goods/list'
      //     break
      //   case 'menu':
      //     pageUrl = '/menu/list'
      // }

      //?????????????????????
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      console.log(pageResult.data)

      //?????????????????????  ??????????????????state???
      const changePageName =
        pageName.slice(0, 1).toUpperCase() + pageName.slice(1)

      commit(`change${changePageName}List`, list)
      commit(`change${changePageName}Count`, totalCount)

      //swich??????
      // switch (pageName) {
      //   case 'user':
      //     commit('changeUserList', list)
      //     commit('changeUserCount', totalCount)
      //     break
      //   case 'role':
      //     commit('changeRoleList', list)
      //     commit('changeRoleCount', totalCount)
      //     break
      // }
    },

    async deletePageDataAction({ dispatch }, payload: any) {
      //1,pagename
      //2,id
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      //????????????????????????
      await PageDeleteData(pageUrl)
      //????????????????????????
      dispatch('getPageLisitAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createPageDataAction({ dispatch }, payload: any) {
      const { pageName, newData } = payload
      const pageUrl = `/${pageName}`
      await PageNewData(pageUrl, newData)

      //????????????????????????
      dispatch('getPageLisitAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async EditPageDataAction({ dispatch }, payload: any) {
      const { pageName, editData, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await PageEditData(pageUrl, editData)

      //????????????????????????
      dispatch('getPageLisitAction', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
