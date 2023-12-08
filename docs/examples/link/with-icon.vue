<template>
  <div>
    <hc-link :icon="Edit">Edit</hc-link>
    <hc-link>
      Check<hc-icon class="hc-icon--right"><icon-view /></hc-icon>
    </hc-link>
  </div>
</template>

<script setup lang="ts">
import { Edit, View as IconView } from '@element-plus/icons-vue'
</script>

<style scoped>
.hc-link {
  margin-right: 8px;
}
</style>
