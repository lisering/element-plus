<template>
  <hc-button text @click="open">Click to open Message Box</hc-button>
</template>

<script lang="ts" setup>
import { h } from 'vue'
import { HcMessage, HcMessageBox } from 'hicor-ui'
const open = () => {
  HcMessageBox({
    title: 'Message',
    message: h('p', null, [
      h('span', null, 'Message can be '),
      h('i', { style: 'color: teal' }, 'VNode'),
    ]),
    showCancelButton: true,
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        instance.confirmButtonLoading = true
        instance.confirmButtonText = 'Loading...'
        setTimeout(() => {
          done()
          setTimeout(() => {
            instance.confirmButtonLoading = false
          }, 300)
        }, 3000)
      } else {
        done()
      }
    },
  }).then((action) => {
    HcMessage({
      type: 'info',
      message: `action: ${action}`,
    })
  })
}
</script>
