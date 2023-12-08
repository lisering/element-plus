<template>
  <hc-button :plain="true" @click="open">Show message</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage } from 'hicor-ui'

const open = () => {
  HcMessage({
    message: 'this is a message.',
    grouping: true,
    type: 'success',
  })
}
</script>
