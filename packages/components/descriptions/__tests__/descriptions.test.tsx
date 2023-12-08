import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import HcTag from '@hicor-ui/components/tag'
import HcDescriptions from '../src/description.vue'
import HcDescriptionsItem from '../src/description-item'

describe('Descriptions.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => (
      <HcDescriptions title="title" extra="extra">
        {Array.from({ length: 4 }).map((_, index) => (
          <HcDescriptionsItem label={String(index)} />
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.find('.hc-descriptions__title').text()).toEqual('title')
    expect(wrapper.find('.hc-descriptions__extra').text()).toEqual('extra')
    expect(wrapper.findAll('.hc-descriptions__label').length).toEqual(4)
    expect(wrapper.findAll('.hc-descriptions__content').length).toEqual(4)
  })

  test('render empty label', () => {
    const wrapper = mount(() => (
      <HcDescriptions>
        {Array.from({ length: 3 }).map(() => (
          <HcDescriptionsItem />
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.findAll('.hc-descriptions__label').length).toEqual(0)
    expect(wrapper.findAll('.hc-descriptions__content').length).toEqual(3)
  })

  test('should render border props', () => {
    const wrapper = mount(() => (
      <HcDescriptions border>
        <HcDescriptionsItem />
      </HcDescriptions>
    ))

    expect(wrapper.find('table').classes()).toContain('is-bordered')
  })

  test('should render align props', () => {
    const wrapper = mount(() => (
      <HcDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <HcDescriptionsItem align="right" labelAlign="center" />
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.find('.hc-descriptions__label').classes()).toContain(
      'is-center'
    )
    expect(wrapper.find('.hc-descriptions__content').classes()).toContain(
      'is-right'
    )
  })

  test('should render width props', () => {
    const wrapper = mount(() => (
      <HcDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <HcDescriptionsItem width="50px" min-width="60px" />
        ))}
      </HcDescriptions>
    ))

    expect(
      wrapper.find('.hc-descriptions__label').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
    expect(
      wrapper.find('.hc-descriptions__content').attributes('style')
    ).toContain('width: 50px; min-width: 60px;')
  })

  test('should render class props', () => {
    const wrapper = mount(() => (
      <HcDescriptions border>
        {Array.from({ length: 3 }).map(() => (
          <HcDescriptionsItem
            class-name="class-name"
            label-class-name="label-class-name"
          />
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.find('.hc-descriptions__label').classes()).toContain(
      'label-class-name'
    )
    expect(wrapper.find('.hc-descriptions__content').classes()).toContain(
      'class-name'
    )
  })

  test('should render column props', async () => {
    const border = ref(false)

    const wrapper = mount(() => (
      <HcDescriptions column={5} border={border.value}>
        {Array.from({ length: 10 }).map(() => (
          <HcDescriptionsItem />
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(5)

    border.value = true

    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(10)
  })

  test('should render direction props', async () => {
    const direction = ref<'horizontal' | 'vertical'>('horizontal')

    const wrapper = mount(() => (
      <HcDescriptions column={5} direction={direction.value} border>
        {Array.from({ length: 10 }).map((item) => (
          <HcDescriptionsItem label={String(item)}>
            {String(item)}
          </HcDescriptionsItem>
        ))}
      </HcDescriptions>
    ))

    expect(wrapper.find('tr').element.children.length).toEqual(10)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[0].element.children[1].innerHTML
    )

    direction.value = 'vertical'
    await nextTick()

    expect(wrapper.find('tr').element.children.length).toEqual(5)
    expect(wrapper.findAll('tr')[0].element.children[0].innerHTML).toEqual(
      wrapper.findAll('tr')[1].element.children[0].innerHTML
    )
  })

  test('should render title slots', async () => {
    const wrapper = mount(() => (
      <HcDescriptions
        v-slots={{
          title: () => 'title',
          default: () =>
            Array.from({ length: 10 }).map(() => <HcDescriptionsItem />),
        }}
      ></HcDescriptions>
    ))

    expect(wrapper.find('.hc-descriptions__title').text()).toEqual('title')
  })

  test('should render span props', async () => {
    const wrapper = mount(() => (
      <HcDescriptions>
        <HcDescriptionsItem label="1">1</HcDescriptionsItem>
        <HcDescriptionsItem label="2" span={2}>
          2
        </HcDescriptionsItem>
        <HcDescriptionsItem label="3">3</HcDescriptionsItem>
        <HcDescriptionsItem label="4">4</HcDescriptionsItem>
      </HcDescriptions>
    ))

    expect(wrapper.findAll('td')[1].element.getAttribute('colSpan')).toEqual(
      '2'
    )
    expect(wrapper.findAll('td')[3].element.getAttribute('colSpan')).toEqual(
      '2'
    )
  })

  test('re-rendered when slots is updated', async () => {
    const CHANGE_VALUE = 'company'
    const remarks = ref(['school', 'hospital'])

    const onClick = () => {
      remarks.value[0] = CHANGE_VALUE
    }

    const wrapper = mount(() => (
      <>
        {remarks.value.map((remark, index) => (
          <HcDescriptions key={index} title={remark}>
            <HcDescriptionsItem label={remark}>
              <HcTag size="small">{remark}</HcTag>
            </HcDescriptionsItem>
          </HcDescriptions>
        ))}
        <button onClick={onClick}>click</button>
      </>
    ))

    wrapper.find('button').trigger('click')
    await nextTick()
    expect(wrapper.findComponent(HcTag).text()).toBe(CHANGE_VALUE)
  })
})
