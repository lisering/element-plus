<template>
  <hc-radio-group v-model="tabPosition" style="margin-bottom: 30px">
    <hc-radio-button label="top">top</hc-radio-button>
    <hc-radio-button label="right">right</hc-radio-button>
    <hc-radio-button label="bottom">bottom</hc-radio-button>
    <hc-radio-button label="left">left</hc-radio-button>
  </hc-radio-group>

  <hc-tabs :tab-position="tabPosition" style="height: 200px" class="demo-tabs">
    <hc-tab-pane label="User">User</hc-tab-pane>
    <hc-tab-pane label="Config">Config</hc-tab-pane>
    <hc-tab-pane label="Role">Role</hc-tab-pane>
    <hc-tab-pane label="Task">Task</hc-tab-pane>
  </hc-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const tabPosition = ref('left')
</script>
<style>
.demo-tabs > .hc-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.hc-tabs--right .hc-tabs__content,
.hc-tabs--left .hc-tabs__content {
  height: 100%;
}
</style>
