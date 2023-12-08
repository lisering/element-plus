<template>
  <hc-row :gutter="16">
    <hc-col :span="8">
      <div class="statistic-card">
        <hc-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <hc-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <hc-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </hc-icon>
              </hc-tooltip>
            </div>
          </template>
        </hc-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <hc-icon>
                <CaretTop />
              </hc-icon>
            </span>
          </div>
        </div>
      </div>
    </hc-col>
    <hc-col :span="8">
      <div class="statistic-card">
        <hc-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <hc-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <hc-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </hc-icon>
              </hc-tooltip>
            </div>
          </template>
        </hc-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <hc-icon>
                <CaretBottom />
              </hc-icon>
            </span>
          </div>
        </div>
      </div>
    </hc-col>
    <hc-col :span="8">
      <div class="statistic-card">
        <hc-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </hc-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <hc-icon>
                <CaretTop />
              </hc-icon>
            </span>
          </div>
          <div class="footer-item">
            <hc-icon :size="14">
              <ArrowRight />
            </hc-icon>
          </div>
        </div>
      </div>
    </hc-col>
  </hc-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--hc-fill-color) !important;
}

.hc-statistic {
  --hc-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--hc-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--hc-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--hc-color-success);
}

.red {
  color: var(--hc-color-error);
}
</style>
