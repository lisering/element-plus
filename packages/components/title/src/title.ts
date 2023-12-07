import { buildProps } from '@hicor-ui/utils'
import type { ExtractPropTypes } from 'vue'

export const titleProps = buildProps({
  fontSize: {
    type: String,
    default: '16px',
  },
  title: {
    type: String,
    default: 'title',
  },
} as const)

export type TitleProps = ExtractPropTypes<typeof titleProps>
