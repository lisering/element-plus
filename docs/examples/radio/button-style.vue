<template>
  <div>
    <hc-radio-group v-model="radio1" size="large">
      <hc-radio-button label="New York" />
      <hc-radio-button label="Washington" />
      <hc-radio-button label="Los Angeles" />
      <hc-radio-button label="Chicago" />
    </hc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <hc-radio-group v-model="radio2">
      <hc-radio-button label="New York" />
      <hc-radio-button label="Washington" />
      <hc-radio-button label="Los Angeles" />
      <hc-radio-button label="Chicago" />
    </hc-radio-group>
  </div>
  <div style="margin-top: 20px">
    <hc-radio-group v-model="radio3" size="small">
      <hc-radio-button label="New York" />
      <hc-radio-button label="Washington" disabled />
      <hc-radio-button label="Los Angeles" />
      <hc-radio-button label="Chicago" />
    </hc-radio-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio1 = ref('New York')
const radio2 = ref('New York')
const radio3 = ref('New York')
</script>
