import { render, screen } from '@testing-library/react'
import WorkPage from '@/pages/work'

describe('WorkPage', () => {
  it('should render page title', () => {
    render(<WorkPage />)

    const heading = screen.getByRole('heading', { level: 1, name: /work/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render page description', () => {
    render(<WorkPage />)

    expect(screen.getByText(/これまでの制作物やプロジェクトを紹介します/i)).toBeInTheDocument()
  })

  it('should render all project cards', () => {
    render(<WorkPage />)

    // プロジェクトのタイトルを確認
    expect(screen.getByRole('heading', { level: 3, name: /ポートフォリオサイト/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /タスク管理アプリ/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /社内管理システム/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: /天気予報アプリ/i })).toBeInTheDocument()
  })

  it('should render project categories', () => {
    render(<WorkPage />)

    const categories = screen.getAllByText(/自主制作|インターンシップ/)
    expect(categories.length).toBeGreaterThan(0)
  })

  it('should render project periods', () => {
    render(<WorkPage />)

    expect(screen.getByText('2024年11月')).toBeInTheDocument()
    expect(screen.getByText('2024年9月')).toBeInTheDocument()
  })

  it('should render GitHub links', () => {
    render(<WorkPage />)

    const githubLinks = screen.getAllByRole('link', { name: /github/i })
    expect(githubLinks.length).toBeGreaterThan(0)
  })

  it('should render Demo links', () => {
    render(<WorkPage />)

    const demoLinks = screen.getAllByRole('link', { name: /demo/i })
    expect(demoLinks.length).toBeGreaterThan(0)
  })

  it('should have semantic structure', () => {
    render(<WorkPage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  it('should render technology tags', () => {
    render(<WorkPage />)

    expect(screen.getAllByText('Next.js').length).toBeGreaterThan(0)
    expect(screen.getAllByText('TypeScript').length).toBeGreaterThan(0)
    expect(screen.getAllByText('React').length).toBeGreaterThan(0)
  })
})
