<template>
  <hc-button text @click="open">Click to open the Message Box</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage, HcMessageBox } from 'hicor-ui'

const open = () => {
  HcMessageBox.confirm(
    'proxy will permanently delete the file. Continue?',
    'Warning',
    {
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
      type: 'warning',
    }
  )
    .then(() => {
      HcMessage({
        type: 'success',
        message: 'Delete completed',
      })
    })
    .catch(() => {
      HcMessage({
        type: 'info',
        message: 'Delete canceled',
      })
    })
}
</script>
