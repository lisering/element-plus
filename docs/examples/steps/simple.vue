<template>
  <hc-steps :space="200" :active="1" simple>
    <hc-step title="Step 1" :icon="Edit" />
    <hc-step title="Step 2" :icon="UploadFilled" />
    <hc-step title="Step 3" :icon="Picture" />
  </hc-steps>

  <hc-steps :active="1" finish-status="success" simple style="margin-top: 20px">
    <hc-step title="Step 1" />
    <hc-step title="Step 2" />
    <hc-step title="Step 3" />
  </hc-steps>
</template>

<script lang="ts" setup>
import { Edit, Picture, UploadFilled } from '@element-plus/icons-vue'
</script>
