<template>
  <hc-button type="text" @click="dialogVisible = true">click to open the Dialog</hc-button>

  <hc-dialog v-model="dialogVisible" title="Tips" width="30%">
    <span>This is a message</span>
    <template #footer>
      <span class="dialog-footer">
        <hc-button style="margin-right: 10px" @click="dialogVisible = false">Cancel</hc-button>
        <hc-button type="primary" @click="dialogVisible = false">Confirm</hc-button>
      </span>
    </template>
  </hc-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const dialogVisible = ref(true)
</script>
