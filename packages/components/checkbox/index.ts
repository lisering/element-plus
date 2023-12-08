import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Checkbox from './src/checkbox.vue'
import CheckboxButton from './src/checkbox-button.vue'
import CheckboxGroup from './src/checkbox-group.vue'

export const HcCheckbox = withInstall(Checkbox, {
  CheckboxButton,
  CheckboxGroup,
})
export default HcCheckbox

export const HcCheckboxButton = withNoopInstall(CheckboxButton)
export const HcCheckboxGroup = withNoopInstall(CheckboxGroup)

export * from './src/checkbox-group'
export * from './src/checkbox'
export * from './src/constants'
