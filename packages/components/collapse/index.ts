import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Collapse from './src/collapse.vue'
import CollapseItem from './src/collapse-item.vue'

export const HcCollapse = withInstall(Collapse, {
  CollapseItem,
})
export default HcCollapse
export const HcCollapseItem = withNoopInstall(CollapseItem)

export * from './src/collapse'
export * from './src/collapse-item'
export * from './src/constants'
export type { CollapseInstance, CollapseItemInstance } from './src/instance'
