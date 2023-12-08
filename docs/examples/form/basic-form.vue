<template>
  <hc-form :model="form" label-width="120px">
    <hc-form-item label="Activity name">
      <hc-input v-model="form.name" />
    </hc-form-item>
    <hc-form-item label="Activity zone">
      <hc-select v-model="form.region" placeholder="please select your zone">
        <hc-option label="Zone one" value="shanghai" />
        <hc-option label="Zone two" value="beijing" />
      </hc-select>
    </hc-form-item>
    <hc-form-item label="Activity time">
      <hc-col :span="11">
        <hc-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </hc-col>
      <hc-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </hc-col>
      <hc-col :span="11">
        <hc-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </hc-col>
    </hc-form-item>
    <hc-form-item label="Instant delivery">
      <hc-switch v-model="form.delivery" />
    </hc-form-item>
    <hc-form-item label="Activity type">
      <hc-checkbox-group v-model="form.type">
        <hc-checkbox label="Online activities" name="type" />
        <hc-checkbox label="Promotion activities" name="type" />
        <hc-checkbox label="Offline activities" name="type" />
        <hc-checkbox label="Simple brand exposure" name="type" />
      </hc-checkbox-group>
    </hc-form-item>
    <hc-form-item label="Resources">
      <hc-radio-group v-model="form.resource">
        <hc-radio label="Sponsor" />
        <hc-radio label="Venue" />
      </hc-radio-group>
    </hc-form-item>
    <hc-form-item label="Activity form">
      <hc-input v-model="form.desc" type="textarea" />
    </hc-form-item>
    <hc-form-item>
      <hc-button type="primary" @click="onSubmit">Create</hc-button>
      <hc-button>Cancel</hc-button>
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
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

const onSubmit = () => {
  console.log('submit!')
}
</script>
