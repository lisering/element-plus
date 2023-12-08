<template>
  <hc-upload action="#" list-type="picture-card" :auto-upload="false">
    <hc-icon>
      <Plus />
    </hc-icon>

    <template #file="{ file }">
      <div>
        <img class="hc-upload-list__item-thumbnail" :src="file.url" alt="" />
        <span class="hc-upload-list__item-actions">
          <span
            class="hc-upload-list__item-preview"
            @click="handlePictureCardPreview(file)"
          >
            <hc-icon><zoom-in /></hc-icon>
          </span>
          <span
            v-if="!disabled"
            class="hc-upload-list__item-delete"
            @click="handleDownload(file)"
          >
            <hc-icon>
              <Download />
            </hc-icon>
          </span>
          <span
            v-if="!disabled"
            class="hc-upload-list__item-delete"
            @click="handleRemove(file)"
          >
            <hc-icon>
              <Delete />
            </hc-icon>
          </span>
        </span>
      </div>
    </template>
  </hc-upload>

  <hc-dialog v-model="dialogVisible">
    <img w-full :src="dialogImageUrl" alt="Preview Image" />
  </hc-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { Delete, Download, Plus, ZoomIn } from '@element-plus/icons-vue'

import type { UploadFile } from 'hicor-ui'

const dialogImageUrl = ref('')
const dialogVisible = ref(false)
const disabled = ref(false)

const handleRemove = (file: UploadFile) => {
  console.log(file)
}

const handlePictureCardPreview = (file: UploadFile) => {
  dialogImageUrl.value = file.url!
  dialogVisible.value = true
}

const handleDownload = (file: UploadFile) => {
  console.log(file)
}
</script>
