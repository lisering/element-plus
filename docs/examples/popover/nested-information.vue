<template>
  <div style="display: flex; align-items: center">
    <hc-popover placement="right" :width="400" trigger="click">
      <template #reference>
        <hc-button style="margin-right: 16px">Click to activate</hc-button>
      </template>
      <hc-table :data="gridData">
        <hc-table-column width="150" property="date" label="date" />
        <hc-table-column width="100" property="name" label="name" />
        <hc-table-column width="300" property="address" label="address" />
      </hc-table>
    </hc-popover>

    <hc-popover
      :width="300"
      popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
    >
      <template #reference>
        <hc-avatar src="https://avatars.githubusercontent.com/u/72015883?v=4" />
      </template>
      <template #default>
        <div
          class="demo-rich-conent"
          style="display: flex; gap: 16px; flex-direction: column"
        >
          <hc-avatar
            :size="60"
            src="https://avatars.githubusercontent.com/u/72015883?v=4"
            style="margin-bottom: 8px"
          />
          <div>
            <p
              class="demo-rich-content__name"
              style="margin: 0; font-weight: 500"
            >
              Hicor Ui
            </p>
            <p
              class="demo-rich-content__mention"
              style="margin: 0; font-size: 14px; color: var(--hc-color-info)"
            >
              @hicor-ui
            </p>
          </div>

          <p class="demo-rich-content__desc" style="margin: 0">
            Hicor Ui, a Vue 3 based component library for developers, designers
            and product managers
          </p>
        </div>
      </template>
    </hc-popover>
  </div>
</template>

<script lang="ts" setup>
const gridData = [
  {
    date: '2016-05-02',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-04',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-01',
    name: 'Jack',
    address: 'New York City',
  },
  {
    date: '2016-05-03',
    name: 'Jack',
    address: 'New York City',
  },
]
</script>
