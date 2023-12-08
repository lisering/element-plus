<template>
  <hc-row class="row-bg">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row class="row-bg" justify="center">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row class="row-bg" justify="end">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row class="row-bg" justify="space-between">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row class="row-bg" justify="space-around">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
  </hc-row>
  <hc-row class="row-bg" justify="space-evenly">
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple" />
    </hc-col>
    <hc-col :span="6">
      <div class="grid-content ep-bg-purple-light" />
    </hc-col>
    <hc-col :span="6">
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
