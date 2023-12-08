<template>
  <hc-button plain @click="open1"> Closes automatically </hc-button>
  <hc-button plain @click="open2"> Won't close automatically </hc-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HcNotification } from 'hicor-ui'

const open1 = () => {
  HcNotification({
    title: 'Title',
    message: h('i', { style: 'color: teal' }, 'This is a reminder'),
  })
}

const open2 = () => {
  HcNotification({
    title: 'Prompt',
    message: 'This is a message that does not automatically close',
    duration: 0,
  })
}
</script>
