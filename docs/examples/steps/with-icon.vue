<template>
  <hc-steps :active="1">
    <hc-step title="Step 1" :icon="Edit" />
    <hc-step title="Step 2" :icon="Upload" />
    <hc-step title="Step 3" :icon="Picture" />
  </hc-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, Upload } from '@element-plus/icons-vue'
</script>
