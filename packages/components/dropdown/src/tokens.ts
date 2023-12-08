import type { ComputedRef, InjectionKey, Ref } from 'vue'

export type HcDropdownInjectionContext = {
  contentRef: Ref<HTMLElement | null>
  role: ComputedRef<string>
  triggerId: ComputedRef<string>
  isUsingKeyboard: Ref<boolean>
  onItemLeave: (e: PointerEvent) => void
  onItemEnter: (e: PointerEvent) => void
}

export const DROPDOWN_INJECTION_KEY: InjectionKey<HcDropdownInjectionContext> =
  Symbol('elDropdown')
