<template>
  <hc-button text @click="open">Click to open Message Box</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage, HcMessageBox } from 'hicor-ui'

const open = () => {
  HcMessageBox.prompt('Please input your e-mail', 'Tip', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    inputPattern:
      /[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/,
    inputErrorMessage: 'Invalid Email',
  })
    .then(({ value }) => {
      HcMessage({
        type: 'success',
        message: `Your email is:${value}`,
      })
    })
    .catch(() => {
      HcMessage({
        type: 'info',
        message: 'Input canceled',
      })
    })
}
</script>
