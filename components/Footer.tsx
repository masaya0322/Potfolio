import Link from 'next/link'
import { GithubIcon } from 'lucide-react'

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-gray-600">© {currentYear} Portfolio. All rights reserved.</p>
          <div className="flex items-center space-x-4">
            <Link
              href="https://github.com/masaya0322"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 transition-colors hover:text-gray-900"
              aria-label="GitHub"
            >
              <GithubIcon size={24} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { Footer }
