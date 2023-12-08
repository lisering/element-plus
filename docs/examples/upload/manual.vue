<template>
  <hc-upload
    ref="uploadRef"
    class="upload-demo"
    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
    :auto-upload="false"
  >
    <template #trigger>
      <hc-button type="primary">select file</hc-button>
    </template>

    <hc-button class="ml-3" type="success" @click="submitUpload">
      upload to server
    </hc-button>

    <template #tip>
      <div class="hc-upload__tip">
        jpg/png files with a size less than 500kb
      </div>
    </template>
  </hc-upload>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import type { UploadInstance } from 'hicor-ui'

const uploadRef = ref<UploadInstance>()

const submitUpload = () => {
  uploadRef.value!.submit()
}
</script>
