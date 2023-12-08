<template>
  <div aria-label="A complete example of page header">
    <hc-page-header @back="onBack">
      <template #breadcrumb>
        <hc-breadcrumb separator="/">
          <hc-breadcrumb-item :to="{ path: './page-header.html' }">
            homepage
          </hc-breadcrumb-item>
          <hc-breadcrumb-item
            ><a href="./page-header.html">route 1</a></hc-breadcrumb-item
          >
          <hc-breadcrumb-item>route 2</hc-breadcrumb-item>
        </hc-breadcrumb>
      </template>
      <template #content>
        <div class="flex items-center">
          <hc-avatar
            class="mr-3"
            :size="32"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <span class="text-large font-600 mr-3"> Title </span>
          <span
            class="text-sm mr-2"
            style="color: var(--hc-text-color-regular)"
          >
            Sub title
          </span>
          <hc-tag>Default</hc-tag>
        </div>
      </template>
      <template #extra>
        <div class="flex items-center">
          <hc-button>Print</hc-button>
          <hc-button type="primary" class="ml-2">Edit</hc-button>
        </div>
      </template>

      <hc-descriptions :column="3" size="small" class="mt-4">
        <hc-descriptions-item label="Username"
          >kooriookami</hc-descriptions-item
        >
        <hc-descriptions-item label="Telephone"
          >18100000000</hc-descriptions-item
        >
        <hc-descriptions-item label="Place">Suzhou</hc-descriptions-item>
        <hc-descriptions-item label="Remarks">
          <hc-tag size="small">School</hc-tag>
        </hc-descriptions-item>
        <hc-descriptions-item label="Address"
          >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
        </hc-descriptions-item>
      </hc-descriptions>
      <p class="mt-4 text-sm">
        Hicor Ui team uses <b>weekly</b> release strategy under normal
        circumstance, but critical bug fixes would require hotfix so the actual
        release number <b>could be</b> more than 1 per week.
      </p>
    </hc-page-header>
  </div>
</template>

<script setup lang="ts">
import { HcNotification as notify } from 'hicor-ui'

const onBack = () => {
  notify('Back')
}
</script>
