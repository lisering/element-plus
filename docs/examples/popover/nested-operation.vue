<template>
  <hc-popover :visible="visible" placement="top" :width="160">
    <p>Are you sure to delete this?</p>
    <div style="text-align: right; margin: 0">
      <hc-button size="small" text @click="visible = false">cancel</hc-button>
      <hc-button size="small" type="primary" @click="visible = false"
        >confirm</hc-button
      >
    </div>
    <template #reference>
      <hc-button @click="visible = true">Delete</hc-button>
    </template>
  </hc-popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const visible = ref(false)
</script>
