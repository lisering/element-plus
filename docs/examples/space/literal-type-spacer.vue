<template>
  <hc-space :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <hc-button> button {{ i }} </hc-button>
    </div>
  </hc-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
