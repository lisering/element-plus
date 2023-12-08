<template>
  <div>
    <hc-input v-model="input1" placeholder="Please input">
      <template #prepend>Http://</template>
    </hc-input>
  </div>
  <div class="mt-4">
    <hc-input v-model="input2" placeholder="Please input">
      <template #append>.com</template>
    </hc-input>
  </div>
  <div class="mt-4">
    <hc-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <hc-select v-model="select" placeholder="Select" style="width: 115px">
          <hc-option label="Restaurant" value="1" />
          <hc-option label="Order No." value="2" />
          <hc-option label="Tel" value="3" />
        </hc-select>
      </template>
      <template #append>
        <hc-button :icon="Search" />
      </template>
    </hc-input>
  </div>
  <div class="mt-4">
    <hc-input
      v-model="input3"
      placeholder="Please input"
      class="input-with-select"
    >
      <template #prepend>
        <hc-button :icon="Search" />
      </template>
      <template #append>
        <hc-select v-model="select" placeholder="Select" style="width: 115px">
          <hc-option label="Restaurant" value="1" />
          <hc-option label="Order No." value="2" />
          <hc-option label="Tel" value="3" />
        </hc-select>
      </template>
    </hc-input>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input1 = ref('')
const input2 = ref('')
const input3 = ref('')
const select = ref('')
</script>

<style>
.input-with-select .hc-input-group__prepend {
  background-color: var(--hc-fill-color-blank);
}
</style>
