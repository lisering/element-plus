import { withInstall, withNoopInstall } from '@hicor-ui/utils'
import Button from './src/button.vue'
import ButtonGroup from './src/button-group.vue'

export const HcButton = withInstall(Button, {
  ButtonGroup,
})
export const HcButtonGroup = withNoopInstall(ButtonGroup)
export default HcButton

export * from './src/button'
export * from './src/constants'
export type { ButtonInstance, ButtonGroupInstance } from './src/instance'
