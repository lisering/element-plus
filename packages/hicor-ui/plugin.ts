import { ElInfiniteScroll } from '@hicor-ui/components/infinite-scroll'
import { ElLoading } from '@hicor-ui/components/loading'
import { ElMessage } from '@hicor-ui/components/message'
import { ElMessageBox } from '@hicor-ui/components/message-box'
import { ElNotification } from '@hicor-ui/components/notification'
import { ElPopoverDirective } from '@hicor-ui/components/popover'

import type { Plugin } from 'vue'

export default [
  ElInfiniteScroll,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElNotification,
  ElPopoverDirective,
] as Plugin[]
