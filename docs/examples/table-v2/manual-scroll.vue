<template>
  <div class="mb-4 flex items-center">
    <hc-form-item label="Scroll pixels" class="mr-4">
      <hc-input v-model="scrollDelta" />
    </hc-form-item>
    <hc-form-item label="Scroll rows">
      <hc-input v-model="scrollRows" />
    </hc-form-item>
  </div>
  <div class="mb-4 flex items-center">
    <hc-button @click="scrollByPixels"> Scroll by pixels </hc-button>
    <hc-button @click="scrollByRows"> Scroll by rows </hc-button>
  </div>
  <div style="height: 400px">
    <hc-auto-resizer>
      <template #default="{ height, width }">
        <hc-table-v2
          ref="tableRef"
          :columns="columns"
          :data="data"
          :width="width"
          :height="height"
          fixed
        />
      </template>
    </hc-auto-resizer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { TableV2Instance } from 'hicor-ui'

const generateColumns = (length = 10, prefix = 'column-', props?: any) =>
  Array.from({ length }).map((_, columnIndex) => ({
    ...props,
    key: `${prefix}${columnIndex}`,
    dataKey: `${prefix}${columnIndex}`,
    title: `Column ${columnIndex}`,
    width: 150,
  }))

const generateData = (
  columns: ReturnType<typeof generateColumns>,
  length = 200,
  prefix = 'row-'
) =>
  Array.from({ length }).map((_, rowIndex) => {
    return columns.reduce(
      (rowData, column, columnIndex) => {
        rowData[column.dataKey] = `Row ${rowIndex} - Col ${columnIndex}`
        return rowData
      },
      {
        id: `${prefix}${rowIndex}`,
        parentId: null,
      }
    )
  })

const columns = generateColumns(10)
const data = generateData(columns, 200)
const tableRef = ref<TableV2Instance>()
const scrollDelta = ref(200)
const scrollRows = ref(10)

function scrollByPixels() {
  tableRef.value?.scrollToTop(scrollDelta.value)
}

function scrollByRows() {
  tableRef.value?.scrollToRow(scrollRows.value)
}
</script>
