<template>
  <hc-steps :active="active" finish-status="success">
    <hc-step title="Step 1" />
    <hc-step title="Step 2" />
    <hc-step title="Step 3" />
  </hc-steps>

  <hc-button style="margin-top: 12px" @click="next">Next step</hc-button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const active = ref(0)

const next = () => {
  if (active.value++ > 2) active.value = 0
}
</script>
