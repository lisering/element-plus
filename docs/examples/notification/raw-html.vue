<template>
  <hc-button plain @click="open"> Use HTML String </hc-button>
</template>

<script lang="ts" setup>
import { HcNotification } from 'hicor-ui'

const open = () => {
  HcNotification({
    title: 'HTML String',
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
