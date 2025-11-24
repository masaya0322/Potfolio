import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/Footer'

describe('Footer', () => {
  it('should render copyright text with current year', () => {
    render(<Footer />)

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Portfolio. All rights reserved.`)).toBeInTheDocument()
  })

  it('should render GitHub link with correct attributes', () => {
    render(<Footer />)

    const link = screen.getByRole('link', { name: /github/i })
    expect(link).toHaveAttribute('href', 'https://github.com/masaya0322')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('should render GitHub icon', () => {
    const { container } = render(<Footer />)

    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })
})
