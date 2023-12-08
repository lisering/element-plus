<template>
  <hc-alert title="unclosable alert" type="success" :closable="false" />
  <hc-alert title="customized close-text" type="info" close-text="Gotcha" />
  <hc-alert title="alert with callback" type="warning" @close="hello" />
</template>

<script lang="ts" setup>
const hello = () => {
  // eslint-disable-next-line no-alert
  alert('Hello World!')
}
</script>
<style scoped>
.hc-alert {
  margin: 20px 0 0;
}

.hc-alert:first-child {
  margin: 0;
}
</style>
