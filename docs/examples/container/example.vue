<template>
  <hc-container class="layout-container-demo" style="height: 500px">
    <hc-aside width="200px">
      <hc-scrollbar>
        <hc-menu :default-openeds="['1', '3']">
          <hc-sub-menu index="1">
            <template #title>
              <hc-icon> <message /> </hc-icon>Navigator One
            </template>
            <hc-menu-item-group>
              <template #title>Group 1</template>
              <hc-menu-item index="1-1">Option 1</hc-menu-item>
              <hc-menu-item index="1-2">Option 2</hc-menu-item>
            </hc-menu-item-group>
            <hc-menu-item-group title="Group 2">
              <hc-menu-item index="1-3">Option 3</hc-menu-item>
            </hc-menu-item-group>
            <hc-sub-menu index="1-4">
              <template #title>Option4</template>
              <hc-menu-item index="1-4-1">Option 4-1</hc-menu-item>
            </hc-sub-menu>
          </hc-sub-menu>
          <hc-sub-menu index="2">
            <template #title>
              <hc-icon><icon-menu /></hc-icon>Navigator Two
            </template>
            <hc-menu-item-group>
              <template #title>Group 1</template>
              <hc-menu-item index="2-1">Option 1</hc-menu-item>
              <hc-menu-item index="2-2">Option 2</hc-menu-item>
            </hc-menu-item-group>
            <hc-menu-item-group title="Group 2">
              <hc-menu-item index="2-3">Option 3</hc-menu-item>
            </hc-menu-item-group>
            <hc-sub-menu index="2-4">
              <template #title>Option 4</template>
              <hc-menu-item index="2-4-1">Option 4-1</hc-menu-item>
            </hc-sub-menu>
          </hc-sub-menu>
          <hc-sub-menu index="3">
            <template #title>
              <hc-icon> <setting /> </hc-icon>Navigator Three
            </template>
            <hc-menu-item-group>
              <template #title>Group 1</template>
              <hc-menu-item index="3-1">Option 1</hc-menu-item>
              <hc-menu-item index="3-2">Option 2</hc-menu-item>
            </hc-menu-item-group>
            <hc-menu-item-group title="Group 2">
              <hc-menu-item index="3-3">Option 3</hc-menu-item>
            </hc-menu-item-group>
            <hc-sub-menu index="3-4">
              <template #title>Option 4</template>
              <hc-menu-item index="3-4-1">Option 4-1</hc-menu-item>
            </hc-sub-menu>
          </hc-sub-menu>
        </hc-menu>
      </hc-scrollbar>
    </hc-aside>

    <hc-container>
      <hc-header style="text-align: right; font-size: 12px">
        <div class="toolbar">
          <hc-dropdown>
            <hc-icon style="margin-right: 8px; margin-top: 1px">
              <setting />
            </hc-icon>
            <template #dropdown>
              <hc-dropdown-menu>
                <hc-dropdown-item>View</hc-dropdown-item>
                <hc-dropdown-item>Add</hc-dropdown-item>
                <hc-dropdown-item>Delete</hc-dropdown-item>
              </hc-dropdown-menu>
            </template>
          </hc-dropdown>
          <span>Tom</span>
        </div>
      </hc-header>

      <hc-main>
        <hc-scrollbar>
          <hc-table :data="tableData">
            <hc-table-column prop="date" label="Date" width="140" />
            <hc-table-column prop="name" label="Name" width="120" />
            <hc-table-column prop="address" label="Address" />
          </hc-table>
        </hc-scrollbar>
      </hc-main>
    </hc-container>
  </hc-container>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Menu as IconMenu, Message, Setting } from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))
</script>

<style scoped>
.layout-container-demo .hc-header {
  position: relative;
  background-color: var(--hc-color-primary-light-7);
  color: var(--hc-text-color-primary);
}

.layout-container-demo .hc-aside {
  color: var(--hc-text-color-primary);
  background: var(--hc-color-primary-light-8);
}

.layout-container-demo .hc-menu {
  border-right: none;
}

.layout-container-demo .hc-main {
  padding: 0;
}

.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}
</style>
