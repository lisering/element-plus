<template>
  <hc-button text @click="centerDialogVisible = true">
    Click to open the Dialog
  </hc-button>

  <hc-dialog v-model="centerDialogVisible" title="Warning" width="30%" center>
    <span>
      It should be noted that the content will not be aligned in center by
      default
    </span>
    <template #footer>
      <span class="dialog-footer">
        <hc-button @click="centerDialogVisible = false">Cancel</hc-button>
        <hc-button type="primary" @click="centerDialogVisible = false">
          Confirm
        </hc-button>
      </span>
    </template>
  </hc-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const centerDialogVisible = ref(false)
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
