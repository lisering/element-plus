<template>
  <hc-space direction="vertical" alignment="start" :size="30">
    <hc-radio-group v-model="size">
      <hc-radio :label="'large'">large</hc-radio>
      <hc-radio :label="'default'">default</hc-radio>
      <hc-radio :label="'small'">small</hc-radio>
    </hc-radio-group>

    <hc-space wrap :size="size">
      <hc-card v-for="i in 3" :key="i" class="box-card" style="width: 250px">
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
  </hc-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const size = ref('default')
</script>
