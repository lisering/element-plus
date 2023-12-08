<template>
  <div class="flex">
    <hc-button type="primary" :icon="Edit" />
    <hc-button type="primary" :icon="Share" />
    <hc-button type="primary" :icon="Delete" />
    <hc-button type="primary" :icon="Search">Search</hc-button>
    <hc-button type="primary">
      Upload<hc-icon class="hc-icon--right">
        <Upload />
      </hc-icon>
    </hc-button>
  </div>
</template>
<script setup lang="ts">
import { Delete, Edit, Search, Share, Upload } from '@element-plus/icons-vue'
</script>
