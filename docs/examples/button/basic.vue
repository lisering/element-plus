<template>
  <hc-row class="mb-4">
    <hc-button>Default</hc-button>
    <hc-button type="primary">Primary</hc-button>
    <hc-button type="success">Success</hc-button>
    <hc-button type="info">Info</hc-button>
    <hc-button type="warning">Warning</hc-button>
    <hc-button type="danger">Danger</hc-button>
  </hc-row>

  <hc-row class="mb-4">
    <hc-button plain>Plain</hc-button>
    <hc-button type="primary" plain>Primary</hc-button>
    <hc-button type="success" plain>Success</hc-button>
    <hc-button type="info" plain>Info</hc-button>
    <hc-button type="warning" plain>Warning</hc-button>
    <hc-button type="danger" plain>Danger</hc-button>
  </hc-row>

  <hc-row class="mb-4">
    <hc-button round>Round</hc-button>
    <hc-button type="primary" round>Primary</hc-button>
    <hc-button type="success" round>Success</hc-button>
    <hc-button type="info" round>Info</hc-button>
    <hc-button type="warning" round>Warning</hc-button>
    <hc-button type="danger" round>Danger</hc-button>
  </hc-row>

  <hc-row>
    <hc-button :icon="Search" circle />
    <hc-button type="primary" :icon="Edit" circle />
    <hc-button type="success" :icon="Check" circle />
    <hc-button type="info" :icon="Message" circle />
    <hc-button type="warning" :icon="Star" circle />
    <hc-button type="danger" :icon="Delete" circle />
  </hc-row>
</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'
</script>
