<template>
  <hc-calendar ref="calendar">
    <template #header="{ date }">
      <span>Custom header content</span>
      <span>{{ date }}</span>
      <hc-button-group>
        <hc-button size="small" @click="selectDate('prev-year')">
          Previous Year
        </hc-button>
        <hc-button size="small" @click="selectDate('prev-month')">
          Previous Month
        </hc-button>
        <hc-button size="small" @click="selectDate('today')">Today</hc-button>
        <hc-button size="small" @click="selectDate('next-month')">
          Next Month
        </hc-button>
        <hc-button size="small" @click="selectDate('next-year')">
          Next Year
        </hc-button>
      </hc-button-group>
    </template>
  </hc-calendar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import type { CalendarDateType, CalendarInstance } from 'hicor-ui'

const calendar = ref<CalendarInstance>()
const selectDate = (val: CalendarDateType) => {
  if (!calendar.value) return
  calendar.value.selectDate(val)
}
</script>
