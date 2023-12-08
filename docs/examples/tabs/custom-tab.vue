<template>
  <hc-tabs type="border-card" class="demo-tabs">
    <hc-tab-pane>
      <template #label>
        <span class="custom-tabs-label">
          <hc-icon>
            <calendar />
          </hc-icon>
          <span>Route</span>
        </span>
      </template>
      Route
    </hc-tab-pane>
    <hc-tab-pane label="Config">Config</hc-tab-pane>
    <hc-tab-pane label="Role">Role</hc-tab-pane>
    <hc-tab-pane label="Task">Task</hc-tab-pane>
  </hc-tabs>
</template>

<script lang="ts" setup>
import { Calendar } from '@element-plus/icons-vue'
</script>
<style>
.demo-tabs > .hc-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.demo-tabs .custom-tabs-label .hc-icon {
  vertical-align: middle;
}

.demo-tabs .custom-tabs-label span {
  vertical-align: middle;
  margin-left: 4px;
}
</style>
