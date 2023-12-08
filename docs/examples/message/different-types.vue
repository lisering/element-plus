<template>
  <hc-button :plain="true" @click="open2">success</hc-button>
  <hc-button :plain="true" @click="open3">warning</hc-button>
  <hc-button :plain="true" @click="open1">message</hc-button>
  <hc-button :plain="true" @click="open4">error</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage } from 'hicor-ui'

const open1 = () => {
  HcMessage('this is a message.')
}
const open2 = () => {
  HcMessage({
    message: 'Congrats, this is a success message.',
    type: 'success',
  })
}
const open3 = () => {
  HcMessage({
    message: 'Warning, this is a warning message.',
    type: 'warning',
  })
}
const open4 = () => {
  HcMessage.error('Oops, this is a error message.')
}
</script>
