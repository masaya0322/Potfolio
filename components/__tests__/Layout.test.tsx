import { render, screen } from '@testing-library/react'
import { Layout } from '@/components/Layout'

describe('Layout', () => {
  it('should render children content', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('should render Navigation component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByRole('link', { name: /portfolio/i })).toBeInTheDocument()
  })

  it('should render Footer component', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    const currentYear = new Date().getFullYear()
    expect(screen.getByText(`© ${currentYear} Portfolio. All rights reserved.`)).toBeInTheDocument()
  })

  it('should have proper structure with navigation, main, and footer', () => {
    const { container } = render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    const nav = container.querySelector('nav')
    const main = container.querySelector('main')
    const footer = container.querySelector('footer')

    expect(nav).toBeInTheDocument()
    expect(main).toBeInTheDocument()
    expect(footer).toBeInTheDocument()
  })
})
