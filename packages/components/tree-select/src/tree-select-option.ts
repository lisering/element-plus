import { defineComponent, getCurrentInstance, nextTick } from 'vue'
import { HcOption } from '@hicor-ui/components/select'

const component = defineComponent({
  extends: HcOption,
  setup(props, ctx) {
    const result = (HcOption.setup as NonNullable<any>)(props, ctx)

    // use methods.selectOptionClick
    delete result.selectOptionClick

    const vm = (getCurrentInstance() as NonNullable<any>).proxy

    // Fix: https://github.com/hicor-ui/hicor-ui/issues/7917
    // `hc-option` will delete the cache before unmount,
    // This is normal for flat arrays `<hc-select><hc-option v-for="3"></hc-select>`,
    // Because the same node key does not create a difference node,
    // But in tree data, the same key at different levels will create diff nodes,
    // So the destruction of `hc-option` in `nextTick` will be slower than
    // the creation of new `hc-option`, which will delete the new node,
    // here restore the deleted node.
    // @link https://github.com/hicor-ui/hicor-ui/blob/6df6e49db07b38d6cc3b5e9a960782bd30879c11/packages/components/select/src/option.vue#L78
    nextTick(() => {
      if (!result.select.cachedOptions.get(vm.value)) {
        result.select.onOptionCreate(vm)
      }
    })

    return result
  },
  methods: {
    selectOptionClick() {
      // $el.parentElement => hc-tree-node__content
      this.$el.parentElement.click()
    },
  },
})

export default component
