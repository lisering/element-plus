<template>
  <hc-alert
    title="success alert"
    type="success"
    description="more text description"
    show-icon
  />
  <hc-alert
    title="info alert"
    type="info"
    description="more text description"
    show-icon
  />
  <hc-alert
    title="warning alert"
    type="warning"
    description="more text description"
    show-icon
  />
  <hc-alert
    title="error alert"
    type="error"
    description="more text description"
    show-icon
  />
</template>
<style scoped>
.hc-alert {
  margin: 20px 0 0;
}

.hc-alert:first-child {
  margin: 0;
}
</style>
