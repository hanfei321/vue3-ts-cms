import hyrequset from '@/network/index'
import { IAccount, IDataType, ILoginResult } from '@/network/login/type'

enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //users/1
  LoginMenus = '/role/' //role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyrequset.post<IDataType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function userInfoByIdRequest(id: number) {
  return hyrequset.get<any>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function userMenusByIdRequest(id: number) {
  return hyrequset.get<any>({
    url: LoginAPI.LoginMenus + id + '/menu',
    showLoading: false
  })
}
