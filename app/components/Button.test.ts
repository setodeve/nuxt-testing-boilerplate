import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from './Button.vue'
import { ref } from 'vue'

describe('Button Component', () => {
  const cnt = ref(0)
  
  it('renders count', () => {
    const wrapper = mount(Button, {
      props: { msg: 'Hello', cnt: cnt },
    })
    const count = wrapper.find('[data-testid="count"]')
    expect(count.text()).toBe('0')
  })

  it('emits click event', async () => {
    const cntUp = (count: number) => count + 1
    const wrapper = mount(Button, {
      props: { msg: 'Hello', cnt: cnt },
      methods: { cntUp: cntUp },
    })
    await wrapper.find('button').trigger('click')
    expect(wrapper.emitted()).toHaveProperty('click')
  })

  it('matches snapshot', () => {
    const wrapper = mount(Button, {
      props: { msg: 'Hello', cnt: cnt },
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})