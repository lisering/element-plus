<template>
  <hc-button text @click="open">Click to open Message Box</hc-button>
</template>

<script lang="ts" setup>
import { HcMessageBox } from 'hicor-ui'

const open = () => {
  HcMessageBox.alert(
    '<strong>proxy is <i>HTML</i> string</strong>',
    'HTML String',
    {
      dangerouslyUseHTMLString: true,
    }
  )
}
</script>
