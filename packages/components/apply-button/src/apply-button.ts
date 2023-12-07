import { buildProps, isBoolean, isString } from '@hicor-ui/utils'

import type { ExtractPropTypes } from 'vue'
import type ApplyButton from './apply-button.vue'

export const applyButtonProps = buildProps({
  text: {
    type: String,
    default: '执业医生注册申请',
  },
  iconName: {
    type: String,
    default: 'icon-qianshou',
  },
  type: {
    type: String,
    default: '111',
  },
  colorType: {
    type: String,
    default: 'blue-box', // or green-box
  },
  miniButton: {
    type: Boolean,
    default: false,
  },
  iconType: {
    type: String,
    default: 'iconfont',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
})

export const applyButtonEmits = {
  buttonClick: (type: string, flag: boolean) =>
    isString(type) && isBoolean(flag),
}

export type ApplyButtonProps = ExtractPropTypes<typeof applyButtonProps>
export type ApplyButtonEmits = typeof applyButtonEmits
export type ApplyButtonInstance = InstanceType<typeof ApplyButton>
