<template>
  <hc-radio-group v-model="direction">
    <hc-radio label="ltr">left to right</hc-radio>
    <hc-radio label="rtl">right to left</hc-radio>
    <hc-radio label="ttb">top to bottom</hc-radio>
    <hc-radio label="btt">bottom to top</hc-radio>
  </hc-radio-group>

  <hc-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </hc-button>
  <hc-button type="primary" style="margin-left: 16px" @click="drawer2 = true">
    with footer
  </hc-button>

  <hc-drawer v-model="drawer" title="I am the title" :direction="direction">
    <span>Hi, there!</span>
  </hc-drawer>
  <hc-drawer v-model="drawer2" :direction="direction">
    <template #title>
      <h4>set title by slot</h4>
    </template>
    <template #default>
      <div>
        <hc-radio v-model="radio1" label="Option 1" size="large">Option 1</hc-radio>
        <hc-radio v-model="radio1" label="Option 2" size="large">Option 2</hc-radio>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <hc-button @click="cancelClick">cancel</hc-button>
        <hc-button type="primary">confirm</hc-button>
      </div>
    </template>
  </hc-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const drawer = ref(false)
const drawer2 = ref(false)
const direction = ref<'rtl'>('rtl')
const radio1 = ref('Option 1')

function cancelClick() {
  drawer2.value = false
}
</script>
