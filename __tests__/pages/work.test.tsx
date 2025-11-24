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

  it('should render coming soon placeholder', () => {
    render(<WorkPage />)

    expect(screen.getByText(/coming soon/i)).toBeInTheDocument()
    expect(screen.getByText(/プロジェクト一覧は準備中です/i)).toBeInTheDocument()
  })

  it('should have semantic structure', () => {
    render(<WorkPage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })
})
