<template>
  <div class="demo-progress">
    <hc-progress type="circle" :percentage="0" />
    <hc-progress type="circle" :percentage="25" />
    <hc-progress type="circle" :percentage="100" status="success" />
    <hc-progress type="circle" :percentage="70" status="warning" />
    <hc-progress type="circle" :percentage="50" status="exception" />
  </div>
</template>
<style scoped>
.demo-progress .hc-progress--circle {
  margin-right: 15px;
}
</style>
