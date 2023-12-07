import { buildProps, definePropType, isString } from '@hicor-ui/utils'
import type { ExtractPropTypes } from 'vue'
import type TopMenu from './top-menu.vue'
import type { MenuFunctionsInterface } from './type'

export const topMenuProps = buildProps({
  normalMenuList: {
    type: definePropType<MenuFunctionsInterface[]>(Array),
    default: () => [] as MenuFunctionsInterface[],
  },
} as const)
export type TopMenuProps = ExtractPropTypes<typeof topMenuProps>

export const topMenuEmits = {
  handleSelect: (index: string) => isString(index),
}

export type TopMenuEmits = typeof topMenuEmits

export type TopMenuInstance = InstanceType<typeof TopMenu>
