<template>
  <hc-tooltip-v2 aria-label="content" show-arrow always-on placement="top">
    <template #trigger>
      <hc-button circle
        ><hc-icon> <Plus /> </hc-icon
      ></hc-button>
    </template>
    Basic tooltip
  </hc-tooltip-v2>
</template>

<script setup lang="ts">
import { Plus } from '@element-plus/icons-vue'
</script>
