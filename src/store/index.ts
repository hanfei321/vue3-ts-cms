import { createStore } from 'vuex'
import { IRootState } from '@/store/type'
import Login from './login/login'
import system from '@/store/main/system/system'
import * as url from 'url'
import { getPageListData } from '@/network/main/system/system'

const store = createStore<IRootState>({
  state: {
    name: 'coderwhy',
    age: 18,
    entireDepartment: [],
    entireRole: []
  },
  mutations: {
    changeDepData(state, depList) {
      state.entireDepartment = depList
    },
    changeRoleData(state, roleList) {
      state.entireRole = roleList
    }
  },
  actions: {
    async getInitialDataAction({ commit }) {
      const pageDepResult = await getPageListData('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: depList } = pageDepResult.data

      const pageRoleResult = await getPageListData('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: roleList } = pageRoleResult.data
      commit('changeDepData', depList)
      commit('changeRoleData', roleList)
    }
  },
  modules: {
    Login,
    system
  }
})

export function setupStore() {
  store.dispatch('Login/loadLogin')
  store.dispatch('getInitialDataAction')
}

export default store
