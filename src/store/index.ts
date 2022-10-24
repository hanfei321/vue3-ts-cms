import { createStore } from 'vuex'
import { IRootState } from '@/store/type'
import Login from './login/login'
import system from '@/store/main/system/system'

const store = createStore<IRootState>({
  state: {
    name: 'coderwhy',
    age: 18
  },
  mutations: {},
  actions: {},
  modules: {
    Login,
    system
  }
})

export function setupStore() {
  store.dispatch('Login/loadLogin')
}

export default store
