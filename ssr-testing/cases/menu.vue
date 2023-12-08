<template>
  <hc-menu :default-active="activeIndex" class="hc-menu-demo" mode="horizontal">
    <hc-menu-item index="1">Processing Center</hc-menu-item>
    <hc-sub-menu index="2">
      <template #title>Workspace</template>
      <hc-menu-item index="2-1">item one</hc-menu-item>
    </hc-sub-menu>
    <hc-menu-item index="3" disabled>Info</hc-menu-item>
    <hc-menu-item index="4">Orders</hc-menu-item>
  </hc-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
</script>
