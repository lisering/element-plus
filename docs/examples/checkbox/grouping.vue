<template>
  <hc-checkbox-group v-model="checkList">
    <hc-checkbox label="Option A" />
    <hc-checkbox label="Option B" />
    <hc-checkbox label="Option C" />
    <hc-checkbox label="disabled" disabled />
    <hc-checkbox label="selected and disabled" disabled />
  </hc-checkbox-group>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checkList = ref(['selected and disabled', 'Option A'])
</script>
