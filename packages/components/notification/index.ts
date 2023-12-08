import { withInstallFunction } from '@hicor-ui/utils'

import Notify from './src/notify'

export const HcNotification = withInstallFunction(Notify, '$notify')
export default HcNotification

export * from './src/notification'
