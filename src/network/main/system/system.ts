import HYRequest from '@/network'

export function getPageListData(url: string, queryInfo: any) {
  // console.log(url)
  // console.log(queryInfo)
  return HYRequest.post<any>({
    url: url,
    data: queryInfo
  })
}

// url:/users/id
export function PageDeleteData(url: string) {
  return HYRequest.delete<any>({
    url: url
  })
}
