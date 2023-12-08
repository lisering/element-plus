import { withInstall } from '@hicor-ui/utils'

import ConfigProvider from './src/config-provider'

export const HcConfigProvider = withInstall(ConfigProvider)
export default HcConfigProvider

export * from './src/config-provider'
export * from './src/config-provider-props'
export * from './src/constants'
export * from './src/hooks/use-global-config'
