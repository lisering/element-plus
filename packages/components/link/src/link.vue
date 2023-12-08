<template>
  <a
    :class="linkKls"
    :href="disabled || !href ? undefined : href"
    @click="handleClick"
  >
    <hc-icon v-if="icon">
      <component :is="icon" />
    </hc-icon>
    <span v-if="$slots.default" :class="ns.e('inner')">
      <slot />
    </span>

    <slot v-if="$slots.icon" name="icon" />
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { HcIcon } from '@hicor-ui/components/icon'
import { useNamespace } from '@hicor-ui/hooks'
import { linkEmits, linkProps } from './link'

defineOptions({
  name: 'HcLink',
})
const props = defineProps(linkProps)
const emit = defineEmits(linkEmits)

const ns = useNamespace('link')

const linkKls = computed(() => [
  ns.b(),
  ns.m(props.type),
  ns.is('disabled', props.disabled),
  ns.is('underline', props.underline && !props.disabled),
])

function handleClick(event: MouseEvent) {
  if (!props.disabled) emit('click', event)
}
</script>
