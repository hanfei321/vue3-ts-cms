import HYRequest from '@/network'

export function getPageListData(url: string, queryInfo: any) {
  return HYRequest.post<any>({
    url: url,
    data: queryInfo
  })
}
