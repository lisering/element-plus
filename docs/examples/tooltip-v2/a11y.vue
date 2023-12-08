<template>
  <hc-tooltip-v2 :aria-label="title">
    <template #trigger>
      <hc-button
        ><hc-icon> <Delete /> </hc-icon
      ></hc-button>
    </template>
    {{ content }}
  </hc-tooltip-v2>
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons-vue'
const content = 'Delete'
const title = 'Delete item'
</script>
