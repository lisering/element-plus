<template>
  <hc-row>
    <hc-col :span="24">
      <div class="grid-content ep-bg-purple-dark" />
    </hc-col>
  </hc-row>
  <hc-row>
    <hc-col :span="12">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="12">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
  </hc-row>
  <hc-row>
    <hc-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="8">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="8">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
  </hc-row>
  <hc-row>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="4">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
  </hc-row>
</template>

<style lang="scss">
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
