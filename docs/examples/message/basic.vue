<template>
  <hc-button :plain="true" @click="open">Show message</hc-button>
  <hc-button :plain="true" @click="openVn">VNode</hc-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HcMessage } from 'hicor-ui'

const open = () => {
  HcMessage('this is a message.')
}

const openVn = () => {
  HcMessage({
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
  })
}
</script>
