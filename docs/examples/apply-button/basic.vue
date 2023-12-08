<script lang="ts" setup>
import { HcApplyButton } from 'hicor-ui'

const buttonClick = (type: string, flag: boolean) => {
  console.log('type', type)
  console.log('flag', flag)
}
</script>

<template>
  <div>
    <HcApplyButton text="实打实大多数方法" @button-click="buttonClick" />
  </div>
</template>
