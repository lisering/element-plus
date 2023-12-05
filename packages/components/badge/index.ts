import { withInstall } from '@hicor-ui/utils'

import Badge from './src/badge.vue'

export const ElBadge = withInstall(Badge)
export default ElBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
