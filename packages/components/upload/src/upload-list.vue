<template>
  <transition-group tag="ul" :class="containerKls" :name="nsList.b()">
    <li
      v-for="file in files"
      :key="file.uid || file.name"
      :class="[
        nsUpload.be('list', 'item'),
        nsUpload.is(file.status),
        { focusing },
      ]"
      tabindex="0"
      @keydown.delete="!disabled && handleRemove(file)"
      @focus="focusing = true"
      @blur="focusing = false"
      @click="focusing = false"
    >
      <slot :file="file">
        <img
          v-if="
            listType === 'picture' ||
            (file.status !== 'uploading' && listType === 'picture-card')
          "
          :class="nsUpload.be('list', 'item-thumbnail')"
          :src="file.url"
          alt=""
        />
        <div
          v-if="file.status === 'uploading' || listType !== 'picture-card'"
          :class="nsUpload.be('list', 'item-info')"
        >
          <a
            :class="nsUpload.be('list', 'item-name')"
            @click.prevent="handlePreview(file)"
          >
            <hc-icon :class="nsIcon.m('document')">
              <Document />
            </hc-icon>
            <span
              :class="nsUpload.be('list', 'item-file-name')"
              :title="file.name"
            >
              {{ file.name }}
            </span>
          </a>
          <hc-progress
            v-if="file.status === 'uploading'"
            :type="listType === 'picture-card' ? 'circle' : 'line'"
            :stroke-width="listType === 'picture-card' ? 6 : 2"
            :percentage="Number(file.percentage)"
            :style="listType === 'picture-card' ? '' : 'margin-top: 0.5rem'"
          />
        </div>

        <label :class="nsUpload.be('list', 'item-status-label')">
          <hc-icon
            v-if="listType === 'text'"
            :class="[nsIcon.m('upload-success'), nsIcon.m('circle-check')]"
          >
            <circle-check />
          </hc-icon>
          <hc-icon
            v-else-if="['picture-card', 'picture'].includes(listType)"
            :class="[nsIcon.m('upload-success'), nsIcon.m('check')]"
          >
            <Check />
          </hc-icon>
        </label>
        <hc-icon
          v-if="!disabled"
          :class="nsIcon.m('close')"
          @click="handleRemove(file)"
        >
          <Close />
        </hc-icon>
        <!-- Due to close btn only appears when li gets focused disappears after li gets blurred, thus keyboard navigation can never reach close btn-->
        <!-- This is a bug which needs to be fixed -->
        <!-- TODO: Fix the incorrect navigation interaction -->
        <i v-if="!disabled" :class="nsIcon.m('close-tip')">{{
          t('el.upload.deleteTip')
        }}</i>
        <span
          v-if="listType === 'picture-card'"
          :class="nsUpload.be('list', 'item-actions')"
        >
          <span
            :class="nsUpload.be('list', 'item-preview')"
            @click="handlePreview(file)"
          >
            <hc-icon :class="nsIcon.m('zoom-in')"><zoom-in /></hc-icon>
          </span>
          <span
            v-if="!disabled"
            :class="nsUpload.be('list', 'item-delete')"
            @click="handleRemove(file)"
          >
            <hc-icon :class="nsIcon.m('delete')">
              <Delete />
            </hc-icon>
          </span>
        </span>
      </slot>
    </li>
    <slot name="append" />
  </transition-group>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import {
  Check,
  CircleCheck,
  Close,
  Delete,
  Document,
  ZoomIn,
} from '@element-plus/icons-vue'
import { HcIcon } from '@hicor-ui/components/icon'
import { useLocale, useNamespace } from '@hicor-ui/hooks'
import HcProgress from '@hicor-ui/components/progress'
import { useFormDisabled } from '@hicor-ui/components/form'

import { uploadListEmits, uploadListProps } from './upload-list'
import type { UploadFile } from './upload'

defineOptions({
  name: 'HcUploadList',
})

const props = defineProps(uploadListProps)
const emit = defineEmits(uploadListEmits)

const { t } = useLocale()
const nsUpload = useNamespace('upload')
const nsIcon = useNamespace('icon')
const nsList = useNamespace('list')
const disabled = useFormDisabled()

const focusing = ref(false)

const containerKls = computed(() => [
  nsUpload.b('list'),
  nsUpload.bm('list', props.listType),
  nsUpload.is('disabled', props.disabled),
])

const handleRemove = (file: UploadFile) => {
  emit('remove', file)
}
</script>
