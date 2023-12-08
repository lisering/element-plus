<template>
  <hc-menu
    :default-active="activeIndex"
    class="hc-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <hc-menu-item index="0">
      <img
        style="width: 100px"
        src="/images/hicor-ui-logo.svg"
        alt="Element logo"
      />
    </hc-menu-item>
    <div class="flex-grow" />
    <hc-menu-item index="1">Processing Center</hc-menu-item>
    <hc-sub-menu index="2">
      <template #title>Workspace</template>
      <hc-menu-item index="2-1">item one</hc-menu-item>
      <hc-menu-item index="2-2">item two</hc-menu-item>
      <hc-menu-item index="2-3">item three</hc-menu-item>
      <hc-sub-menu index="2-4">
        <template #title>item four</template>
        <hc-menu-item index="2-4-1">item one</hc-menu-item>
        <hc-menu-item index="2-4-2">item two</hc-menu-item>
        <hc-menu-item index="2-4-3">item three</hc-menu-item>
      </hc-sub-menu>
    </hc-sub-menu>
  </hc-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.flex-grow {
  flex-grow: 1;
}
</style>
