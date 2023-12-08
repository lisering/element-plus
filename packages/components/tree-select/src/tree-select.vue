<script lang="ts">
// @ts-nocheck
import { computed, defineComponent, h, onMounted, reactive, ref } from 'vue'
import { pick } from 'lodash-unified'
import HcSelect from '@hicor-ui/components/select'
import HcTree from '@hicor-ui/components/tree'
import { useSelect } from './select'
import { useTree } from './tree'
import CacheOptions from './cache-options'

export default defineComponent({
  name: 'HcTreeSelect',
  // disable `HcSelect` inherit current attrs
  inheritAttrs: false,
  props: {
    ...HcSelect.props,
    ...HcTree.props,
    /**
     * @description The cached data of the lazy node, the structure is the same as the data, used to get the label of the unloaded data
     */
    cacheData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const { slots, expose } = context

    const select = ref<InstanceType<typeof HcSelect>>()
    const tree = ref<InstanceType<typeof HcTree>>()

    const key = computed(() => props.nodeKey || props.valueKey || 'value')

    const selectProps = useSelect(props, context, { select, tree, key })
    const { cacheOptions, ...treeProps } = useTree(props, context, {
      select,
      tree,
      key,
    })

    // expose HcTree/HcSelect methods
    const methods = reactive({})
    expose(methods)
    onMounted(() => {
      Object.assign(methods, {
        ...pick(tree.value, [
          'filter',
          'updateKeyChildren',
          'getCheckedNodes',
          'setCheckedNodes',
          'getCheckedKeys',
          'setCheckedKeys',
          'setChecked',
          'getHalfCheckedNodes',
          'getHalfCheckedKeys',
          'getCurrentKey',
          'getCurrentNode',
          'setCurrentKey',
          'setCurrentNode',
          'getNode',
          'remove',
          'append',
          'insertBefore',
          'insertAfter',
        ]),
        ...pick(select.value, ['focus', 'blur']),
      })
    })

    return () =>
      h(
        HcSelect,
        /**
         * 1. The `props` is processed into `Refs`, but `v-bind` and
         * render function props cannot read `Refs`, so use `reactive`
         * unwrap the `Refs` and keep reactive.
         * 2. The keyword `ref` requires `Ref`, but `reactive` broke it,
         * so use function.
         */
        reactive({
          ...selectProps,
          ref: (ref) => (select.value = ref),
        }),
        {
          ...slots,
          default: () => [
            h(CacheOptions, { data: cacheOptions.value }),
            h(
              HcTree,
              reactive({
                ...treeProps,
                ref: (ref) => (tree.value = ref),
              })
            ),
          ],
        }
      )
  },
})
</script>
