<template>
  <hc-row>
    <hc-col :span="6">
      <hc-statistic title="Daily active users" :value="268500" />
    </hc-col>
    <hc-col :span="6">
      <hc-statistic :value="138">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            Ratio of men to women
            <hc-icon style="margin-left: 4px" :size="12">
              <Male />
            </hc-icon>
          </div>
        </template>
        <template #suffix>/100</template>
      </hc-statistic>
    </hc-col>
    <hc-col :span="6">
      <hc-statistic title="Total Transactions" :value="172000" />
    </hc-col>
    <hc-col :span="6">
      <hc-statistic title="Feedback number" :value="562">
        <template #suffix>
          <hc-icon style="vertical-align: -0.125em">
            <ChatLineRound />
          </hc-icon>
        </template>
      </hc-statistic>
    </hc-col>
  </hc-row>
</template>

<script lang="ts" setup>
import { ChatLineRound, Male } from '@element-plus/icons-vue'
</script>

<style scoped>
.hc-col {
  text-align: center;
}
</style>
