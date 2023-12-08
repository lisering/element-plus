<template>
  <div>
    <hc-button @click="show = !show">Click Me</hc-button>

    <div style="display: flex; margin-top: 20px; height: 100px">
      <transition name="hc-zoom-in-center">
        <div v-show="show" class="transition-box">.hc-zoom-in-center</div>
      </transition>

      <transition name="hc-zoom-in-top">
        <div v-show="show" class="transition-box">.hc-zoom-in-top</div>
      </transition>

      <transition name="hc-zoom-in-bottom">
        <div v-show="show" class="transition-box">.hc-zoom-in-bottom</div>
      </transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const show = ref(true)
</script>

<style>
.transition-box {
  margin-bottom: 10px;
  width: 200px;
  height: 100px;
  border-radius: 4px;
  background-color: #409eff;
  text-align: center;
  color: #fff;
  padding: 40px 20px;
  box-sizing: border-box;
  margin-right: 20px;
}
</style>
