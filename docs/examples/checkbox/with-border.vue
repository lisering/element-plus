<template>
  <div>
    <hc-checkbox v-model="checked1" label="Option1" size="large" border />
    <hc-checkbox v-model="checked2" label="Option2" size="large" border />
  </div>
  <div class="mt-4">
    <hc-checkbox v-model="checked3" label="Option1" border />
    <hc-checkbox v-model="checked4" label="Option2" border />
  </div>
  <div class="mt-4">
    <hc-checkbox-group v-model="checkboxGroup1" size="small">
      <hc-checkbox label="Option1" border />
      <hc-checkbox label="Option2" border />
    </hc-checkbox-group>
  </div>
  <div class="mt-4">
    <hc-checkbox-group v-model="checkboxGroup1" size="small">
      <hc-checkbox label="Option1" border disabled />
      <hc-checkbox label="Option2" border disabled />
    </hc-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(false)
const checked4 = ref(true)
const checkboxGroup1 = ref(['Option1'])
</script>
