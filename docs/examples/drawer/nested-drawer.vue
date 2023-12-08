<template>
  <hc-button type="primary" style="margin-left: 16px" @click="drawer = true">
    open
  </hc-button>

  <hc-drawer v-model="drawer" title="I'm outer Drawer" size="50%">
    <div>
      <hc-button @click="innerDrawer = true">Click me!</hc-button>
      <hc-drawer
        v-model="innerDrawer"
        title="I'm inner Drawer"
        :append-to-body="true"
        :before-close="handleClose"
      >
        <p>_(:зゝ∠)_</p>
      </hc-drawer>
    </div>
  </hc-drawer>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HcMessageBox } from 'hicor-ui'

const drawer = ref(false)
const innerDrawer = ref(false)

const handleClose = (done: () => void) => {
  HcMessageBox.confirm('You still have unsaved data, proceed?')
    .then(() => {
      done()
    })
    .catch(() => {
      // catch error
    })
}
</script>
