<template>
  <hc-row :gutter="20">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row :gutter="20">
    <hc-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row :gutter="20">
    <hc-col :span="12" :offset="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
</template>

<style>
.hc-row {
  margin-bottom: 20px;
}

.hc-row:last-child {
  margin-bottom: 0;
}

.hc-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
