<template>
  <div>
    <hc-check-tag checked style="margin-right: 8px">Checked</hc-check-tag>
    <hc-check-tag :checked="checked" @change="onChange">Toggle me</hc-check-tag>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked = ref(false)

const onChange = (status: boolean) => {
  checked.value = status
}
</script>
