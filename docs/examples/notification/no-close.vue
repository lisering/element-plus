<template>
  <hc-button plain @click="open"> Hide close button </hc-button>
</template>

<script lang="ts" setup>
import { HcNotification } from 'hicor-ui'

const open = () => {
  HcNotification.success({
    title: 'Info',
    message: 'This is a message without close button',
    showClose: false,
  })
}
</script>
