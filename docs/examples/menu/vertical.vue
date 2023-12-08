<template>
  <hc-row class="tac">
    <hc-col :span="12">
      <h5 class="mb-2">Default colors</h5>
      <hc-menu
        default-active="2"
        class="hc-menu-vertical-demo"
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
          <hc-menu-item-group title="Group One">
            <hc-menu-item index="1-1">item one</hc-menu-item>
            <hc-menu-item index="1-2">item two</hc-menu-item>
          </hc-menu-item-group>
          <hc-menu-item-group title="Group Two">
            <hc-menu-item index="1-3">item three</hc-menu-item>
          </hc-menu-item-group>
          <hc-sub-menu index="1-4">
            <template #title>item four</template>
            <hc-menu-item index="1-4-1">item one</hc-menu-item>
          </hc-sub-menu>
        </hc-sub-menu>
        <hc-menu-item index="2">
          <hc-icon><icon-menu /></hc-icon>
          <span>Navigator Two</span>
        </hc-menu-item>
        <hc-menu-item index="3" disabled>
          <hc-icon>
            <document />
          </hc-icon>
          <span>Navigator Three</span>
        </hc-menu-item>
        <hc-menu-item index="4">
          <hc-icon>
            <setting />
          </hc-icon>
          <span>Navigator Four</span>
        </hc-menu-item>
      </hc-menu>
    </hc-col>
    <hc-col :span="12">
      <h5 class="mb-2">Custom colors</h5>
      <hc-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="hc-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
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
          <hc-menu-item-group title="Group One">
            <hc-menu-item index="1-1">item one</hc-menu-item>
            <hc-menu-item index="1-2">item two</hc-menu-item>
          </hc-menu-item-group>
          <hc-menu-item-group title="Group Two">
            <hc-menu-item index="1-3">item three</hc-menu-item>
          </hc-menu-item-group>
          <hc-sub-menu index="1-4">
            <template #title>item four</template>
            <hc-menu-item index="1-4-1">item one</hc-menu-item>
          </hc-sub-menu>
        </hc-sub-menu>
        <hc-menu-item index="2">
          <hc-icon><icon-menu /></hc-icon>
          <span>Navigator Two</span>
        </hc-menu-item>
        <hc-menu-item index="3" disabled>
          <hc-icon>
            <document />
          </hc-icon>
          <span>Navigator Three</span>
        </hc-menu-item>
        <hc-menu-item index="4">
          <hc-icon>
            <setting />
          </hc-icon>
          <span>Navigator Four</span>
        </hc-menu-item>
      </hc-menu>
    </hc-col>
  </hc-row>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
