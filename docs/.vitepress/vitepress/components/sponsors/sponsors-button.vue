<template>
  <div class="join">
    <hc-tooltip placement="top" :hide-after="1000" :offset="20">
      <template #content>
        {{ homeLang['21'] }}
        <a href="mailto:hicor-ui@cenboomh.com" target="_blank">
          &nbsp;hicor-ui@cenboomh.com
        </a>
      </template>
      <a href="mailto:hicor-ui@cenboomh.com" target="_blank">
        <hc-button style="overflow: hidden" :round="round">{{
          homeLang['20']
        }}</hc-button>
      </a>
    </hc-tooltip>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import { useLang } from '../../composables/lang'
import homeLocale from '../../../i18n/pages/home.json'
const lang = useLang()
const homeLang = computed(() => homeLocale[lang.value])

defineProps<{ round?: boolean }>()
</script>
