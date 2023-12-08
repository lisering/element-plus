<template>
  <div>
    <hc-link disabled>default</hc-link>
    <hc-link type="primary" disabled>primary</hc-link>
    <hc-link type="success" disabled>success</hc-link>
    <hc-link type="warning" disabled>warning</hc-link>
    <hc-link type="danger" disabled>danger</hc-link>
    <hc-link type="info" disabled>info</hc-link>
  </div>
</template>
<style scoped>
.hc-link {
  margin-right: 8px;
}

.hc-link .hc-icon--right.hc-icon {
  vertical-align: text-bottom;
}
</style>
