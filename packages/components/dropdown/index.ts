import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Dropdown from './src/dropdown.vue'
import DropdownItem from './src/dropdown-item.vue'
import DropdownMenu from './src/dropdown-menu.vue'

export const HcDropdown = withInstall(Dropdown, {
  DropdownItem,
  DropdownMenu,
})
export default HcDropdown
export const HcDropdownItem = withNoopInstall(DropdownItem)
export const HcDropdownMenu = withNoopInstall(DropdownMenu)
export * from './src/dropdown'
export * from './src/instance'
export * from './src/tokens'
