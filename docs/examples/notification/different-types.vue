<template>
  <hc-button plain @click="open1"> Success </hc-button>
  <hc-button plain @click="open2"> Warning </hc-button>
  <hc-button plain @click="open3"> Info </hc-button>
  <hc-button plain @click="open4"> Error </hc-button>
</template>

<script lang="ts" setup>
import { HcNotification } from 'hicor-ui'

const open1 = () => {
  HcNotification({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
  })
}

const open2 = () => {
  HcNotification({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
  })
}

const open3 = () => {
  HcNotification({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
  })
}

const open4 = () => {
  HcNotification({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
  })
}
</script>
