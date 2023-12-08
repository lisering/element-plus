<template>
  <hc-button text @click="dialogVisible = true">
    click to open the Dialog
  </hc-button>

  <hc-dialog
    v-model="dialogVisible"
    title="Tips"
    width="30%"
    :before-close="handleClose"
  >
    <span>This is a message</span>
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
import { HcMessageBox } from 'hicor-ui'

const dialogVisible = ref(false)

const handleClose = (done: () => void) => {
  HcMessageBox.confirm('Are you sure to close this dialog?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
