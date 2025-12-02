import { render, screen } from '@testing-library/react'
import SkillPage from '@/pages/skill'

describe('SkillPage', () => {
  it('should have semantic structure', () => {
    render(<SkillPage />)

    expect(screen.getByRole('main')).toBeDefined()
  })

  describe('Programming Languages Section', () => {
    it('should render programming languages heading', () => {
      render(<SkillPage />)

      const languagesHeading = screen.getByRole('heading', { level: 2, name: /プログラミング言語/i })
      expect(languagesHeading).toBeDefined()
    })

    it('should render skill cards with programming languages', () => {
      render(<SkillPage />)

      expect(screen.getByRole('heading', { level: 3, name: /typescript/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /javascript/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /python \/ java/i })).toBeDefined()
    })
  })

  describe('Frameworks and Libraries Section', () => {
    it('should render frameworks heading', () => {
      render(<SkillPage />)

      const frameworksHeading = screen.getByRole('heading', {
        level: 2,
        name: /フレームワーク・ライブラリ/i,
      })
      expect(frameworksHeading).toBeDefined()
    })

    it('should render skill cards with frameworks and libraries', () => {
      render(<SkillPage />)

      expect(screen.getByRole('heading', { level: 3, name: /^react$/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /next\.js/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /tailwind css/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /node\.js/i })).toBeDefined()
    })
  })

  describe('Tools and Technologies Section', () => {
    it('should render tools heading', () => {
      render(<SkillPage />)

      const toolsHeading = screen.getByRole('heading', { level: 2, name: /ツール・技術/i })
      expect(toolsHeading).toBeDefined()
    })

    it('should render skill cards with tools and technologies', () => {
      render(<SkillPage />)

      expect(screen.getByRole('heading', { level: 3, name: /git \/ github/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /vs code/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 3, name: /jest/i })).toBeDefined()
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
      render(<SkillPage />)

      expect(screen.getByRole('heading', { level: 2, name: /プログラミング言語/i })).toBeDefined()
      expect(
        screen.getByRole('heading', { level: 2, name: /フレームワーク・ライブラリ/i })
      ).toBeDefined()
      expect(screen.getByRole('heading', { level: 2, name: /ツール・技術/i })).toBeDefined()
    })
  })
})
