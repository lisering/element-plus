<script lang="ts" setup>
import { isDark } from '~/composables/dark'
</script>

<template>
  <div class="flex">
    <hc-button color="#626aef" :dark="isDark">Default</hc-button>
    <hc-button color="#626aef" :dark="isDark" plain>Plain</hc-button>

    <hc-button color="#626aef" :dark="isDark" disabled>Disabled</hc-button>
    <hc-button color="#626aef" :dark="isDark" disabled plain
      >Disabled Plain</hc-button
    >
  </div>
</template>
