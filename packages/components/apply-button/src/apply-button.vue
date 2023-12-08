<script lang="ts" setup>
import { useNamespace } from '@hicor-ui/hooks'
import { applyButtonEmits, applyButtonProps } from './apply-button'
import { useApplyButton } from './use-apply-button'

defineOptions({
  name: 'HcApplyButton',
})

const ns = useNamespace('apply-button')
const props = defineProps(applyButtonProps)
const emit = defineEmits(applyButtonEmits)

const { buttonClick } = useApplyButton(emit)
</script>

<template>
  <div
    :class="{
      [ns.b()]: true,
      [props.colorType]: true,
      'disabled-btn': props.disabled,
    }"
    @click="buttonClick(props.type, props.disabled)"
  >
    <div :class="{ [ns.m('icon-box')]: true, 'bor-none': props.miniButton }">
      <i :class="`icon ${props.iconType} ${props.iconName}`" />
    </div>
    <div v-if="!props.miniButton" class="text-info">
      {{ props.text }}
    </div>
  </div>
</template>
