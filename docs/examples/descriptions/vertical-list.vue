<template>
  <hc-radio-group v-model="size">
    <hc-radio label="large">Large</hc-radio>
    <hc-radio>Default</hc-radio>
    <hc-radio label="small">Small</hc-radio>
  </hc-radio-group>

  <hc-descriptions
    title="Vertical list with border"
    direction="vertical"
    :column="4"
    :size="size"
    border
  >
    <hc-descriptions-item label="Username">kooriookami</hc-descriptions-item>
    <hc-descriptions-item label="Telephone">18100000000</hc-descriptions-item>
    <hc-descriptions-item label="Place" :span="2">Suzhou</hc-descriptions-item>
    <hc-descriptions-item label="Remarks">
      <hc-tag size="small">School</hc-tag>
    </hc-descriptions-item>
    <hc-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </hc-descriptions-item>
  </hc-descriptions>

  <hc-descriptions
    title="Vertical list without border"
    :column="4"
    :size="size"
    direction="vertical"
    :style="blockMargin"
  >
    <hc-descriptions-item label="Username">kooriookami</hc-descriptions-item>
    <hc-descriptions-item label="Telephone">18100000000</hc-descriptions-item>
    <hc-descriptions-item label="Place" :span="2">Suzhou</hc-descriptions-item>
    <hc-descriptions-item label="Remarks">
      <hc-tag size="small">School</hc-tag>
    </hc-descriptions-item>
    <hc-descriptions-item label="Address"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </hc-descriptions-item>
  </hc-descriptions>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const size = ref('')
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px',
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default,
  }
})
</script>

<style scoped>
.hc-descriptions {
  margin-top: 20px;
}
</style>
