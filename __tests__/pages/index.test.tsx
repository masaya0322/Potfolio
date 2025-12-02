import { render, screen } from '@testing-library/react'
import HomePage from '@/pages/index'

describe('HomePage', () => {
  it('should render page title', () => {
    render(<HomePage />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeDefined()
  })

  it('should have semantic structure', () => {
    render(<HomePage />)

    expect(screen.getByRole('main')).toBeDefined()
  })

  it('should render section cards as links', () => {
    render(<HomePage />)

    const allLinks = screen.getAllByRole('link')
    const linkTexts = allLinks.map((link) => link.textContent)

    expect(linkTexts.filter((text) => text?.includes('ABOUT')).length).toBeGreaterThan(0)
    expect(linkTexts.filter((text) => text?.includes('WORK')).length).toBeGreaterThan(0)
    expect(linkTexts.filter((text) => text?.includes('SKILL')).length).toBeGreaterThan(0)
    expect(linkTexts.filter((text) => text?.includes('CONTACT')).length).toBeGreaterThan(0)
  })

  it('should render multiple headings', () => {
    render(<HomePage />)

    const headings = screen.getAllByRole('heading')
    expect(headings.length).toBeGreaterThan(1)
  })
})
