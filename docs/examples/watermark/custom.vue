<script setup lang="ts">
import { reactive } from 'vue'

const config = reactive({
  content: 'Hicor Ui',
  font: {
    fontSize: 16,
    color: 'rgba(0, 0, 0, 0.15)',
  },
  zIndex: -1,
  rotate: -22,
  gap: [100, 100] as [number, number],
  offset: [] as unknown as [number, number],
})
</script>

<template>
  <div class="wrapper">
    <hc-watermark
      class="watermark"
      :content="config.content"
      :font="config.font"
      :z-index="config.zIndex"
      :rotate="config.rotate"
      :gap="config.gap"
      :offset="config.offset"
    >
      <div class="demo">
        <h1>Hicor Ui</h1>
        <h2>A Vue 3 based component library for designers and developers</h2>
        <img src="/images/hamburger.png" alt="示例图片" />
      </div>
    </hc-watermark>
    <hc-form
      class="form"
      :model="config"
      label-position="top"
      label-width="50px"
    >
      <hc-form-item label="Content">
        <hc-input v-model="config.content" />
      </hc-form-item>
      <hc-form-item label="Color">
        <hc-color-picker v-model="config.font.color" show-alpha />
      </hc-form-item>
      <hc-form-item label="FontSize">
        <hc-slider v-model="config.font.fontSize" />
      </hc-form-item>
      <hc-form-item label="zIndex">
        <hc-slider v-model="config.zIndex" />
      </hc-form-item>
      <hc-form-item label="Rotate">
        <hc-slider v-model="config.rotate" :min="-180" :max="180" />
      </hc-form-item>
      <hc-form-item label="Gap">
        <hc-space>
          <hc-input-number v-model="config.gap[0]" controls-position="right" />
          <hc-input-number v-model="config.gap[1]" controls-position="right" />
        </hc-space>
      </hc-form-item>
      <hc-form-item label="Offset">
        <hc-space>
          <hc-input-number
            v-model="config.offset[0]"
            placeholder="offsetLeft"
            controls-position="right"
          />
          <hc-input-number
            v-model="config.offset[1]"
            placeholder="offsetTop"
            controls-position="right"
          />
        </hc-space>
      </hc-form-item>
    </hc-form>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.watermark {
  display: flex;
  flex: auto;
}

.demo {
  flex: auto;
}

.form {
  width: 330px;
  margin-left: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}

img {
  z-index: 10;
  width: 100%;
  max-width: 300px;
  position: relative;
}
</style>
