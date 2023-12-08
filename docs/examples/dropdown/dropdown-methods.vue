<template>
  <div style="font-size: 14px">
    <p>open(close) the Dropdown list2 will close(open) the Dropdown List1.</p>
  </div>
  <div style="margin: 15px">
    <hc-button @click="showClick">show</hc-button>
  </div>
  <hc-dropdown ref="dropdown1" trigger="contextmenu" style="margin-right: 30px">
    <span class="hc-dropdown-link"> Dropdown List1 </span>
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item>Action 1</hc-dropdown-item>
        <hc-dropdown-item>Action 2</hc-dropdown-item>
        <hc-dropdown-item>Action 3</hc-dropdown-item>
        <hc-dropdown-item disabled>Action 4</hc-dropdown-item>
        <hc-dropdown-item divided>Action 5</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>

  <hc-dropdown trigger="contextmenu" @visible-change="handleVisible2">
    <span class="hc-dropdown-link"> Dropdown List2 </span>
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item>Action 1</hc-dropdown-item>
        <hc-dropdown-item>Action 2</hc-dropdown-item>
        <hc-dropdown-item>Action 3</hc-dropdown-item>
        <hc-dropdown-item disabled>Action 4</hc-dropdown-item>
        <hc-dropdown-item divided>Action 5</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownInstance } from 'hicor-ui'

const dropdown1 = ref<DropdownInstance>()
function handleVisible2(visible: any) {
  if (!dropdown1.value) return
  if (visible) {
    dropdown1.value.handleClose()
  } else {
    dropdown1.value.handleOpen()
  }
}
function showClick() {
  if (!dropdown1.value) return
  dropdown1.value.handleOpen()
}
</script>
<style scoped>
.example-showcase .hc-dropdown-link {
  cursor: pointer;
  color: var(--hc-color-primary);
  display: flex;
  align-items: center;
}
</style>
