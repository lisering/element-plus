<template>
  <hc-rate v-model="value" size="large" />
  <br />
  <hc-rate v-model="value" />
  <br />
  <hc-rate v-model="value" size="small" />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref(null)
</script>
