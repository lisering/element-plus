<template>
  <hc-button text @click="table = true"
    >Open Drawer with nested table</hc-button
  >
  <hc-button text @click="dialog = true"
    >Open Drawer with nested form</hc-button
  >
  <hc-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <hc-table :data="gridData">
      <hc-table-column property="date" label="Date" width="150" />
      <hc-table-column property="name" label="Name" width="200" />
      <hc-table-column property="address" label="Address" />
    </hc-table>
  </hc-drawer>

  <hc-drawer
    ref="drawerRef"
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <hc-form :model="form">
        <hc-form-item label="Name" :label-width="formLabelWidth">
          <hc-input v-model="form.name" autocomplete="off" />
        </hc-form-item>
        <hc-form-item label="Area" :label-width="formLabelWidth">
          <hc-select
            v-model="form.region"
            placeholder="Please select activity area"
          >
            <hc-option label="Area1" value="shanghai" />
            <hc-option label="Area2" value="beijing" />
          </hc-select>
        </hc-form-item>
      </hc-form>
      <div class="demo-drawer__footer">
        <hc-button @click="cancelForm">Cancel</hc-button>
        <hc-button type="primary" :loading="loading" @click="onClick">{{
          loading ? 'Submitting ...' : 'Submit'
        }}</hc-button>
      </div>
    </div>
  </hc-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { HcDrawer, HcMessageBox } from 'hicor-ui'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

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
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const drawerRef = ref<InstanceType<typeof HcDrawer>>()
const onClick = () => {
  drawerRef.value!.close()
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  HcMessageBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
