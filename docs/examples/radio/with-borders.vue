<template>
  <div>
    <hc-radio-group v-model="radio1">
      <hc-radio label="1" size="large" border>Option A</hc-radio>
      <hc-radio label="2" size="large" border>Option B</hc-radio>
    </hc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <hc-radio-group v-model="radio2">
      <hc-radio label="1" border>Option A</hc-radio>
      <hc-radio label="2" border>Option B</hc-radio>
    </hc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <hc-radio-group v-model="radio3" size="small">
      <hc-radio label="1" border>Option A</hc-radio>
      <hc-radio label="2" border disabled>Option B</hc-radio>
    </hc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <hc-radio-group v-model="radio4" size="small" disabled>
      <hc-radio label="1" border>Option A</hc-radio>
      <hc-radio label="2" border>Option B</hc-radio>
    </hc-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>
