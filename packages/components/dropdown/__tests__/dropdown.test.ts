// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { rAF } from '@hicor-ui/test-utils/tick'
import { EVENT_CODE } from '@hicor-ui/constants'
import { HcTooltip } from '@hicor-ui/components/tooltip'
import Button from '@hicor-ui/components/button'
import { usePopperContainerId } from '@hicor-ui/hooks'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CONTEXTMENU = 'contextmenu'

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Button.name]: Button,
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    template,
    data,
    ...otherObj,
  })

describe('Dropdown', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  test('create', async () => {
    const wrapper = _mount(
      `
        <hc-dropdown ref="b" placement="right">
          <span class="el-dropdown-link" ref="a">
            dropdown<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <hc-dropdown-menu>
              <hc-dropdown-item>Apple</hc-dropdown-item>
              <hc-dropdown-item>Orange</hc-dropdown-item>
              <hc-dropdown-item>Cherry</hc-dropdown-item>
              <hc-dropdown-item disabled>Peach</hc-dropdown-item>
              <hc-dropdown-item divided>Pear</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >

    vi.useFakeTimers()
    const triggerElm = wrapper.find('.hc-tooltip__trigger')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(false)
    vi.useRealTimers()
  })

  test('menu click', async () => {
    const commandHandler = vi.fn()
    const wrapper = _mount(
      `
      <hc-dropdown ref="b" @command="commandHandler" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item command="a">Apple</hc-dropdown-item>
            <hc-dropdown-item command="b">Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c" :command="myCommandObject">Cherry</hc-dropdown-item>
            <hc-dropdown-item command="d">Peach</hc-dropdown-item>
            <hc-dropdown-item command="e">Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          commandHandler,
        },
      }
    )
    await nextTick()
    // const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.hc-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await nextTick()
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .find('.hc-dropdown-menu__item')
      .trigger('click')
    await nextTick()
    expect(commandHandler).toHaveBeenCalled()
  })

  test('trigger', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown trigger="click" ref="b" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item command="a">Apple</hc-dropdown-item>
            <hc-dropdown-item command="b">Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c" :command="myCommandObject">Cherry</hc-dropdown-item>
            <hc-dropdown-item command="d">Peach</hc-dropdown-item>
            <hc-dropdown-item command="e">Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    const triggerElm = wrapper.find('.hc-dropdown-link')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    expect(content.open).toBe(false)
    await triggerElm.trigger('click', {
      button: 0,
    })
    await rAF()
    expect(content.open).toBe(true)
  })

  test('trigger contextmenu', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown trigger="contextmenu" ref="b" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item command="a">Apple</hc-dropdown-item>
            <hc-dropdown-item command="b">Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c" :command="myCommandObject">Cherry</hc-dropdown-item>
            <hc-dropdown-item command="d">Peach</hc-dropdown-item>
            <hc-dropdown-item command="e">Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    const triggerElm = wrapper.find('.hc-dropdown-link')
    expect(content.open).toBe(false)
    await triggerElm.trigger(CONTEXTMENU)
    await rAF()
    expect(content.open).toBe(true)
  })

  test('handleOpen and handleClose', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown trigger="click" ref="refDropdown" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item command="a">Apple</hc-dropdown-item>
            <hc-dropdown-item command="b">Orange</hc-dropdown-item>
            <hc-dropdown-item command="c">Cherry</hc-dropdown-item>
            <hc-dropdown-item command="d">Peach</hc-dropdown-item>
            <hc-dropdown-item command="e">Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({
        name: '',
      })
    )
    await nextTick()
    const dropdown = wrapper.vm
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    expect(content.open).toBe(false)
    await dropdown.$refs.refDropdown.handleOpen()
    await rAF()
    expect(content.open).toBe(true)
    await dropdown.$refs.refDropdown.handleClose()
    await rAF()
    expect(content.open).toBe(false)
  })

  test('split button', async () => {
    const handleClick = vi.fn()
    const wrapper = _mount(
      `
      <hc-dropdown  @click="handleClick" split-button type="primary" ref="b" placement="right">
        dropdown
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item command="a">Apple</hc-dropdown-item>
            <hc-dropdown-item command="b">Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c" :command="myCommandObject">Cherry</hc-dropdown-item>
            <hc-dropdown-item command="d">Peach</hc-dropdown-item>
            <hc-dropdown-item command="e">Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          handleClick,
        },
      }
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    const triggerElm = wrapper.find('.hc-dropdown__caret-button')
    const button = wrapper.find('.hc-button')
    expect(content.open).toBe(false)
    await button.trigger('click')
    expect(handleClick).toHaveBeenCalled()
    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
    expect(content.open).toBe(true)
  })

  test('hide on click', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c">Cherry</hc-dropdown-item>
            <hc-dropdown-item disabled>Peach</hc-dropdown-item>
            <hc-dropdown-item divided>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    expect(content.open).toBe(false)
    const triggerElm = wrapper.find('.hc-tooltip__trigger')
    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .trigger('click')
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
  })

  test('triggerElm keydown', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c">Cherry</hc-dropdown-item>
            <hc-dropdown-item disabled>Peach</hc-dropdown-item>
            <hc-dropdown-item divided>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    const triggerElm = wrapper.find('.hc-tooltip__trigger')

    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    vi.runAllTimers()
    expect(content.open).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.tab,
    })
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
  })

  test('dropdown menu keydown', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu ref="dropdown-menu">
            <hc-dropdown-item ref="d">Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item ref="c">Cherry</hc-dropdown-item>
            <hc-dropdown-item disabled>Peach</hc-dropdown-item>
            <hc-dropdown-item divided>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent({ ref: 'dropdown-menu' })
    const triggerElm = wrapper.find('.hc-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await rAF()
    await content.trigger('keydown', {
      code: EVENT_CODE.down,
    })
    await rAF()
    expect(
      wrapper
        .findComponent({ ref: 'd' })
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.hc-dropdown-menu__item')
        .element.getAttribute('tabindex')
    ).toBe('0')
  })

  test('max height', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown ref="b" max-height="60px">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item>Cherry</hc-dropdown-item>
            <hc-dropdown-item disabled>Peach</hc-dropdown-item>
            <hc-dropdown-item divided>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const scrollbar = wrapper
      .findComponent({
        ref: 'b',
      })
      .findComponent({ ref: 'scrollbar' })
    expect(scrollbar.find('.hc-scrollbar__wrap').attributes('style')).toContain(
      'max-height: 60px;'
    )
  })

  test('tooltip debounce', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown ref="b">
        <span class="el-dropdown-link">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item>Cherry</hc-dropdown-item>
            <hc-dropdown-item>Peach</hc-dropdown-item>
            <hc-dropdown-item>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    const content = wrapper.findComponent(HcTooltip).vm as InstanceType<
      typeof HcTooltip
    >
    const triggerElm = wrapper.find('.hc-tooltip__trigger')
    expect(content.open).toBe(false)

    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
    expect(content.open).toBe(true)
  })

  test('popperClass', async () => {
    const wrapper = await _mount(
      `
      <hc-dropdown ref="b" max-height="60px" popper-class="custom-popper-class">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Apple</hc-dropdown-item>
            <hc-dropdown-item>Orange</hc-dropdown-item>
            <hc-dropdown-item>Cherry</hc-dropdown-item>
            <hc-dropdown-item disabled>Peach</hc-dropdown-item>
            <hc-dropdown-item divided>Pear</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )

    const popperElement = wrapper.findComponent({
      name: 'HcPopperContent',
    }).element

    expect(popperElement.classList.contains('custom-popper-class')).toBe(true)
  })

  test('custom attributes for dropdown items', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown>
        <span class="el-dropdown-link">
          Custom Attributes
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item data-custom-attribute="hello">Item</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.hc-dropdown-menu__item').element.dataset.customAttribute
    ).toBe('hello')
  })

  test('disable normal dropdown', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown disabled>
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item data-custom-attribute="hello">Item</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'HcDropdown',
        })
        .classes()
    ).toContain('is-disabled')
  })
  test('disable dropdown with split button', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown disabled split-button>
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item data-custom-attribute="hello">Item</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findAllComponents({
          name: 'HcButton',
        })[0]
        .classes()
    ).toContain('is-disabled')
    expect(
      wrapper
        .findAllComponents({
          name: 'HcButton',
        })[1]
        .classes()
    ).toContain('is-disabled')
  })

  test('set show-timeout/hide-timeout when trigger is hover', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown trigger="hover" :show-timeout="200" :hide-timeout="300">
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Item</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'HcTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(200)
    expect(tooltipElement.vm.hideAfter).toBe(300)
  })

  test('ignore show-timeout/hide-timeout when trigger is not hover', async () => {
    const wrapper = _mount(
      `
      <hc-dropdown trigger="click" :show-timeout="200" :hide-timeout="300">
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <hc-dropdown-menu>
            <hc-dropdown-item>Item</hc-dropdown-item>
          </hc-dropdown-menu>
        </template>
      </hc-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'HcTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(0)
    expect(tooltipElement.vm.hideAfter).toBe(0)
  })

  describe('accessibility', () => {
    test('Custom span trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown>
          <span class="el-dropdown-link" data-test-ref="trigger">
            Dropdown List
          </span>
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item>Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('[data-test-ref="trigger"]')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('HcButton trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown>
          <hc-button ref="trigger">
            Dropdown List
          </hc-button>
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item>Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.findComponent({ ref: 'trigger' })
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Split button trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown split-button>
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item>Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('.hc-dropdown__caret-button')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Menu items with "menu" role', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown split-button>
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item ref="menu-item">Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.hc-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('menu')
      expect(menuItem.attributes()['role']).toBe('menuitem')
    })

    test('Menu items with "navigation" role', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown split-button role="navigation">
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item ref="menu-item">Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.hc-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('navigation')
      expect(menuItem.attributes()['role']).toBe('link')
    })

    test('Menu items with "group" role', async () => {
      const wrapper = _mount(
        `
        <hc-dropdown split-button role="group">
          <template #dropdown>
            <hc-dropdown-menu ref="menu">
              <hc-dropdown-item ref="menu-item">Item</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.hc-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('group')
      expect(menuItem.attributes()['role']).toBe('button')
    })
  })

  describe('teleported API', () => {
    test('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
        `
        <hc-dropdown ref="b" placement="right">
          <span class="el-dropdown-link" ref="a">
            dropdown<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <hc-dropdown-menu>
              <hc-dropdown-item>Apple</hc-dropdown-item>
              <hc-dropdown-item>Orange</hc-dropdown-item>
              <hc-dropdown-item>Cherry</hc-dropdown-item>
              <hc-dropdown-item disabled>Peach</hc-dropdown-item>
              <hc-dropdown-item divided>Pear</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).not.toBe('')
    })

    test('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
        `
        <hc-dropdown ref="b" placement="right" :teleported="false">
          <span class="el-dropdown-link" ref="a">
            dropdown<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <hc-dropdown-menu>
              <hc-dropdown-item>Apple</hc-dropdown-item>
              <hc-dropdown-item>Orange</hc-dropdown-item>
              <hc-dropdown-item>Cherry</hc-dropdown-item>
              <hc-dropdown-item disabled>Peach</hc-dropdown-item>
              <hc-dropdown-item divided>Pear</hc-dropdown-item>
            </hc-dropdown-menu>
          </template>
        </hc-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).toBe('')
    })
  })
})
