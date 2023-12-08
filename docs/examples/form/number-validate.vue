<template>
  <hc-form
    ref="formRef"
    :model="numberValidateForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <hc-form-item
      label="age"
      prop="age"
      :rules="[
        { required: true, message: 'age is required' },
        { type: 'number', message: 'age must be a number' },
      ]"
    >
      <hc-input
        v-model.number="numberValidateForm.age"
        type="text"
        autocomplete="off"
      />
    </hc-form-item>
    <hc-form-item>
      <hc-button type="primary" @click="submitForm(formRef)">Submit</hc-button>
      <hc-button @click="resetForm(formRef)">Reset</hc-button>
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance } from 'hicor-ui'

const formRef = ref<FormInstance>()

const numberValidateForm = reactive({
  age: '',
})

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
