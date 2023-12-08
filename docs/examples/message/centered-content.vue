<template>
  <hc-button plain @click="openCenter">Centered text</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage } from 'hicor-ui'

const openCenter = () => {
  HcMessage({
    showClose: true,
    message: 'Centered text',
    center: true,
  })
}
</script>
