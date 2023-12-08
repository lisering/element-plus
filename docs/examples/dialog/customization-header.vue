<template>
  <hc-button @click="visible = true">
    Open Dialog with customized header
  </hc-button>
  <hc-dialog v-model="visible" :show-close="false">
    <template #header="{ close, titleId, titleClass }">
      <div class="my-header">
        <h4 :id="titleId" :class="titleClass">This is a custom header!</h4>
        <hc-button type="danger" @click="close">
          <hc-icon class="hc-icon--left">
            <CircleCloseFilled />
          </hc-icon>
          Close
        </hc-button>
      </div>
    </template>
    This is dialog content.
  </hc-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { HcButton, HcDialog } from 'hicor-ui'
import { CircleCloseFilled } from '@element-plus/icons-vue'

const visible = ref(false)
</script>

<style scoped>
.my-header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>
