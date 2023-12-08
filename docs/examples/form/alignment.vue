<template>
  <hc-radio-group v-model="labelPosition" label="label position">
    <hc-radio-button label="left">Left</hc-radio-button>
    <hc-radio-button label="right">Right</hc-radio-button>
    <hc-radio-button label="top">Top</hc-radio-button>
  </hc-radio-group>
  <div style="margin: 20px" />
  <hc-form
    :label-position="labelPosition"
    label-width="100px"
    :model="formLabelAlign"
    style="max-width: 460px"
  >
    <hc-form-item label="Name">
      <hc-input v-model="formLabelAlign.name" />
    </hc-form-item>
    <hc-form-item label="Activity zone">
      <hc-input v-model="formLabelAlign.region" />
    </hc-form-item>
    <hc-form-item label="Activity form">
      <hc-input v-model="formLabelAlign.type" />
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormProps } from 'hicor-ui'

const labelPosition = ref<FormProps['labelPosition']>('right')

const formLabelAlign = reactive({
  name: '',
  region: '',
  type: '',
})
</script>
