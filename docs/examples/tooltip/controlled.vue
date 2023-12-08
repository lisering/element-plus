<template>
  <hc-tooltip :visible="visible">
    <template #content>
      <span>Content</span>
    </template>
    <hc-button @mouseenter="visible = true" @mouseleave="visible = false">
      Hover me
    </hc-button>
  </hc-tooltip>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
</script>
