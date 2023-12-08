import { SortDown, SortUp } from '@element-plus/icons-vue'
import HcIcon from '@hicor-ui/components/icon'
import { SortOrder } from '../constants'

import type { FunctionalComponent } from 'vue'

export type SortIconProps = {
  sortOrder: SortOrder
  class?: JSX.IntrinsicAttributes['class']
}

const SortIcon: FunctionalComponent<SortIconProps> = (props) => {
  const { sortOrder } = props

  return (
    <HcIcon size={14} class={props.class}>
      {sortOrder === SortOrder.ASC ? <SortUp /> : <SortDown />}
    </HcIcon>
  )
}

export default SortIcon
