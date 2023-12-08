<template>
  <div class="alignment-container">
    <hc-space>
      string
      <hc-button> button </hc-button>
      <hc-card>
        <template #header> header </template>
        body
      </hc-card>
    </hc-space>
  </div>
  <div class="alignment-container">
    <hc-space alignment="flex-start">
      string
      <hc-button> button </hc-button>
      <hc-card>
        <template #header> header </template>
        body
      </hc-card>
    </hc-space>
  </div>
  <div class="alignment-container">
    <hc-space alignment="flex-end">
      string
      <hc-button> button </hc-button>
      <hc-card>
        <template #header> header </template>
        body
      </hc-card>
    </hc-space>
  </div>
</template>

<style>
.alignment-container {
  width: 240px;
  margin-bottom: 20px;
  padding: 8px;
  border: 1px solid var(--hc-border-color);
}
</style>
