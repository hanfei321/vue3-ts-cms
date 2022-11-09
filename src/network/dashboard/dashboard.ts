import hyrequset from '@/network/index'

enum DashboardAPI {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale'
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
