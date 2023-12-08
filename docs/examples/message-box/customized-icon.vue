<template>
  <hc-button text @click="open">Click to open Message Box</hc-button>
</template>

<script lang="ts" setup>
import { markRaw } from 'vue'
import { HcMessageBox } from 'hicor-ui'
import { Delete } from '@element-plus/icons-vue'

const open = () => {
  HcMessageBox.confirm(
    'It will permanently delete the file. Continue?',
    'Warning',
    {
      type: 'warning',
      icon: markRaw(Delete),
    }
  )
}
</script>
