<template>
  <hc-space direction="vertical">
    <hc-text>
      <hc-icon>
        <HicorUi />
      </hc-icon>
      Element-Plus
    </hc-text>
    <hc-row>
      <hc-text>Rate</hc-text>
      <hc-rate class="ml-1" />
    </hc-row>
    <hc-text>
      This is text mixed icon
      <hc-icon>
        <Bell />
      </hc-icon>
      and component
      <hc-button>Button</hc-button>
    </hc-text>
  </hc-space>
</template>

<script lang="ts" setup>
import { Bell, HicorUi } from '@element-plus/icons-vue'
</script>
