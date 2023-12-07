import type { SetupContext } from 'vue'
import type { ApplyButtonEmits } from './apply-button'

export const useApplyButton = (
  emit: SetupContext<ApplyButtonEmits>['emit']
) => {
  const buttonClick = (type: string, flag: boolean) => {
    if (flag) {
      return
    }
    emit('buttonClick', type, flag)
  }
  return {
    buttonClick,
  }
}
