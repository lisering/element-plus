<template>
  <hc-breadcrumb :separator-icon="ArrowRight">
    <hc-breadcrumb-item :to="{ path: '/' }">homepage</hc-breadcrumb-item>
    <hc-breadcrumb-item>promotion management</hc-breadcrumb-item>
    <hc-breadcrumb-item>promotion list</hc-breadcrumb-item>
    <hc-breadcrumb-item>promotion detail</hc-breadcrumb-item>
  </hc-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
