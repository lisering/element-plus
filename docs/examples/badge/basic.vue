<template>
  <hc-badge :value="12" class="item">
    <hc-button>comments</hc-button>
  </hc-badge>
  <hc-badge :value="3" class="item">
    <hc-button>replies</hc-button>
  </hc-badge>
  <hc-badge :value="1" class="item" type="primary">
    <hc-button>comments</hc-button>
  </hc-badge>
  <hc-badge :value="2" class="item" type="warning">
    <hc-button>replies</hc-button>
  </hc-badge>

  <hc-dropdown trigger="click">
    <span class="hc-dropdown-link">
      Click Me
      <hc-icon class="hc-icon--right"><caret-bottom /></hc-icon>
    </span>
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item class="clearfix">
          comments
          <hc-badge class="mark" :value="12" />
        </hc-dropdown-item>
        <hc-dropdown-item class="clearfix">
          replies
          <hc-badge class="mark" :value="3" />
        </hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>
</template>

<script lang="ts" setup>
import { CaretBottom } from '@element-plus/icons-vue'
</script>

<style scoped>
.item {
  margin-top: 10px;
  margin-right: 40px;
}

.hc-dropdown {
  margin-top: 1.1rem;
}
</style>
