import { withInstall } from '@hicor-ui/utils'
import Popper from './src/popper.vue'

import HcPopperArrow from './src/arrow.vue'
import HcPopperTrigger from './src/trigger.vue'
import HcPopperContent from './src/content.vue'

export { HcPopperArrow, HcPopperTrigger, HcPopperContent }

export const HcPopper = withInstall(Popper)
export default HcPopper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

export type { Placement, Options } from '@popperjs/core'
