<template>
  <hc-focus-group-collection>
    <hc-roving-focus-group-impl v-bind="$attrs">
      <slot />
    </hc-roving-focus-group-impl>
  </hc-focus-group-collection>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HcRovingFocusGroupImpl from './roving-focus-group-impl.vue'
import { HcCollection as HcFocusGroupCollection } from './roving-focus-group'

export default defineComponent({
  name: 'HcRovingFocusGroup',
  components: {
    HcFocusGroupCollection,
    HcRovingFocusGroupImpl,
  },
})
</script>
