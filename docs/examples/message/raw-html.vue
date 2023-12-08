<template>
  <hc-button :plain="true" @click="openHTML">Use HTML String</hc-button>
</template>

<script lang="ts" setup>
import { ElMessage } from 'hicor-ui'

const openHTML = () => {
  ElMessage({
    dangerouslyUseHTMLString: true,
    message: '<strong>This is <i>HTML</i> string</strong>',
  })
}
</script>
