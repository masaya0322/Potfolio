import { render, screen } from '@testing-library/react'
import { Layout } from '@/components/Layout'

describe('Layout', () => {
  it('should render children content', () => {
    render(
      <Layout>
        <div data-testid="test-content">Test Content</div>
      </Layout>
    )

    expect(screen.getByTestId('test-content')).toBeDefined()
  })

  it('should render Navigation component with logo', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    const logoLink = screen.getByRole('link', { name: /portfolio/i })
    expect(logoLink).toBeDefined()
  })

  it('should render Footer component', () => {
    const { container } = render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(container.querySelector('footer')).toBeDefined()
  })

  it('should have proper semantic structure with main element', () => {
    render(
      <Layout>
        <div>Test Content</div>
      </Layout>
    )

    expect(screen.getByRole('main')).toBeDefined()
  })
})
