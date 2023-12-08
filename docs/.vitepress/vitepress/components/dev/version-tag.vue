<script lang="ts" setup>
defineProps<{
  version: string
}>()
</script>

<template>
  <hc-tag size="small" effect="plain" hit round class="ml-2">
    {{ version }}
  </hc-tag>
</template>
