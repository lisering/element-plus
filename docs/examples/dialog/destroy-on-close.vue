<template>
  <hc-button text @click="centerDialogVisible = true">
    Click to open Dialog
  </hc-button>

  <hc-dialog
    v-model="centerDialogVisible"
    title="Notice"
    width="30%"
    destroy-on-close
    center
  >
    <span>
      Notice: before dialog gets opened for the first time this node and the one
      bellow will not be rendered
    </span>
    <div>
      <strong>Extra content (Not rendered)</strong>
    </div>
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
