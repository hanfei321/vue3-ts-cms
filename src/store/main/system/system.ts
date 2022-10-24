import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { systemstate } from '@/store/main/system/type'
import { getPageListData } from '@/network/main/system/system'

const systemModule: Module<systemstate, IRootState> = {
  namespaced: true,
  state() {
    return {
      userList: [],
      userCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  getters: {
    pageListData(state) {
      return (pageName: string) => {
        switch (pageName) {
          case 'user':
            return state.userList
            break
          case 'role':
            return state.roleList
            break
        }
      }
    }
  },
  mutations: {
    changeUserList(state, userlist: any[]) {
      state.userList = userlist
    },
    changeUserCount(state, totalCount: number) {
      state.userCount = totalCount
    },
    changeRoleList(state, rolelist: any[]) {
      state.roleList = rolelist
    },
    changeRoleCount(state, roleCount: number) {
      state.roleCount = roleCount
    }
  },
  actions: {
    async getPageLisitAction({ commit }, payload: any) {
      console.log(payload.pageName)
      const pageName = payload.pageName
      let pageUrl = ''
      switch (pageName) {
        case 'user':
          pageUrl = '/users/list'
          break
        case 'role':
          pageUrl = '/role/list'
      }

      //对页面发出请求
      const pageResult = await getPageListData(pageUrl, payload.queryInfo)
      const { list, totalCount } = pageResult.data
      console.log(pageResult.data)
      switch (pageName) {
        case 'user':
          commit('changeUserList', list)
          commit('changeUserCount', totalCount)
          break
        case 'role':
          commit('changeRoleList', list)
          commit('changeRoleCount', totalCount)
          break
      }
    }
  }
}
export default systemModule
