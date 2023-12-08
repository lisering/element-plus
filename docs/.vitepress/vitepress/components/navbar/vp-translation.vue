<script setup lang="ts">
import { useRouter } from 'vitepress'
import { useTranslation } from '../../composables/translation'

const router = useRouter()
const { switchLang, languageMap, langs, lang, locale } = useTranslation()

const toTranslation = () => {
  router.go(`/${lang.value}/guide/translation`)
}
</script>

<template>
  <div class="translation-container">
    <ClientOnly>
      <HcDropdown popper-class="translation-popup" role="navigation">
        <HcIcon :size="24" :aria-label="locale.language">
          <i-ri-translate-2 />
        </HcIcon>
        <template #dropdown>
          <HcDropdownMenu>
            <HcDropdownItem
              v-for="l in langs"
              :key="l"
              :class="{ language: true, selected: l === lang }"
              @click="switchLang(l)"
            >
              {{ languageMap[l] }}
            </HcDropdownItem>
            <HcDropdownItem class="language selected" @click="toTranslation">
              {{ locale.help }}
            </HcDropdownItem>
          </HcDropdownMenu>
        </template>
      </HcDropdown>
    </ClientOnly>
  </div>
</template>

<style lang="scss" scoped>
@use '../../styles/mixins' as *;

.translation-container {
  display: none;
  height: 24px;
  padding: 0 12px;

  @include respond-to('md') {
    display: block;
  }
}
</style>

<style lang="scss">
.hc-dropdown__popper.translation-popup {
  --hc-bg-color-overlay: var(--bg-color);
  --hc-popper-border-radius: 8px;
  --hc-border-color-light: transparent;

  padding: 7px 0;
  min-width: 192px;
  transition: background-color 0.5s;

  .hc-popper__arrow {
    display: none;
  }

  .language {
    padding: 0 16px;
    line-height: 28px;

    &.selected {
      --hc-text-color-regular: var(--brand-color);
    }
  }
}
</style>
