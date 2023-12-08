<template>
  <div class="play-container">
    <!-- <hc-icon color="#409EFC">
      <hc-icon-check />
    </hc-icon>
    <hc-icon>
      <hc-icon-menu />
    </hc-icon>
    <hc-button>test</hc-button>
    <div v-loading="true" /> -->
    <hc-top-menu></hc-top-menu>
  </div>
</template>

<script setup lang="ts">
// code here
</script>

<style lang="scss">
html,
body {
  width: 100vw;
  height: 100vh;
  margin: 0;

  #play {
    height: 100%;
    width: 100%;

    .play-container {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
