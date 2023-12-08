<template>
  <span :class="ns.e('item')">
    <span
      ref="link"
      :class="[ns.e('inner'), ns.is('link', !!to)]"
      role="link"
      @click="onClick"
    >
      <slot />
    </span>
    <hc-icon v-if="breadcrumbContext?.separatorIcon" :class="ns.e('separator')">
      <component :is="breadcrumbContext.separatorIcon" />
    </hc-icon>
    <span v-else :class="ns.e('separator')" role="presentation">
      {{ breadcrumbContext?.separator }}
    </span>
  </span>
</template>

<script lang="ts" setup>
import { getCurrentInstance, inject, ref } from 'vue'
import HcIcon from '@hicor-ui/components/icon'
import { useNamespace } from '@hicor-ui/hooks'
import { breadcrumbKey } from './constants'
import { breadcrumbItemProps } from './breadcrumb-item'

import type { Router } from 'vue-router'

defineOptions({
  name: 'HcBreadcrumbItem',
})

const props = defineProps(breadcrumbItemProps)

const instance = getCurrentInstance()!
const breadcrumbContext = inject(breadcrumbKey, undefined)
const ns = useNamespace('breadcrumb')

const router = instance.appContext.config.globalProperties.$router as Router

const link = ref<HTMLSpanElement>()

const onClick = () => {
  if (!props.to || !router) return
  props.replace ? router.replace(props.to) : router.push(props.to)
}
</script>
