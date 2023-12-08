<template>
  <hc-space :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <hc-button> button {{ i }} </hc-button>
    </div>
  </hc-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HcDivider } from 'hicor-ui'

const size = ref(10)
const spacer = h(HcDivider, { direction: 'vertical' })
</script>
