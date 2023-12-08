<template>
  <hc-button text @click="open">Click to open Message Box</hc-button>
</template>

<script lang="ts" setup>
import { HcMessage, HcMessageBox } from 'hicor-ui'
import type { Action } from 'hicor-ui'
const open = () => {
  HcMessageBox.confirm(
    'You have unsaved changes, save and proceed?',
    'Confirm',
    {
      distinguishCancelAndClose: true,
      confirmButtonText: 'Save',
      cancelButtonText: 'Discard Changes',
    }
  )
    .then(() => {
      HcMessage({
        type: 'info',
        message: 'Changes saved. Proceeding to a new route.',
      })
    })
    .catch((action: Action) => {
      HcMessage({
        type: 'info',
        message:
          action === 'cancel'
            ? 'Changes discarded. Proceeding to a new route.'
            : 'Stay in the current route',
      })
    })
}
</script>
