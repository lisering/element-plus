<template>
  <hc-tooltip content="Top center" placement="top">
    <hc-button>Dark</hc-button>
  </hc-tooltip>
  <hc-tooltip content="Bottom center" placement="bottom" effect="light">
    <hc-button>Light</hc-button>
  </hc-tooltip>

  <hc-tooltip content="Bottom center" effect="customized">
    <hc-button>Customized theme</hc-button>
  </hc-tooltip>
</template>

<style>
.hc-popper.is-customized {
  /* Set padding to ensure the height is 32px */
  padding: 6px 12px;
  background: linear-gradient(90deg, rgb(159, 229, 151), rgb(204, 229, 129));
}

.hc-popper.is-customized .hc-popper__arrow::before {
  background: linear-gradient(45deg, #b2e68d, #bce689);
  right: 0;
}
</style>
