import hyrequset from '@/network/index'

enum DashboardAPI {
  amountList = '/goods/amount/list',
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
}
export function getAmountList() {
  return hyrequset.get({
    url: DashboardAPI.amountList
  })
}


export function getcategoryGoodsCount() {
  return hyrequset.get({
    url: DashboardAPI.categoryGoodsCount
  })
}

export function categoryGoodsSale() {
  return hyrequset.get({
    url: DashboardAPI.categoryGoodsSale
  })
}

export function categoryGoodsFavor() {
  return hyrequset.get({
    url: DashboardAPI.categoryGoodsFavor
  })
}

export function addressGoodsSale() {
  return hyrequset.get({
    url: DashboardAPI.addressGoodsSale
  })
}
