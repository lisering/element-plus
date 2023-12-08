<template>
  <hc-carousel :interval="5000" arrow="always">
    <hc-carousel-item v-for="item in 4" :key="item">
      <h3 text="2xl" justify="center">{{ item }}</h3>
    </hc-carousel-item>
  </hc-carousel>
</template>

<style scoped>
.hc-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
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
