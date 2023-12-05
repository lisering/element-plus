<template>
  <div :class="[ns.e('item'), ns.e(variant)]">
    <picture-filled v-if="variant === 'image'" />
  </div>
</template>

<script lang="ts" setup>
import { PictureFilled } from '@element-plus/icons-vue'
import { useNamespace } from '@hicor-ui/hooks'
import { skeletonItemProps } from './skeleton-item'

defineOptions({
  name: 'ElSkeletonItem',
})
defineProps(skeletonItemProps)
const ns = useNamespace('skeleton')
</script>
