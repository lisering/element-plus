<template>
  <hc-row>
    <hc-col :span="8">
      <hc-countdown title="Start to grab" :value="value" />
    </hc-col>
    <hc-col :span="8">
      <hc-countdown
        title="Remaining VIP time"
        format="HH:mm:ss"
        :value="value1"
      />
      <hc-button class="countdown-footer" type="primary" @click="reset"
        >Reset
      </hc-button>
    </hc-col>
    <hc-col :span="8">
      <hc-countdown format="DD [days] HH:mm:ss" :value="value2">
        <template #title>
          <div style="display: inline-flex; align-items: center">
            <hc-icon style="margin-right: 4px" :size="12">
              <Calendar />
            </hc-icon>
            Still to go until next month
          </div>
        </template>
      </hc-countdown>
      <div class="countdown-footer">{{ value2.format('YYYY-MM-DD') }}</div>
    </hc-col>
  </hc-row>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import { Calendar } from '@element-plus/icons-vue'

const value = ref(Date.now() + 1000 * 60 * 60 * 7)
const value1 = ref(Date.now() + 1000 * 60 * 60 * 24 * 2)
const value2 = ref(dayjs().add(1, 'month').startOf('month'))

function reset() {
  value1.value = Date.now() + 1000 * 60 * 60 * 24 * 2
}
</script>

<style scoped>
.hc-col {
  text-align: center;
}

.countdown-footer {
  margin-top: 8px;
}
</style>
