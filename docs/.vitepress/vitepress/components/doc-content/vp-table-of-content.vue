<script setup lang="ts">
import { ref } from 'vue'
import MarkdownIt from 'markdown-it'
import { useToc } from '../../composables/use-toc'
import { useActiveSidebarLinks } from '../../composables/active-bar'

import { useLang } from '../../composables/lang'
import tag from '../../../plugins/tag'

const localMd = MarkdownIt().use(tag)
const headers = useToc()
const marker = ref()
const container = ref()
useActiveSidebarLinks(container, marker)
const lang = useLang()
</script>

<template>
  <aside ref="container" class="toc-wrapper">
    <nav class="toc-content">
      <h3 class="toc-content__heading">内容</h3>
      <ul class="toc-items">
        <li
          v-for="{ link, text, children } in headers"
          :key="link"
          class="toc-item"
        >
          <a
            class="toc-link"
            :href="link"
            :title="text"
            v-html="localMd.render(text)"
          />
          <ul v-if="children">
            <li
              v-for="{ link: childLink, text: childText } in children"
              :key="childLink"
              class="toc-item"
            >
              <a
                class="toc-link subitem"
                :href="childLink"
                :title="text"
                v-html="localMd.render(childText)"
              />
            </li>
          </ul>
        </li>
      </ul>
      <div ref="marker" class="toc-marker" />
    </nav>
  </aside>
</template>
<style scoped lang="scss">
.sponsors-button:deep {
  button {
    width: 100%;
  }
}
</style>
