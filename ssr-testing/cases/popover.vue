<template>
  <hc-popover ref="popover" placement="right" title="Title" :width="200" trigger="focus"
    content="this is content, this is content, this is content">
    <template #reference>
      <hc-button>Focus to activate</hc-button>
    </template>
  </hc-popover>
</template>
