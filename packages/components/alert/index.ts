import { withInstall } from '@hicor-ui/utils'

import Alert from './src/alert.vue'

export const HcAlert = withInstall(Alert)
export default HcAlert

export * from './src/alert'
export type { AlertInstance } from './src/instance'
