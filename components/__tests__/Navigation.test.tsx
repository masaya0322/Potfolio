import { render, screen } from '@testing-library/react'
import { Navigation } from '@/components/Navigation'

describe('Navigation', () => {
  it('should render logo link', () => {
    render(<Navigation />)

    const logoLink = screen.getByRole('link', { name: /portfolio/i })
    expect(logoLink).toHaveAttribute('href', '/')
  })

  it('should render all navigation links', () => {
    render(<Navigation />)

    expect(screen.getByRole('link', { name: /about/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /work/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /skill/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /contact/i })).toBeInTheDocument()
  })

  it('should render navigation links with correct hrefs', () => {
    render(<Navigation />)

    const aboutLink = screen.getByRole('link', { name: /about/i })
    const workLink = screen.getByRole('link', { name: /work/i })
    const skillLink = screen.getByRole('link', { name: /skill/i })
    const contactLink = screen.getByRole('link', { name: /contact/i })

    expect(aboutLink).toHaveAttribute('href', '/about')
    expect(workLink).toHaveAttribute('href', '/work')
    expect(skillLink).toHaveAttribute('href', '/skill')
    expect(contactLink).toHaveAttribute('href', '/contact')
  })
})
