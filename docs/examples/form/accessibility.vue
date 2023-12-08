<template>
  <hc-form label-position="left" label-width="150px" style="max-width: 460px">
    <hc-space fill>
      <hc-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </hc-alert>
      <hc-form-item label="Full Name">
        <hc-input v-model="formAccessibility.fullName" />
      </hc-form-item>
    </hc-space>
    <hc-space fill>
      <hc-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </hc-alert>
      <hc-form-item label="Your Information">
        <hc-row :gutter="20">
          <hc-col :span="12">
            <hc-input
              v-model="formAccessibility.firstName"
              label="First Name"
              placeholder="First Name"
            />
          </hc-col>
          <hc-col :span="12">
            <hc-input
              v-model="formAccessibility.lastName"
              label="Last Name"
              placeholder="Last Name"
            />
          </hc-col>
        </hc-row>
      </hc-form-item>
    </hc-space>
  </hc-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
