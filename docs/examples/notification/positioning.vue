<template>
  <hc-button plain @click="open1"> Top Right </hc-button>
  <hc-button plain @click="open2"> Bottom Right </hc-button>
  <hc-button plain @click="open3"> Bottom Left </hc-button>
  <hc-button plain @click="open4"> Top Left </hc-button>
</template>

<script lang="ts" setup>
import { HcNotification } from 'hicor-ui'

const open1 = () => {
  HcNotification({
    title: 'Custom Position',
    message: "I'm at the top right corner",
  })
}

const open2 = () => {
  HcNotification({
    title: 'Custom Position',
    message: "I'm at the bottom right corner",
    position: 'bottom-right',
  })
}

const open3 = () => {
  HcNotification({
    title: 'Custom Position',
    message: "I'm at the bottom left corner",
    position: 'bottom-left',
  })
}

const open4 = () => {
  HcNotification({
    title: 'Custom Position',
    message: "I'm at the top left corner",
    position: 'top-left',
  })
}
</script>
