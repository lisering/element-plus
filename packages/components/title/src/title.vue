<template>
  <div
    :class="ns.b()"
    :style="{
      'font-size': props.fontSize,
    }"
  >
    <span :class="[ns.m('txt')]">{{ props.title }}</span>
    <slot :class="[ns.m('txt')]" />
  </div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@hicor-ui/hooks'
import { titleProps } from './title'

defineOptions({
  name: 'ElTitle',
})

const ns = useNamespace('title')
const props = defineProps(titleProps)
</script>
