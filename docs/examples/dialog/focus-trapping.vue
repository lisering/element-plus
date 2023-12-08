<template>
  <hc-button text @click="dialogVisible = true">
    click to open the Dialog
  </hc-button>

  <div>
    <p>Close dialog and the input will be focused</p>
    <hc-input ref="inputRef" placeholder="Please input" />
  </div>

  <hc-dialog
    v-model="dialogVisible"
    destroy-on-close
    title="Tips"
    width="30%"
    @close-auto-focus="handleCloseAutoFocus"
  >
    <span>This is a message</span>
    <hc-divider />
    <hc-input placeholder="Initially focused" />
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
import { HcInput } from 'hicor-ui'

const dialogVisible = ref(false)
const inputRef = ref<InstanceType<typeof HcInput>>()

const handleCloseAutoFocus = () => {
  inputRef.value?.focus()
}
</script>
<style scoped>
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
