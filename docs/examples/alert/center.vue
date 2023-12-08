<template>
  <hc-alert title="success alert" type="success" center show-icon />
  <hc-alert title="info alert" type="info" center show-icon />
  <hc-alert title="warning alert" type="warning" center show-icon />
  <hc-alert title="error alert" type="error" center show-icon />
</template>
<style scoped>
.hc-alert {
  margin: 20px 0 0;
}

.hc-alert:first-child {
  margin: 0;
}
</style>
