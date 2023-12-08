<template>
  <hc-button plain @click="open"> Notification with offset </hc-button>
</template>

<script lang="ts" setup>
import { HcNotification } from 'hicor-ui'

const open = () => {
  HcNotification.success({
    title: 'Success',
    message: 'This is a success message',
    offset: 100,
  })
}
</script>
