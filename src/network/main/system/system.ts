import HYRequest from '@/network'
import qs from 'qs'
export function getPageListData(url: string, queryInfo: any) {
  // console.log(url)
  // console.log(queryInfo)
  return HYRequest.post<any>({
    url: url,
    // headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: queryInfo
  })
}

// url:/users/id
export function PageDeleteData(url: string) {
  return HYRequest.delete<any>({
    url: url
  })
}

export function PageNewData(url: string, newData: any) {
  return HYRequest.post<any>({
    url: url,
    data: newData
  })
}

export function PageEditData(url: string, editData: any) {
  return HYRequest.patch<any>({
    url: url,
    data: editData
  })
}
