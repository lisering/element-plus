<template>
  <hc-button text @click="dialogTableVisible = true">
    open a Table nested Dialog
  </hc-button>

  <hc-dialog v-model="dialogTableVisible" title="Shipping address">
    <hc-table :data="gridData">
      <hc-table-column property="date" label="Date" width="150" />
      <hc-table-column property="name" label="Name" width="200" />
      <hc-table-column property="address" label="Address" />
    </hc-table>
  </hc-dialog>

  <!-- Form -->
  <hc-button text @click="dialogFormVisible = true">
    open a Form nested Dialog
  </hc-button>

  <hc-dialog v-model="dialogFormVisible" title="Shipping address">
    <hc-form :model="form">
      <hc-form-item label="Promotion name" :label-width="formLabelWidth">
        <hc-input v-model="form.name" autocomplete="off" />
      </hc-form-item>
      <hc-form-item label="Zones" :label-width="formLabelWidth">
        <hc-select v-model="form.region" placeholder="Please select a zone">
          <hc-option label="Zone No.1" value="shanghai" />
          <hc-option label="Zone No.2" value="beijing" />
        </hc-select>
      </hc-form-item>
    </hc-form>
    <template #footer>
      <span class="dialog-footer">
        <hc-button @click="dialogFormVisible = false">Cancel</hc-button>
        <hc-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </hc-button>
      </span>
    </template>
  </hc-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const gridData = [
  {
    date: '2016-05-02',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
<style scoped>
.hc-button--text {
  margin-right: 15px;
}

.hc-select {
  width: 300px;
}

.hc-input {
  width: 300px;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>
