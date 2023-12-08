<template>
  <hc-menu
    :default-active="activeIndex"
    class="hc-menu-demo"
    mode="horizontal"
    @select="handleSelect"
  >
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
    <hc-menu-item index="3" disabled>Info</hc-menu-item>
    <hc-menu-item index="4">Orders</hc-menu-item>
  </hc-menu>
  <div class="h-6" />
  <hc-menu
    :default-active="activeIndex2"
    class="hc-menu-demo"
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    @select="handleSelect"
  >
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
    <hc-menu-item index="3" disabled>Info</hc-menu-item>
    <hc-menu-item index="4">Orders</hc-menu-item>
  </hc-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeIndex = ref('1')
const activeIndex2 = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
