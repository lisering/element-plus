<template>
  <div>
    <div style="margin-bottom: 15px">fill: <hc-switch v-model="fill" /></div>
    <hc-space :fill="fill" wrap>
      <hc-card v-for="i in 3" :key="i" class="box-card">
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

const fill = ref(true)
</script>
