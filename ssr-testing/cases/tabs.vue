<template>
  <hc-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
    <hc-tab-pane label="User" name="first">User</hc-tab-pane>
    <hc-tab-pane label="Config" name="second">Config</hc-tab-pane>
    <hc-tab-pane label="Role" name="third">Role</hc-tab-pane>
    <hc-tab-pane label="Task" name="fourth">Task</hc-tab-pane>
  </hc-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('first')

const handleClick = (tab: string, event: Event) => {
  console.log(tab, event)
}
</script>
<style>
.demo-tabs>.hc-tabs__content {
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}
</style>
