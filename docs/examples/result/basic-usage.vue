<template>
  <hc-row>
    <hc-col :sm="12" :lg="6">
      <hc-result
        icon="success"
        title="Success Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <hc-button type="primary">Back</hc-button>
        </template>
      </hc-result>
    </hc-col>
    <hc-col :sm="12" :lg="6">
      <hc-result
        icon="warning"
        title="Warning Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <hc-button type="primary">Back</hc-button>
        </template>
      </hc-result>
    </hc-col>
    <hc-col :sm="12" :lg="6">
      <hc-result
        icon="error"
        title="Error Tip"
        sub-title="Please follow the instructions"
      >
        <template #extra>
          <hc-button type="primary">Back</hc-button>
        </template>
      </hc-result>
    </hc-col>
    <hc-col :sm="12" :lg="6">
      <hc-result icon="info" title="Info Tip">
        <template #sub-title>
          <p>Using slot as subtitle</p>
        </template>
        <template #extra>
          <hc-button type="primary">Back</hc-button>
        </template>
      </hc-result>
    </hc-col>
  </hc-row>
</template>
