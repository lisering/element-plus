import type { SetupContext } from 'vue'
import type { TopMenuEmits } from './top-menu'

export const useTopMenu = (emit: SetupContext<TopMenuEmits>['emit']) => {
  const handleSelect = (key: string) => {
    emit('handleSelect', key)
  }

  return {
    handleSelect,
  }
}
