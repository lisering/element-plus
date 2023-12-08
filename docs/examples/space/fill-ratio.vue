<template>
  <div>
    <div style="margin-bottom: 15px">
      direction:
      <hc-radio v-model="direction" label="horizontal">horizontal</hc-radio>
      <hc-radio v-model="direction" label="vertical">vertical</hc-radio>
    </div>
    <div style="margin-bottom: 15px">
      fillRatio:<hc-slider v-model="fillRatio" />
    </div>
    <hc-space
      fill
      wrap
      :fill-ratio="fillRatio"
      :direction="direction"
      style="width: 100%"
    >
      <hc-card v-for="i in 5" :key="i" class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <hc-button class="button" text>Operation button</hc-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">
          {{ 'List item ' + o }}
        </div>
      </hc-card>
    </hc-space>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const direction = ref('horizontal')
const fillRatio = ref(30)
</script>
