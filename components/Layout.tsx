import { ReactNode } from 'react'
import { Navigation } from '@/components/Navigation'
import { Footer } from '@/components/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

export { Layout }
