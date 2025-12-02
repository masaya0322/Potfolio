import { render, screen } from '@testing-library/react'
import AboutPage from '@/pages/about'

describe('AboutPage', () => {
  it('should have semantic structure', () => {
    render(<AboutPage />)

    expect(screen.getByRole('main')).toBeDefined()
  })

  describe('Profile Section', () => {
    it('should render profile heading', () => {
      render(<AboutPage />)

      const profileHeading = screen.getByRole('heading', { level: 2, name: /プロフィール/i })
      expect(profileHeading).toBeDefined()
    })

    it('should render profile name heading', () => {
      render(<AboutPage />)

      const nameHeading = screen.getByRole('heading', { level: 3, name: /大塚 麻紗也/i })
      expect(nameHeading).toBeDefined()
    })
  })

  describe('Education Section', () => {
    it('should render education heading', () => {
      render(<AboutPage />)

      const educationHeading = screen.getByRole('heading', { level: 2, name: /大学・学歴/i })
      expect(educationHeading).toBeDefined()
    })

    it('should render university name', () => {
      render(<AboutPage />)

      const universityHeading = screen.getByRole('heading', {
        level: 3,
        name: /東京電機大学/i,
      })
      expect(universityHeading).toBeDefined()
    })
  })

  describe('Club Activities Section', () => {
    it('should render club activities heading', () => {
      render(<AboutPage />)

      const clubHeading = screen.getByRole('heading', { level: 2, name: /サークル活動/i })
      expect(clubHeading).toBeDefined()
    })

    it('should render club name', () => {
      render(<AboutPage />)

      const clubNameHeading = screen.getByRole('heading', {
        level: 3,
        name: /軽音サークル/i,
      })
      expect(clubNameHeading).toBeDefined()
    })
  })

  describe('Internship Section', () => {
    it('should render internship heading', () => {
      render(<AboutPage />)

      const internshipHeading = screen.getByRole('heading', { level: 2, name: /インターンシップ/i })
      expect(internshipHeading).toBeDefined()
    })

    it('should render company name', () => {
      render(<AboutPage />)

      const companyHeading = screen.getByRole('heading', { level: 3, name: /株式会社アルゴ式/i })
      expect(companyHeading).toBeDefined()
    })
  })

  describe('Hobbies and Interests Section', () => {
    it('should render hobbies heading', () => {
      render(<AboutPage />)

      const hobbiesHeading = screen.getByRole('heading', { level: 2, name: /趣味・興味/i })
      expect(hobbiesHeading).toBeDefined()
    })

    it('should render hobby and interests subheadings', () => {
      render(<AboutPage />)

      const hobbySubHeading = screen.getByRole('heading', { level: 3, name: /^趣味$/i })
      expect(hobbySubHeading).toBeDefined()

      const interestsSubHeading = screen.getByRole('heading', { level: 3, name: /興味のある分野/i })
      expect(interestsSubHeading).toBeDefined()
    })

    it('should render lists for hobbies and interests', () => {
      render(<AboutPage />)

      const lists = screen.getAllByRole('list')
      expect(lists.length).toBeGreaterThanOrEqual(2)
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
      render(<AboutPage />)

      expect(screen.getByRole('heading', { level: 2, name: /プロフィール/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 2, name: /大学・学歴/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 2, name: /サークル活動/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 2, name: /インターンシップ/i })).toBeDefined()
      expect(screen.getByRole('heading', { level: 2, name: /趣味・興味/i })).toBeDefined()
    })
  })
})
