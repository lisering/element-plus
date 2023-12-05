<template>
  <main :class="ns.b()">
    <slot />
  </main>
</template>
<script lang="ts" setup>
import { useNamespace } from '@hicor-ui/hooks'

defineOptions({
  name: 'ElMain',
})

const ns = useNamespace('main')
</script>
