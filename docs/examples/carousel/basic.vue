<template>
  <div class="block text-center">
    <span class="demonstration"
      >Switch when indicator is hovered (default)</span
    >
    <hc-carousel height="150px">
      <hc-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </hc-carousel-item>
    </hc-carousel>
  </div>
  <div class="block text-center" m="t-4">
    <span class="demonstration">Switch when indicator is clicked</span>
    <hc-carousel trigger="click" height="150px">
      <hc-carousel-item v-for="item in 4" :key="item">
        <h3 class="small justify-center" text="2xl">{{ item }}</h3>
      </hc-carousel-item>
    </hc-carousel>
  </div>
</template>

<style scoped>
.demonstration {
  color: var(--hc-text-color-secondary);
}

.hc-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.hc-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.hc-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
