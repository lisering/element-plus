import { withInstall } from '@hicor-ui/utils'

import Badge from './src/badge.vue'

export const HcBadge = withInstall(Badge)
export default HcBadge

export * from './src/badge'
export type { BadgeInstance } from './src/instance'
