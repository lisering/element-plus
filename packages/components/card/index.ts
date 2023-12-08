import { withInstall } from '@hicor-ui/utils'

import Card from './src/card.vue'

export const HcCard = withInstall(Card)
export default HcCard

export * from './src/card'
export type { CardInstance } from './src/instance'
