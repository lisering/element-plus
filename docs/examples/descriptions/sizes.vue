<template>
  <hc-radio-group v-model="size">
    <hc-radio label="large">Large</hc-radio>
    <hc-radio>Default</hc-radio>
    <hc-radio label="small">Small</hc-radio>
  </hc-radio-group>

  <hc-descriptions
    class="margin-top"
    title="With border"
    :column="3"
    :size="size"
    border
  >
    <template #extra>
      <hc-button type="primary">Operation</hc-button>
    </template>
    <hc-descriptions-item>
      <template #label>
        <div class="cell-item">
          <hc-icon :style="iconStyle">
            <user />
          </hc-icon>
          Username
        </div>
      </template>
      kooriookami
    </hc-descriptions-item>
    <hc-descriptions-item>
      <template #label>
        <div class="cell-item">
          <hc-icon :style="iconStyle">
            <iphone />
          </hc-icon>
          Telephone
        </div>
      </template>
      18100000000
    </hc-descriptions-item>
    <hc-descriptions-item>
      <template #label>
        <div class="cell-item">
          <hc-icon :style="iconStyle">
            <location />
          </hc-icon>
          Place
        </div>
      </template>
      Suzhou
    </hc-descriptions-item>
    <hc-descriptions-item>
      <template #label>
        <div class="cell-item">
          <hc-icon :style="iconStyle">
            <tickets />
          </hc-icon>
          Remarks
        </div>
      </template>
      <hc-tag size="small">School</hc-tag>
    </hc-descriptions-item>
    <hc-descriptions-item>
      <template #label>
        <div class="cell-item">
          <hc-icon :style="iconStyle">
            <office-building />
          </hc-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </hc-descriptions-item>
  </hc-descriptions>

  <hc-descriptions
    class="margin-top"
    title="Without border"
    :column="3"
    :size="size"
    :style="blockMargin"
  >
    <template #extra>
      <hc-button type="primary">Operation</hc-button>
    </template>
    <hc-descriptions-item label="Username">kooriookami</hc-descriptions-item>
    <hc-descriptions-item label="Telephone">18100000000</hc-descriptions-item>
    <hc-descriptions-item label="Place">Suzhou</hc-descriptions-item>
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
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

const size = ref('')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px',
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default,
  }
})
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

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}
</style>
