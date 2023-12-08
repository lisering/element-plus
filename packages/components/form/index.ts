import { withInstall, withNoopInstall } from '@hicor-ui/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

export const HcForm = withInstall(Form, {
  FormItem,
})
export default HcForm
export const HcFormItem = withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
