type IFormType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFormItem {
  field: string
  type: IFormType
  label: string
  placeholder?: any
  //针对select
  option?: any[]
  //针对特殊属性
  otherOptions?: any
  isHidden?: Boolean
}

export interface IForm {
  fromItem: IFormItem[]
  stylewidth?: String
  Itemstyle?: any
  colLayout?: any
}
