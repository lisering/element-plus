<template>
  <hc-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <hc-radio-button :label="false">expand</hc-radio-button>
    <hc-radio-button :label="true">collapse</hc-radio-button>
  </hc-radio-group>
  <hc-menu
    default-active="2"
    class="hc-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
    <hc-sub-menu index="1">
      <template #title>
        <hc-icon>
          <location />
        </hc-icon>
        <span>Navigator One</span>
      </template>
      <hc-menu-item-group>
        <template #title><span>Group One</span></template>
        <hc-menu-item index="1-1">item one</hc-menu-item>
        <hc-menu-item index="1-2">item two</hc-menu-item>
      </hc-menu-item-group>
      <hc-menu-item-group title="Group Two">
        <hc-menu-item index="1-3">item three</hc-menu-item>
      </hc-menu-item-group>
      <hc-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <hc-menu-item index="1-4-1">item one</hc-menu-item>
      </hc-sub-menu>
    </hc-sub-menu>
    <hc-menu-item index="2">
      <hc-icon><icon-menu /></hc-icon>
      <template #title>Navigator Two</template>
    </hc-menu-item>
    <hc-menu-item index="3" disabled>
      <hc-icon>
        <document />
      </hc-icon>
      <template #title>Navigator Three</template>
    </hc-menu-item>
    <hc-menu-item index="4">
      <hc-icon>
        <setting />
      </hc-icon>
      <template #title>Navigator Four</template>
    </hc-menu-item>
  </hc-menu>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const isCollapse = ref(true)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style>
.hc-menu-vertical-demo:not(.hc-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
