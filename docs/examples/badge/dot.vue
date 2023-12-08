<template>
  <hc-badge is-dot class="item">query</hc-badge>
  <hc-badge is-dot class="item">
    <hc-button class="share-button" :icon="Share" type="primary" />
  </hc-badge>
</template>

<script lang="ts" setup>
import { Share } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
