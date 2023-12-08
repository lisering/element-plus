<template>
  <div>
    <hc-radio-group v-model="size" label="size control">
      <hc-radio-button label="large">large</hc-radio-button>
      <hc-radio-button label="default">default</hc-radio-button>
      <hc-radio-button label="small">small</hc-radio-button>
    </hc-radio-group>
    <hc-radio-group v-model="labelPosition" label="position control">
      <hc-radio-button label="left">Left</hc-radio-button>
      <hc-radio-button label="right">Right</hc-radio-button>
      <hc-radio-button label="top">Top</hc-radio-button>
    </hc-radio-group>
  </div>
  <br />
  <hc-form
    ref="form"
    :model="sizeForm"
    label-width="auto"
    :label-position="labelPosition"
    :size="size"
  >
    <hc-form-item label="Activity name">
      <hc-input v-model="sizeForm.name" />
    </hc-form-item>
    <hc-form-item label="Activity zone">
      <hc-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <hc-option label="Zone one" value="shanghai" />
        <hc-option label="Zone two" value="beijing" />
      </hc-select>
    </hc-form-item>
    <hc-form-item label="Activity time">
      <hc-col :span="11">
        <hc-date-picker
          v-model="sizeForm.date1"
          type="date"
          label="Pick a date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </hc-col>
      <hc-col class="text-center" :span="1" style="margin: 0 0.5rem">-</hc-col>
      <hc-col :span="11">
        <hc-time-picker
          v-model="sizeForm.date2"
          label="Pick a time"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </hc-col>
    </hc-form-item>
    <hc-form-item label="Activity type">
      <hc-checkbox-group v-model="sizeForm.type">
        <hc-checkbox-button label="Online activities" name="type" />
        <hc-checkbox-button label="Promotion activities" name="type" />
      </hc-checkbox-group>
    </hc-form-item>
    <hc-form-item label="Resources">
      <hc-radio-group v-model="sizeForm.resource">
        <hc-radio border label="Sponsor" />
        <hc-radio border label="Venue" />
      </hc-radio-group>
    </hc-form-item>
    <hc-form-item>
      <hc-button type="primary" @click="onSubmit">Create</hc-button>
      <hc-button>Cancel</hc-button>
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')
const labelPosition = ref('right')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>

<style>
.hc-radio-group {
  margin-right: 12px;
}
</style>
