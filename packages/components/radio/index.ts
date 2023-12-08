import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Radio from './src/radio.vue'
import RadioButton from './src/radio-button.vue'
import RadioGroup from './src/radio-group.vue'

export const HcRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup,
})
export default HcRadio
export const HcRadioGroup = withNoopInstall(RadioGroup)
export const HcRadioButton = withNoopInstall(RadioButton)

export * from './src/radio'
export * from './src/radio-group'
export * from './src/radio-button'
export * from './src/constants'
