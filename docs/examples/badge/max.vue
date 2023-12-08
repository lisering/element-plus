<template>
  <hc-badge :value="200" :max="99" class="item">
    <hc-button>comments</hc-button>
  </hc-badge>
  <hc-badge :value="100" :max="10" class="item">
    <hc-button>replies</hc-button>
  </hc-badge>
</template>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
