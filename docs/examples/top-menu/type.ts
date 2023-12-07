// 菜单数据类型
export interface MenuFunctionsInterface {
  id: string
  parentId: string
  systemId: string
  funcType: string
  funcCode: string
  funcName: string
  funcSort: string
  funcHome: string
  funcParam: string | null
  enableFlag: string
  pyCode: string | null
  wbCode: string | null
  funcIcon: string | null
  funcPath: string | null
  sysCode: string
  isOpen?: boolean
  url?: string
  iconClass?: string
  sysIdentifier?: string
  // meta: { title: string };
  children?: MenuFunctionsInterface[] | null
}
