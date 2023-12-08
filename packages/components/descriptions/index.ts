import { withInstall, withNoopInstall } from '@hicor-ui/utils'

import Descriptions from './src/description.vue'
import DescriptionsItem from './src/description-item'

export const HcDescriptions = withInstall(Descriptions, {
  DescriptionsItem,
})

export const HcDescriptionsItem = withNoopInstall(DescriptionsItem)

export default HcDescriptions

export * from './src/description'
