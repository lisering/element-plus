import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  storageKey: 'hc-theme-appearance',
})

export const toggleDark = useToggle(isDark)
