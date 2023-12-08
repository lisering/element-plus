<template>
  <div>
    <hc-checkbox-group v-model="checkboxGroup1" size="large">
      <hc-checkbox-button v-for="city in cities" :key="city" :label="city">
        {{ city }}
      </hc-checkbox-button>
    </hc-checkbox-group>
  </div>
  <div class="demo-button-style">
    <hc-checkbox-group v-model="checkboxGroup2">
      <hc-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</hc-checkbox-button>
    </hc-checkbox-group>
  </div>
  <div class="demo-button-style">
    <hc-checkbox-group v-model="checkboxGroup3" size="small">
      <hc-checkbox-button
        v-for="city in cities"
        :key="city"
        :label="city"
        :disabled="city === 'Beijing'"
        >{{ city }}</hc-checkbox-button
      >
    </hc-checkbox-group>
  </div>
  <div class="demo-button-style">
    <hc-checkbox-group v-model="checkboxGroup4" size="small" disabled>
      <hc-checkbox-button v-for="city in cities" :key="city" :label="city">{{
        city
      }}</hc-checkbox-button>
    </hc-checkbox-group>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const checkboxGroup1 = ref(['Shanghai'])
const checkboxGroup2 = ref(['Shanghai'])
const checkboxGroup3 = ref(['Shanghai'])
const checkboxGroup4 = ref(['Shanghai'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
</script>

<style scoped>
.demo-button-style {
  margin-top: 24px;
}
</style>
