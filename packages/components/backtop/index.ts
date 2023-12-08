import { withInstall } from '@hicor-ui/utils'

import Backtop from './src/backtop.vue'

export const HcBacktop = withInstall(Backtop)
export default HcBacktop

export * from './src/backtop'
export type { BacktopInstance } from './src/instance'
