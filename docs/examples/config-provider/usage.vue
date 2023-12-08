<template>
  <div>
    <hc-button mb-2 @click="toggle">Switch Language</hc-button>
    <br />

    <hc-config-provider :locale="locale">
      <hc-table mb-1 :data="[]" />
      <hc-pagination :total="100" />
    </hc-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import zhCn from 'hicor-ui/dist/locale/zh-cn.mjs'
import en from 'hicor-ui/dist/locale/en.mjs'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const toggle = () => {
  language.value = language.value === 'zh-cn' ? 'en' : 'zh-cn'
}
</script>
