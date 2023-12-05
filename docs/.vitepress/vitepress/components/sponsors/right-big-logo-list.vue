<script setup lang="ts">
import { rightBigLogoSponsors } from '../../../config/sponsors'
import { isDark } from '../../composables/dark'
</script>

<template>
  <div class="m-t-16px">
    <a
      v-for="item in rightBigLogoSponsors"
      :key="item.name"
      :href="item.url"
      :title="`${item.name_cn || item.name} - ${item.slogan_cn || item.slogan}`"
      target="_blank"
    >
      <div
        :class="[
          isDark && '!bg-#262729',
          'flex bg-#F9F9F9 h-64px rd-4px justify-center items-center',
        ]"
      >
        <div class="h-36px">
          <img class="rd-4px h-full" :src="item.imgL" :alt="item.name" />
        </div>
      </div>
    </a>
  </div>
</template>
