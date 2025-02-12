import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Header from './Header.vue'

describe('Header Component', () => {
  it('renders navigation links when navLinks prop is provided', () => {
    const navLinks = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' }
    ]
    const wrapper = mount(Header, {
      props: { navLinks }
    })
    const links = wrapper.findAll('routerlink')
    expect(links.length).toBe(2)
  })
})