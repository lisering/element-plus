import { componentSizeMap } from '@hicor-ui/constants'

import type { ComponentSize } from '@hicor-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
