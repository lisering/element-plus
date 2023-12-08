<template>
  <hc-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="120px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <hc-form-item label="Activity name" prop="name">
      <hc-input v-model="ruleForm.name" />
    </hc-form-item>
    <hc-form-item label="Activity zone" prop="region">
      <hc-select v-model="ruleForm.region" placeholder="Activity zone">
        <hc-option label="Zone one" value="shanghai" />
        <hc-option label="Zone two" value="beijing" />
      </hc-select>
    </hc-form-item>
    <hc-form-item label="Activity count" prop="count">
      <hc-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </hc-form-item>
    <hc-form-item label="Activity time" required>
      <hc-col :span="11">
        <hc-form-item prop="date1">
          <hc-date-picker
            v-model="ruleForm.date1"
            type="date"
            label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </hc-form-item>
      </hc-col>
      <hc-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </hc-col>
      <hc-col :span="11">
        <hc-form-item prop="date2">
          <hc-time-picker
            v-model="ruleForm.date2"
            label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </hc-form-item>
      </hc-col>
    </hc-form-item>
    <hc-form-item label="Instant delivery" prop="delivery">
      <hc-switch v-model="ruleForm.delivery" />
    </hc-form-item>
    <hc-form-item label="Activity type" prop="type">
      <hc-checkbox-group v-model="ruleForm.type">
        <hc-checkbox label="Online activities" name="type" />
        <hc-checkbox label="Promotion activities" name="type" />
        <hc-checkbox label="Offline activities" name="type" />
        <hc-checkbox label="Simple brand exposure" name="type" />
      </hc-checkbox-group>
    </hc-form-item>
    <hc-form-item label="Resources" prop="resource">
      <hc-radio-group v-model="ruleForm.resource">
        <hc-radio label="Sponsorship" />
        <hc-radio label="Venue" />
      </hc-radio-group>
    </hc-form-item>
    <hc-form-item label="Activity form" prop="desc">
      <hc-input v-model="ruleForm.desc" type="textarea" />
    </hc-form-item>
    <hc-form-item>
      <hc-button type="primary" @click="submitForm(ruleFormRef)">
        Create
      </hc-button>
      <hc-button @click="resetForm(ruleFormRef)">Reset</hc-button>
    </hc-form-item>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'hicor-ui'

interface RuleForm {
  name: string
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  type: string[]
  resource: string
  desc: string
}

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
