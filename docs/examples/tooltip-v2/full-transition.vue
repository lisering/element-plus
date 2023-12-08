<template>
  <hc-tooltip-v2 full-transition :transition-props="transitionProps">
    <template #trigger>
      <hc-button circle
        ><hc-icon> <Plus /> </hc-icon
      ></hc-button>
    </template>
    <div>content</div>
  </hc-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'

const transitionProps = {
  name: 'hc-fade-in-linear',
}
</script>
