<script setup lang="ts">
defineProps<{
  show: boolean
}>()
</script>

<template>
  <Transition name="hc-fade-in">
    <div v-if="show" />
  </Transition>
</template>
