import { Module } from 'vuex'
import { IRootState } from '@/store/type'
import { IDashboardState } from './type'
import {
  addressGoodsSale,
  categoryGoodsFavor,
  categoryGoodsSale,
  getcategoryGoodsCount,
  getAmountList
} from '@/network/dashboard/dashboard'

const Dashboard: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      topPanelDatas: [],
      categoryGoodsCount: [],
      categoryGoodsFavor: [],
      categoryGoodsSale: [],
      addressGoodsSale: []
    }
  },
  getters: {},
  mutations: {
    changeTopPanelDatas(state, list: any[]) {
      debugger
      state.topPanelDatas = list
    },
    changeCategoryCount(state, list: any[]) {
      state.categoryGoodsCount = list
    },

    changeCategoryFavor(state, list: any[]) {
      state.categoryGoodsFavor = list
    },
    changeCategorySale(state, list: any[]) {
      state.categoryGoodsSale = list
    },
    changeAddressSale(state, list: any[]) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const resultTopPanelDatas = await getAmountList()
      commit('changeTopPanelDatas', resultTopPanelDatas.data)

      const categoryCountResult = await getcategoryGoodsCount()
      commit('changeCategoryCount', categoryCountResult.data)

      const categoryFavorResult = await categoryGoodsFavor()
      commit('changeCategoryFavor', categoryFavorResult.data)

      const categorySaleResult = await categoryGoodsSale()
      commit('changeCategorySale', categorySaleResult.data)

      const addressSaleResult = await addressGoodsSale()
      commit('changeAddressSale', addressSaleResult.data)
    }
  }
}
export default Dashboard
