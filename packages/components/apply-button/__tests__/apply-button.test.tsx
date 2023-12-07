import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import ApplyButton from '../src/apply-button.vue'

const AXIOM = 'Rem is the best girl'

describe('ApplyButton.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <ApplyButton>{AXIOM}</ApplyButton>)

    expect(wrapper.text()).toEqual(AXIOM)
  })
})
