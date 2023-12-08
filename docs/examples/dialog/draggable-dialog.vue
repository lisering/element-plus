<template>
  <hc-button text @click="dialogVisible = true">
    Click to open Dialog
  </hc-button>

  <hc-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
    <template #footer>
      <span class="dialog-footer">
        <hc-button @click="dialogVisible = false">Cancel</hc-button>
        <hc-button type="primary" @click="dialogVisible = false">
          Confirm
        </hc-button>
      </span>
    </template>
  </hc-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(false)
</script>
