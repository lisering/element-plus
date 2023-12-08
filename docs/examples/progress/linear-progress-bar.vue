<template>
  <div class="demo-progress">
    <hc-progress :percentage="50" />
    <hc-progress :percentage="100" :format="format" />
    <hc-progress :percentage="100" status="success" />
    <hc-progress :percentage="100" status="warning" />
    <hc-progress :percentage="50" status="exception" />
  </div>
</template>

<script lang="ts" setup>
const format = (percentage) => (percentage === 100 ? 'Full' : `${percentage}%`)
</script>

<style scoped>
.demo-progress .hc-progress--line {
  margin-bottom: 15px;
  width: 350px;
}
</style>
