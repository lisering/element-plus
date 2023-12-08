<template>
  <div class="demo-type">
    <div>
      <hc-avatar :icon="UserFilled" />
    </div>
    <div>
      <hc-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
    </div>
    <div>
      <hc-avatar> user </hc-avatar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled } from '@element-plus/icons-vue'
</script>

<style scoped>
.demo-type {
  display: flex;
}

.demo-type>div {
  flex: 1;
  text-align: center;
}

.demo-type>div:not(:last-child) {
  border-right: 1px solid var(--hc-border-color);
}
</style>
