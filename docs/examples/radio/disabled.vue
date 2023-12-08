<template>
  <hc-radio v-model="radio" disabled label="disabled">Option A</hc-radio>
  <hc-radio v-model="radio" disabled label="selected and disabled"
    >Option B</hc-radio
  >
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const radio = ref('selected and disabled')
</script>
