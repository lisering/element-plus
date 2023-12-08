import { withInstallFunction } from '@hicor-ui/utils'

import Message from './src/method'

export const HcMessage = withInstallFunction(Message, '$message')
export default HcMessage

export * from './src/message'
