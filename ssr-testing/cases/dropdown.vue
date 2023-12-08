<template>
  <hc-dropdown>
    <span class="hc-dropdown-link" style="
        cursor: pointer;
        color: var(--hc-color-primary);
        display: flex;
        align-items: center;
      ">
      Dropdown List
      <hc-icon class="hc-icon--right">
        <arrow-down />
      </hc-icon>
    </span>
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

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
</script>
