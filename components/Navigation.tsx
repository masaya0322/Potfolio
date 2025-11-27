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
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-xl font-bold transition-colors hover:text-gray-700 sm:text-2xl">
          Portfolio
        </Link>

        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.href}>
                <Link href={link.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
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
