import { render, screen, within } from '@testing-library/react'
import SkillPage from '@/pages/skill'

describe('SkillPage', () => {
  it('should render page title', () => {
    render(<SkillPage />)

    const heading = screen.getByRole('heading', { level: 1, name: /skills/i })
    expect(heading).toBeInTheDocument()
  })

  it('should render page description', () => {
    render(<SkillPage />)

    expect(screen.getByText(/技術スキルと開発経験のある言語・ツールを紹介します/i)).toBeInTheDocument()
  })

  it('should have semantic structure', () => {
    render(<SkillPage />)

    expect(screen.getByRole('main')).toBeInTheDocument()
    expect(screen.getByRole('navigation')).toBeInTheDocument()
  })

  describe('Programming Languages Section', () => {
    it('should render programming languages heading and icon', () => {
      render(<SkillPage />)

      const languagesHeading = screen.getByRole('heading', { level: 2, name: /プログラミング言語/i })
      expect(languagesHeading).toBeInTheDocument()

      const section = languagesHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render programming languages section', () => {
      render(<SkillPage />)

      const languagesHeading = screen.getByRole('heading', { level: 2, name: /プログラミング言語/i })
      const languagesSection = languagesHeading.closest('section')

      expect(languagesSection).toBeInTheDocument()
    })
  })

  describe('Frameworks and Libraries Section', () => {
    it('should render frameworks heading and icon', () => {
      render(<SkillPage />)

      const frameworksHeading = screen.getByRole('heading', {
        level: 2,
        name: /フレームワーク・ライブラリ/i,
      })
      expect(frameworksHeading).toBeInTheDocument()

      const section = frameworksHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render frameworks section', () => {
      render(<SkillPage />)

      const frameworksHeading = screen.getByRole('heading', {
        level: 2,
        name: /フレームワーク・ライブラリ/i,
      })
      const frameworksSection = frameworksHeading.closest('section')

      expect(frameworksSection).toBeInTheDocument()
    })
  })

  describe('Tools and Technologies Section', () => {
    it('should render tools heading and icon', () => {
      render(<SkillPage />)

      const toolsHeading = screen.getByRole('heading', { level: 2, name: /ツール・技術/i })
      expect(toolsHeading).toBeInTheDocument()

      const section = toolsHeading.closest('section')
      const icons = section?.querySelectorAll('svg')
      expect(icons!.length).toBeGreaterThan(0)
    })

    it('should render tools section', () => {
      render(<SkillPage />)

      const toolsHeading = screen.getByRole('heading', { level: 2, name: /ツール・技術/i })
      const toolsSection = toolsHeading.closest('section')

      expect(toolsSection).toBeInTheDocument()
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
      render(<SkillPage />)

      const expectedH2Headings = [
        /プログラミング言語/i,
        /フレームワーク・ライブラリ/i,
        /ツール・技術/i,
      ]

      expectedH2Headings.forEach((headingPattern) => {
        const heading = screen.getByRole('heading', { level: 2, name: headingPattern })
        expect(heading).toBeInTheDocument()
      })
    })

    it('should render icons for all sections', () => {
      const { container } = render(<SkillPage />)

      const allSvgIcons = container.querySelectorAll('svg')
      expect(allSvgIcons.length).toBeGreaterThanOrEqual(3)
    })
  })
})
