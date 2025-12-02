import { render, screen } from '@testing-library/react'
import WorkPage from '@/pages/work'

describe('WorkPage', () => {
  it('should have semantic structure', () => {
    render(<WorkPage />)

    expect(screen.getByRole('main')).toBeDefined()
  })

  it('should render all project cards', () => {
    render(<WorkPage />)

    expect(screen.getByRole('heading', { level: 3, name: /ポートフォリオサイト/i })).toBeDefined()
    expect(screen.getByRole('heading', { level: 3, name: /お片付けIoTデバイス/i })).toBeDefined()
    expect(screen.getByRole('heading', { level: 3, name: /社内図書管理システム/i })).toBeDefined()
  })

  it('should render GitHub links for projects that have them', () => {
    render(<WorkPage />)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('should render Demo link for portfolio project', () => {
    render(<WorkPage />)

    const demoLink = screen.getByRole('link', { name: /demo/i })
    expect(demoLink).toBeDefined()
    expect(demoLink.getAttribute('href')).toBe('https://portfolio-example.com')
  })
})
