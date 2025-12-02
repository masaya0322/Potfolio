import { render, screen } from '@testing-library/react'
import ContactPage from '@/pages/contact'

describe('ContactPage', () => {
  it('should render page title', () => {
    render(<ContactPage />)

    const heading = screen.getByRole('heading', { level: 1, name: /contact/i })
    expect(heading).toBeDefined()
  })

  it('should have semantic structure', () => {
    render(<ContactPage />)

    expect(screen.getByRole('main')).toBeDefined()
  })

  describe('SNS Section', () => {
    it('should render SNS heading', () => {
      render(<ContactPage />)

      const snsHeading = screen.getByRole('heading', { level: 2, name: /sns/i })
      expect(snsHeading).toBeDefined()
    })

    it('should render GitHub section with link', () => {
      render(<ContactPage />)

      const githubHeading = screen.getByRole('heading', { level: 3, name: /github/i })
      expect(githubHeading).toBeDefined()

      const githubLink = screen.getByRole('link', { name: /@masaya0322/i })
      expect(githubLink).toBeDefined()
      expect(githubLink.getAttribute('href')).toBe('https://github.com/masaya0322')
      expect(githubLink.getAttribute('target')).toBe('_blank')
      expect(githubLink.getAttribute('rel')).toBe('noopener noreferrer')
    })

    it('should render X (Twitter) section with link', () => {
      render(<ContactPage />)

      const twitterHeading = screen.getByRole('heading', { level: 3, name: /x \(twitter\)/i })
      expect(twitterHeading).toBeDefined()

      const twitterLink = screen.getByRole('link', { name: /@pm06engineer09/i })
      expect(twitterLink).toBeDefined()
      expect(twitterLink.getAttribute('href')).toBe(
        'https://x.com/pm06engineer09?s=11&t=c0nC6knNs4STNVJRntKDSQ'
      )
      expect(twitterLink.getAttribute('target')).toBe('_blank')
      expect(twitterLink.getAttribute('rel')).toBe('noopener noreferrer')
    })
  })

  describe('Contact Form Section', () => {
    it('should render contact form heading', () => {
      render(<ContactPage />)

      const formHeading = screen.getByRole('heading', { level: 2, name: /お問い合わせ/i })
      expect(formHeading).toBeDefined()
    })

    it('should render ContactForm component with all fields', () => {
      render(<ContactPage />)

      expect(screen.getByLabelText(/名前/i)).toBeDefined()
      expect(screen.getByLabelText(/メールアドレス/i)).toBeDefined()
      expect(screen.getByLabelText(/件名/i)).toBeDefined()
      expect(screen.getByLabelText(/メッセージ/i)).toBeDefined()
      expect(screen.getByRole('button', { name: /送信/i })).toBeDefined()
    })
  })

  describe('All Sections Structure', () => {
    it('should render all main sections with h2 headings', () => {
      render(<ContactPage />)

      const snsHeading = screen.getByRole('heading', { level: 2, name: /sns/i })
      const formHeading = screen.getByRole('heading', { level: 2, name: /お問い合わせ/i })

      expect(snsHeading).toBeDefined()
      expect(formHeading).toBeDefined()
    })
  })
})
