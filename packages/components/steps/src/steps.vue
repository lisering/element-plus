<template>
  <div :class="[ns.b(), ns.m(simple ? 'simple' : direction)]">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { getCurrentInstance, provide, watch } from 'vue'
import { CHANGE_EVENT } from '@hicor-ui/constants'
import { useNamespace, useOrderedChildren } from '@hicor-ui/hooks'
import { stepsEmits, stepsProps } from './steps'

import type { StepItemState } from './item.vue'

defineOptions({
  name: 'HcSteps',
})

const props = defineProps(stepsProps)
const emit = defineEmits(stepsEmits)

const ns = useNamespace('steps')
const {
  children: steps,
  addChild: addStep,
  removeChild: removeStep,
} = useOrderedChildren<StepItemState>(getCurrentInstance()!, 'HcStep')

watch(steps, () => {
  steps.value.forEach((instance: StepItemState, index: number) => {
    instance.setIndex(index)
  })
})

provide('HcSteps', { props, steps, addStep, removeStep })

watch(
  () => props.active,
  (newVal: number, oldVal: number) => {
    emit(CHANGE_EVENT, newVal, oldVal)
  }
)
</script>
