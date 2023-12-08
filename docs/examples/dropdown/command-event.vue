<template>
  <hc-dropdown @command="handleCommand">
    <span class="hc-dropdown-link">
      Dropdown List<hc-icon class="hc-icon--right"><arrow-down /></hc-icon>
    </span>
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item command="a">Action 1</hc-dropdown-item>
        <hc-dropdown-item command="b">Action 2</hc-dropdown-item>
        <hc-dropdown-item command="c">Action 3</hc-dropdown-item>
        <hc-dropdown-item command="d" disabled>Action 4</hc-dropdown-item>
        <hc-dropdown-item command="e" divided>Action 5</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>
</template>

<script lang="ts" setup>
import { HcMessage } from 'hicor-ui'
import { ArrowDown } from '@element-plus/icons-vue'

const handleCommand = (command: string | number | object) => {
  HcMessage(`click on item ${command}`)
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
