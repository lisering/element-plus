<template>
  <div class="demo-progress">
    <hc-progress :percentage="50" :indeterminate="true" />
    <hc-progress :percentage="100" :format="format" :indeterminate="true" />
    <hc-progress
      :percentage="100"
      status="success"
      :indeterminate="true"
      :duration="5"
    />
    <hc-progress
      :percentage="100"
      status="warning"
      :indeterminate="true"
      :duration="1"
    />
    <hc-progress :percentage="50" status="exception" :indeterminate="true" />
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
