import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Steps from './src/steps.vue'
import Step from './src/item.vue'

export const HcSteps = withInstall(Steps, {
  Step,
})
export default HcSteps
export const HcStep = withNoopInstall(Step)

export * from './src/item'
export * from './src/steps'
