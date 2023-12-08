<template>
  <div>
    <hc-link :underline="false">Without Underline</hc-link>
    <hc-link>With Underline</hc-link>
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
