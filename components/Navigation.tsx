import Link from 'next/link'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'

interface NavigationProps {}

const Navigation = ({}: NavigationProps) => {
  const navLinks = [
    { href: '/about', label: 'ABOUT' },
    { href: '/work', label: 'WORK' },
    { href: '/skill', label: 'SKILL' },
    { href: '/contact', label: 'CONTACT' },
  ]

  return (
    <nav className="sticky top-0 z-50 border-b bg-white">
      <div className="flex h-16 items-center justify-between px-2 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-bold hover:text-gray-700 sm:text-2xl">
          Portfolio
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="space-x-0 sm:space-x-1">
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={`${navigationMenuTriggerStyle()} px-1.5 text-xs hover:bg-gray-300 sm:px-4 sm:text-sm`}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  )
}

export { Navigation }
