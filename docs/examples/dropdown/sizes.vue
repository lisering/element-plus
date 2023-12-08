<template>
  <hc-dropdown size="large" split-button type="primary">
    Large
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item>Action 1</hc-dropdown-item>
        <hc-dropdown-item>Action 2</hc-dropdown-item>
        <hc-dropdown-item>Action 3</hc-dropdown-item>
        <hc-dropdown-item>Action 4</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>

  <hc-dropdown split-button type="primary">
    Default
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item>Action 1</hc-dropdown-item>
        <hc-dropdown-item>Action 2</hc-dropdown-item>
        <hc-dropdown-item>Action 3</hc-dropdown-item>
        <hc-dropdown-item>Action 4</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>

  <hc-dropdown size="small" split-button type="primary">
    Small
    <template #dropdown>
      <hc-dropdown-menu>
        <hc-dropdown-item>Action 1</hc-dropdown-item>
        <hc-dropdown-item>Action 2</hc-dropdown-item>
        <hc-dropdown-item>Action 3</hc-dropdown-item>
        <hc-dropdown-item>Action 4</hc-dropdown-item>
      </hc-dropdown-menu>
    </template>
  </hc-dropdown>
</template>
<style scoped>
.example-showcase .hc-dropdown + .hc-dropdown {
  margin-left: 15px;
}
</style>
