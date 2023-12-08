<template>
  <hc-radio-group v-model="radio">
    <hc-radio :label="3">Option A</hc-radio>
    <hc-radio :label="6">Option B</hc-radio>
    <hc-radio :label="9">Option C</hc-radio>
  </hc-radio-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref(3)
</script>
