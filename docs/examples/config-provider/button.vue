<template>
  <div>
    <div m="b-2">
      <hc-checkbox v-model="config.autoInsertSpace"
        >autoInsertSpace</hc-checkbox
      >
    </div>

    <hc-config-provider :button="config">
      <hc-button>中文</hc-button>
    </hc-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const config = reactive({
  autoInsertSpace: true,
})
</script>
