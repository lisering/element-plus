<template>
  <div>
    <hc-config-provider :message="config">
      <hc-button @click="open">OPEN</hc-button>
    </hc-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import { HcMessage } from 'hicor-ui'
const config = reactive({
  max: 3,
})
const open = () => {
  HcMessage('This is a message.')
}
</script>
