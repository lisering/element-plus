<template>
  <hc-button plain @click="open">Common VNode</hc-button>
  <hc-button plain @click="open1">Dynamic props</hc-button>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { HcMessageBox, HcSwitch } from 'hicor-ui'

const open = () => {
  HcMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}

const open1 = () => {
  const checked = ref<boolean | string | number>(false)
  HcMessageBox({
    title: 'Message',
    // Should pass a function if VNode contains dynamic props
    message: () =>
      h(HcSwitch, {
        modelValue: checked.value,
        'onUpdate:modelValue': (val: boolean | string | number) => {
          checked.value = val
        },
      }),
  })
}
</script>
