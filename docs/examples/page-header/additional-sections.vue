<template>
  <hc-page-header :icon="null">
    <template #content>
      <div class="flex items-center">
        <hc-avatar
          :size="32"
          class="mr-3"
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <span class="text-large font-600 mr-3"> Title </span>
        <span class="text-sm mr-2" style="color: var(--hc-text-color-regular)">
          Sub title
        </span>
        <hc-tag>Default</hc-tag>
      </div>
    </template>
    <template #extra>
      <div class="flex items-center">
        <hc-button>Print</hc-button>
        <hc-button type="primary" class="ml-2">Edit</hc-button>
      </div>
    </template>
  </hc-page-header>
</template>
