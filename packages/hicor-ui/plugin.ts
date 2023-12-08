import { HcInfiniteScroll } from '@hicor-ui/components/infinite-scroll'
import { HcLoading } from '@hicor-ui/components/loading'
import { HcMessage } from '@hicor-ui/components/message'
import { HcMessageBox } from '@hicor-ui/components/message-box'
import { HcNotification } from '@hicor-ui/components/notification'
import { HcPopoverDirective } from '@hicor-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  HcInfiniteScroll,
  HcLoading,
  HcMessage,
  HcMessageBox,
  HcNotification,
  HcPopoverDirective,
] as Plugin[]
