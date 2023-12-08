import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Select from './src/select.vue'
import Option from './src/option.vue'
import OptionGroup from './src/option-group.vue'

export const HcSelect = withInstall(Select, {
  Option,
  OptionGroup,
})
export default HcSelect
export const HcOption = withNoopInstall(Option)
export const HcOptionGroup = withNoopInstall(OptionGroup)

export * from './src/token'
