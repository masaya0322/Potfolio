import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'

describe('Navigation', () => {
  it('should render logo link to home', () => {
    render(<Navigation />)

    const logoLink = screen.getByRole('link', { name: /portfolio/i })
    expect(logoLink).toBeDefined()
    expect(logoLink.getAttribute('href')).toBe('/')
  })

  it('should render all navigation links with correct hrefs', () => {
    render(<Navigation />)

    const expectedLinks = [
      { name: /about/i, href: '/about' },
      { name: /work/i, href: '/work' },
      { name: /skill/i, href: '/skill' },
      { name: /contact/i, href: '/contact' },
    ]

    expectedLinks.forEach(({ name, href }) => {
      const link = screen.getByRole('link', { name })
      expect(link).toBeDefined()
      expect(link.getAttribute('href')).toBe(href)
    })
  })
})
