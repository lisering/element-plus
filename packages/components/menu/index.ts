import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Menu from './src/menu'
import MenuItem from './src/menu-item.vue'
import MenuItemGroup from './src/menu-item-group.vue'
import SubMenu from './src/sub-menu'

export const HcMenu = withInstall(Menu, {
  MenuItem,
  MenuItemGroup,
  SubMenu,
})
export default HcMenu
export const HcMenuItem = withNoopInstall(MenuItem)
export const HcMenuItemGroup = withNoopInstall(MenuItemGroup)
export const HcSubMenu = withNoopInstall(SubMenu)

export * from './src/menu'
export * from './src/menu-item'
export * from './src/menu-item-group'
export * from './src/sub-menu'
export * from './src/types'
export * from './src/instance'
