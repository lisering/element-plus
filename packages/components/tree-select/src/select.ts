// @ts-nocheck
import { computed, nextTick, toRefs } from 'vue'
import { pick } from 'lodash-unified'
import HcSelect from '@hicor-ui/components/select'
import { useNamespace } from '@hicor-ui/hooks'
import { UPDATE_MODEL_EVENT } from '@hicor-ui/constants'
import type { Ref } from 'vue'
import type HcTree from '@hicor-ui/components/tree'

export const useSelect = (
  props,
  { attrs, emit },
  {
    tree,
    key,
  }: {
    select: Ref<InstanceType<typeof HcSelect> | undefined>
    tree: Ref<InstanceType<typeof HcTree> | undefined>
    key: Ref<string>
  }
) => {
  const ns = useNamespace('tree-select')

  const result = {
    ...pick(toRefs(props), Object.keys(HcSelect.props)),
    ...attrs,
    // attrs is not reactive, when v-model binding source changes,
    // this listener is still old, see the bug(or test 'v-model source change'):
    // https://github.com/hicor-ui/hicor-ui/issues/14204
    'onUpdate:modelValue': (value) => emit(UPDATE_MODEL_EVENT, value),
    valueKey: key,
    popperClass: computed(() => {
      const classes = [ns.e('popper')]
      if (props.popperClass) classes.push(props.popperClass)
      return classes.join(' ')
    }),
    filterMethod: (keyword = '') => {
      if (props.filterMethod) props.filterMethod(keyword)

      nextTick(() => {
        // let tree node expand only, same with tree filter
        tree.value?.filter(keyword)
      })
    },
    // clear filter text when visible change
    onVisibleChange: (visible: boolean) => {
      attrs.onVisibleChange?.(visible)

      if (props.filterable && visible) {
        result.filterMethod()
      }
    },
  }

  return result
}
