<template>
  <div class="demo-progress">
    <hc-progress :percentage="50">
      <hc-button text>Content</hc-button>
    </hc-progress>
    <hc-progress
      :text-inside="true"
      :stroke-width="20"
      :percentage="50"
      status="exception"
    >
      <span>Content</span>
    </hc-progress>
    <hc-progress type="circle" :percentage="100" status="success">
      <hc-button type="success" :icon="Check" circle />
    </hc-progress>
    <hc-progress type="dashboard" :percentage="80">
      <template #default="{ percentage }">
        <span class="percentage-value">{{ percentage }}%</span>
        <span class="percentage-label">Progressing</span>
      </template>
    </hc-progress>
  </div>
</template>

<script lang="ts" setup>
import { Check } from '@element-plus/icons-vue'
</script>

<style scoped>
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}

.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}

.demo-progress .hc-progress--line {
  margin-bottom: 15px;
  width: 350px;
}

.demo-progress .hc-progress--circle {
  margin-right: 15px;
}
</style>
