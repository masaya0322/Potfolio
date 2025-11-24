import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/work', label: 'WORK' },
    { href: '/skill', label: 'SKILL' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold">
            Portfolio
          </Link>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 transition-colors hover:text-gray-900"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <button onClick={toggleMenu} className="md:hidden" aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex space-x-4 overflow-x-auto px-4 pb-3 pt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="whitespace-nowrap rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export { Navigation }
