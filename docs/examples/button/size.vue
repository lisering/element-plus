<template>
  <hc-row>
    <hc-button size="large">Large</hc-button>
    <hc-button>Default</hc-button>
    <hc-button size="small">Small</hc-button>
    <hc-button size="large" :icon="Search">Search</hc-button>
    <hc-button :icon="Search">Search</hc-button>
    <hc-button size="small" :icon="Search">Search</hc-button>
  </hc-row>
  <hc-row class="my-4">
    <hc-button size="large" round>Large</hc-button>
    <hc-button round>Default</hc-button>
    <hc-button size="small" round>Small</hc-button>
    <hc-button size="large" :icon="Search" round>Search</hc-button>
    <hc-button :icon="Search" round>Search</hc-button>
    <hc-button size="small" :icon="Search" round>Search</hc-button>
  </hc-row>
  <hc-row>
    <hc-button :icon="Search" size="large" circle />
    <hc-button :icon="Search" circle />
    <hc-button :icon="Search" size="small" circle />
  </hc-row>
</template>

<script setup lang="ts">
import { Search } from '@element-plus/icons-vue'
</script>
