<template>
  <hc-row class="block-col-2">
    <hc-col :span="8">
      <span class="demonstration">hover to trigger</span>
      <hc-dropdown>
        <span class="hc-dropdown-link">
          Dropdown List<hc-icon class="hc-icon--right"><arrow-down /></hc-icon>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item :icon="Plus">Action 1</hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlus">Action 3</hc-dropdown-item>
            <hc-dropdown-item :icon="Check">Action 4</hc-dropdown-item>
            <hc-dropdown-item :icon="CircleCheck">Action 5</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
    </hc-col>
    <hc-col :span="8">
      <span class="demonstration">click to trigger</span>
      <hc-dropdown trigger="click">
        <span class="hc-dropdown-link">
          Dropdown List<hc-icon class="hc-icon--right"><arrow-down /></hc-icon>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item :icon="Plus">Action 1</hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlus">Action 3</hc-dropdown-item>
            <hc-dropdown-item :icon="Check">Action 4</hc-dropdown-item>
            <hc-dropdown-item :icon="CircleCheck">Action 5</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
    </hc-col>
    <hc-col :span="8">
      <span class="demonstration">right click to trigger</span>
      <hc-dropdown trigger="contextmenu">
        <span class="hc-dropdown-link">
          Dropdown List<hc-icon class="hc-icon--right"><arrow-down /></hc-icon>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item :icon="Plus">Action 1</hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlusFilled">
              Action 2
            </hc-dropdown-item>
            <hc-dropdown-item :icon="CirclePlus">Action 3</hc-dropdown-item>
            <hc-dropdown-item :icon="Check">Action 4</hc-dropdown-item>
            <hc-dropdown-item :icon="CircleCheck">Action 5</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
    </hc-col>
  </hc-row>
</template>

<script lang="ts" setup>
import {
  ArrowDown,
  Check,
  CircleCheck,
  CirclePlus,
  CirclePlusFilled,
  Plus,
} from '@element-plus/icons-vue'
</script>

<style scoped>
.block-col-2 .demonstration {
  display: block;
  color: var(--hc-text-color-secondary);
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
