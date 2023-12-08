import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Breadcrumb from './src/breadcrumb.vue'
import BreadcrumbItem from './src/breadcrumb-item.vue'

export const HcBreadcrumb = withInstall(Breadcrumb, {
  BreadcrumbItem,
})
export const HcBreadcrumbItem = withNoopInstall(BreadcrumbItem)
export default HcBreadcrumb

export * from './src/breadcrumb'
export * from './src/breadcrumb-item'
export * from './src/constants'
export type {
  BreadcrumbInstance,
  BreadcrumbItemInstance,
} from './src/instances'
