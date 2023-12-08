<template>
  <div class="flex flex-wrap items-center">
    <hc-dropdown>
      <hc-button type="primary">
        Dropdown List<hc-icon class="hc-icon--right"><arrow-down /></hc-icon>
      </hc-button>
      <template #dropdown>
        <hc-dropdown-menu>
          <hc-dropdown-item>Action 1</hc-dropdown-item>
          <hc-dropdown-item>Action 2</hc-dropdown-item>
          <hc-dropdown-item>Action 3</hc-dropdown-item>
          <hc-dropdown-item>Action 4</hc-dropdown-item>
          <hc-dropdown-item>Action 5</hc-dropdown-item>
        </hc-dropdown-menu>
      </template>
    </hc-dropdown>
    <hc-dropdown split-button type="primary" @click="handleClick">
      Dropdown List
      <template #dropdown>
        <hc-dropdown-menu>
          <hc-dropdown-item>Action 1</hc-dropdown-item>
          <hc-dropdown-item>Action 2</hc-dropdown-item>
          <hc-dropdown-item>Action 3</hc-dropdown-item>
          <hc-dropdown-item>Action 4</hc-dropdown-item>
          <hc-dropdown-item>Action 5</hc-dropdown-item>
        </hc-dropdown-menu>
      </template>
    </hc-dropdown>
  </div>
</template>

<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'

const handleClick = () => {
  // eslint-disable-next-line no-alert
  alert('button click')
}
</script>
<style scoped>
.example-showcase .hc-dropdown + .hc-dropdown {
  margin-left: 15px;
}

.example-showcase .hc-dropdown-link {
  cursor: pointer;
  color: var(--hc-color-primary);
  display: flex;
  align-items: center;
}
</style>
