<template>
  <button
    type="button"
    class="btn-prev"
    :disabled="internalDisabled"
    :aria-label="prevText || t('el.pagination.prev')"
    :aria-disabled="internalDisabled"
    @click="$emit('click', $event)"
  >
    <span v-if="prevText">{{ prevText }}</span>
    <hc-icon v-else>
      <component :is="prevIcon" />
    </hc-icon>
  </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLocale } from '@hicor-ui/hooks'
import { HcIcon } from '@hicor-ui/components/icon'
import { paginationPrevEmits, paginationPrevProps } from './prev'

defineOptions({
  name: 'HcPaginationPrev',
})

const props = defineProps(paginationPrevProps)
defineEmits(paginationPrevEmits)

const { t } = useLocale()

const internalDisabled = computed(
  () => props.disabled || props.currentPage <= 1
)
</script>
