import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Skeleton from './src/skeleton.vue'
import SkeletonItem from './src/skeleton-item.vue'

export const HcSkeleton = withInstall(Skeleton, {
  SkeletonItem,
})
export const HcSkeletonItem = withNoopInstall(SkeletonItem)
export default HcSkeleton

export * from './src/skeleton'
export * from './src/skeleton-item'
