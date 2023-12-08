<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <hc-button>top-start</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <hc-button>top</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <hc-button>top-end</hc-button>
      </hc-tooltip>
    </div>
    <div class="row">
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <hc-button>left-start</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <hc-button>right-start</hc-button>
      </hc-tooltip>
    </div>
    <div class="row">
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <hc-button class="mt-3 mb-3">left</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <hc-button>right</hc-button>
      </hc-tooltip>
    </div>
    <div class="row">
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <hc-button>left-end</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <hc-button>right-end</hc-button>
      </hc-tooltip>
    </div>
    <div class="row center">
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <hc-button>bottom-start</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <hc-button>bottom</hc-button>
      </hc-tooltip>
      <hc-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <hc-button>bottom-end</hc-button>
      </hc-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}

.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.tooltip-base-box .center {
  justify-content: center;
}

.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
