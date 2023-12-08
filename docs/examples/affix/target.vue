<template>
  <div class="affix-container">
    <hc-affix target=".affix-container" :offset="80">
      <hc-button type="primary">Target container</hc-button>
    </hc-affix>
  </div>
</template>
<style scoped>
.affix-container {
  text-align: center;
  height: 400px;
  border-radius: 4px;
  background: var(--hc-color-primary-light-9);
}
</style>
