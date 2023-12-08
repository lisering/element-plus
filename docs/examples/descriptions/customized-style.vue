<template>
  <hc-descriptions title="Customized style list" :column="3" border>
    <hc-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
      >kooriookami</hc-descriptions-item
    >
    <hc-descriptions-item label="Telephone" label-align="right" align="center"
      >18100000000</hc-descriptions-item
    >
    <hc-descriptions-item label="Place" label-align="right" align="center"
      >Suzhou</hc-descriptions-item
    >
    <hc-descriptions-item label="Remarks" label-align="right" align="center">
      <hc-tag size="small">School</hc-tag>
    </hc-descriptions-item>
    <hc-descriptions-item label="Address" label-align="right" align="center"
      >No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu
      Province</hc-descriptions-item
    >
  </hc-descriptions>
</template>
<style scoped>
:deep(.my-label) {
  background: var(--hc-color-success-light-9) !important;
}

:deep(.my-content) {
  background: var(--hc-color-danger-light-9);
}
</style>
