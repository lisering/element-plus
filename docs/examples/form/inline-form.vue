<template>
  <hc-form :inline="true" :model="formInline" class="demo-form-inline">
    <hc-form-item label="Approved by">
      <hc-input v-model="formInline.user" placeholder="Approved by" clearable />
    </hc-form-item>
    <hc-form-item label="Activity zone">
      <hc-select
        v-model="formInline.region"
        placeholder="Activity zone"
        clearable
      >
        <hc-option label="Zone one" value="shanghai" />
        <hc-option label="Zone two" value="beijing" />
      </hc-select>
    </hc-form-item>
    <hc-form-item label="Activity time">
      <hc-date-picker
        v-model="formInline.date"
        type="date"
        placeholder="Pick a date"
        clearable
      />
    </hc-form-item>
    <hc-form-item>
      <hc-button type="primary" @click="onSubmit">Query</hc-button>
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formInline = reactive({
  user: '',
  region: '',
  date: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>

<style>
.demo-form-inline .hc-input {
  --hc-input-width: 220px;
}
</style>
