<template>
  <hc-popconfirm
    width="220"
    confirm-button-text="OK"
    cancel-button-text="No, Thanks"
    :icon="InfoFilled"
    icon-color="#626AEF"
    title="Are you sure to delete this?"
  >
    <template #reference>
      <hc-button>Delete</hc-button>
    </template>
  </hc-popconfirm>
</template>

<script setup lang="ts">
import { InfoFilled } from '@element-plus/icons-vue'
</script>
