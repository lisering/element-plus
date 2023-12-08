<script lang="ts" setup>
import { computed } from 'vue'
import { isClient } from '@vueuse/core'
import { useLang } from '../../composables/lang'
import resourceLocale from '../../../i18n/pages/resource.json'

import AxureComponentsSvg from './resources/axure-components-svg.vue'
import SketchTemplateSvg from './resources/sketch-template-svg.vue'
import FigmaTemplateSvg from './resources/figma-template-svg.vue'
import FigmaVariablesSvg from './resources/figma-variables-svg.vue'
import FigmaUiKitSvg from './resources/figma-ui-kit-svg.vue'

const mirrorUrl = 'hicor-ui.gitee.io'
const isMirrorUrl = () => {
  if (!isClient) return
  return window.location.hostname === mirrorUrl
}
const resourceUrl = {
  github: {
    sketch: 'http://192.168.20.29:8008/design/',
    axure:
      'https://github.com/ElementUI/Resources/raw/master/Element_Components_v2.1.0.rplib',
  },
  gitee: {
    sketch: 'http://192.168.20.29:8008/design/',
    axure:
      'https://gitee.com/hicor-ui/resources/raw/master/Element_Components_v2.1.0.rplib',
  },
}[isMirrorUrl() ? 'gitee' : 'github']

const lang = useLang()
const resourceLang = computed(() => resourceLocale[lang.value])

const resourceCards = computed(() => [
  // {
  //   key: 'axure',
  //   title: resourceLang.value.axure,
  //   description: 'Axure RP 9.0',
  //   icon: AxureComponentsSvg,
  //   intro: resourceLang.value.axureIntro,
  //   url: resourceUrl.axure,
  // },
  {
    key: 'sketch',
    title: resourceLang.value.sketch,
    description: 'Sketch 70.6',
    icon: SketchTemplateSvg,
    intro: resourceLang.value.sketchIntro,
    url: resourceUrl.sketch,
  },
  // {
  //   key: 'figma',
  //   title: resourceLang.value.figma,
  //   icon: FigmaTemplateSvg,
  //   intro: resourceLang.value.figmaIntro,
  //   url: 'https://www.figma.com/community/file/1021254029764378306',
  // },
  // {
  //   key: 'figma-variables',
  //   title: resourceLang.value.figmaVariables,
  //   icon: FigmaVariablesSvg,
  //   intro: resourceLang.value.figmaVariablesIntro,
  //   url: 'https://www.figma.com/community/file/1256091634199852065',
  // },
  // {
  //   key: '2023-figma-ui-kit',
  //   title: resourceLang.value.figma2023,
  //   description: '2023 Figma UI Kit',
  //   icon: FigmaUiKitSvg,
  //   intro: resourceLang.value.figma2023Intro,
  //   url: 'https://www.figma.com/community/file/1305760370797950824/hicor-ui-design-system-ui-kit',
  // },
])
</script>

<template>
  <div class="page-resource">
    <h1>{{ resourceLang.title }}</h1>
    <p>{{ resourceLang.lineOne }}</p>
    <p v-html="resourceLang.lineTwo" />
    <div class="flex flex-wrap justify-center mt-32px" m="-2">
      <div
        v-for="card in resourceCards"
        :key="card.title"
        class="inline-flex w-full md:w-1/2 lg:w-1/3 3xl:w-1/4"
        p="2"
      >
        <hc-card class="card" shadow="hover">
          <div class="w-30 m-auto">
            <component :is="card.icon" alt="icon" />
          </div>
          <h3>{{ card.title }}</h3>
          <p>
            {{ card.intro }}
          </p>
          <a target="_blank" :href="card.url">
            <hc-button type="primary">{{ resourceLang.download }}</hc-button>
          </a>
        </hc-card>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-resource {
  box-sizing: border-box;
  padding: 0 40px;

  h1 {
    color: var(--text-color);
    margin-bottom: 24px;
  }

  p {
    color: var(--text-color-light);
    line-height: 24px;
    margin: 0;

    &:last-of-type {
      margin-top: 8px;
    }
  }
}

.card {
  width: 100%;
  text-align: center;
  padding: 32px 0;

  img {
    margin: auto;
    margin-bottom: 16px;
    height: 87px;
  }

  h3 {
    margin: 10px;
    font-size: 18px;
    font-weight: normal;
  }

  p {
    font-size: 14px;
    color: #99a9bf;
    padding: 0 30px;
    margin: 0;
    word-break: break-word;
    line-height: 1.8;
    min-height: 75px;
    margin-bottom: 16px;
  }
}
</style>
