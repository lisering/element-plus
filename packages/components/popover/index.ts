import { withInstall, withInstallDirective } from '@hicor-ui/utils'

import Popover from './src/popover.vue'
import PopoverDirective, { VPopover } from './src/directive'

export const HcPopoverDirective = withInstallDirective(
  PopoverDirective,
  VPopover
)

export const HcPopover = withInstall(Popover, {
  directive: HcPopoverDirective,
})
export default HcPopover

export * from './src/popover'
