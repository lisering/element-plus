<template>
  <hc-button-group>
    <hc-button type="primary" :icon="ArrowLeft">Previous Page</hc-button>
    <hc-button type="primary">
      Next Page<hc-icon class="hc-icon--right">
        <ArrowRight />
      </hc-icon>
    </hc-button>
  </hc-button-group>

  <hc-button-group class="ml-4">
    <hc-button type="primary" :icon="Edit" />
    <hc-button type="primary" :icon="Share" />
    <hc-button type="primary" :icon="Delete" />
  </hc-button-group>
</template>

<script setup lang="ts">
import {
  ArrowLeft,
  ArrowRight,
  Delete,
  Edit,
  Share,
} from '@element-plus/icons-vue'
</script>
