import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { flatten } from 'lodash-unified'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Options from '../src/options'

import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>
  const onOptionsChange = vi.fn()

  const HcOptionStub = defineComponent({
    name: 'HcOption',
    props: {
      label: String,
    },
    template: '<div></div>',
  })

  const getLabel = (i: number | string) => `label-${i}`

  const HcOptionGroupStub = defineComponent({
    name: 'HcOptionGroup',
    template: '<div><slot /></div>',
  })

  const samples = Array.from({ length: 3 })

  const createWrapper = (slots = {}) => {
    wrapper = mount(
      (_, { slots }) => (
        <Options onUpdate-options={onOptionsChange}>
          {slots?.default?.()}
        </Options>
      ),
      {
        global: {
          components: {
            HcOption: HcOptionStub,
            HcOptionGroup: HcOptionGroupStub,
          },
        },
        slots,
      }
    ) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
    onOptionsChange.mockClear()
  })

  it('renders emit correct options', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => <HcOptionStub label={getLabel(i)} />),
    })

    await nextTick()

    expect(onOptionsChange).toHaveBeenCalledWith(
      ...[...[samples.map((_, i) => getLabel(i))]]
    )
  })

  it('renders emit correct options with option group', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => (
          <HcOptionGroupStub label={getLabel(i)}>
            {{
              default: () =>
                samples.map((_, j) => (
                  <HcOptionStub
                    label={getLabel(`${i}-${j}`)}
                    value={j}
                  ></HcOptionStub>
                )),
            }}
          </HcOptionGroupStub>
        )),
    })

    expect(onOptionsChange).toHaveBeenCalledWith(
      flatten(
        samples.map((_, i) => samples.map((_, j) => getLabel(`${i}-${j}`)))
      )
    )
  })
})
