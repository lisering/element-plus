<template>
  <hc-radio-group v-model="tableLayout">
    <hc-radio-button label="fixed" />
    <hc-radio-button label="auto" />
  </hc-radio-group>
  <hc-table :data="tableData" :table-layout="tableLayout">
    <hc-table-column prop="date" label="Date" />
    <hc-table-column prop="name" label="Name" />
    <hc-table-column prop="address" label="Address" />
  </hc-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const tableLayout = ref('fixed')

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
