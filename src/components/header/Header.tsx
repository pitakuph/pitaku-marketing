'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, Users, Building2, Phone, LogIn, Info } from 'lucide-react'
import { motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from '@/components/ui/navigation-menu'

import { Logo } from '../Logo'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const path = usePathname()
  console.log('path:', path)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className=" flex h-20 items-center justify-between px-4 container mx-auto">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Logo className="lg:w-[130px]" />
        </Link>

        {/* Desktop Navigation */}
        <div className="flex-row gap-10 hidden lg:flex items-center">
          {/* {path.toString().includes('contact') ? */}
          <Link
            href="/about"
            className="flex items-center z-50 gap-1 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {/* <Info className="h-4 w-4" /> */}
            About Us
          </Link>
          {/* : */}
          <Link
            // href="/contact"
            href="https://m.me/pitakurewards"
            target="_blank"
            className="flex items-center z-50 gap-1 text-gray-700 hover:text-gray-900 transition-colors"
          >
            {/* <Phone className="h-4 w-4" /> */}
            Contact
          </Link>
          {/* }           */}

          {/* Desktop Login/Signup Dropdown */}
          {/* <NavigationMenu className="hidden lg:flex right-[100px]">
            <NavigationMenuList className="relative -right-[100px] bg-red-100">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className="bg-shamrock text-white hover:bg-green-800 hover:text-white data-[state=open]:!bg-green-800 data-[state=open]:!text-white"
                  // onPointerEnter={(e) => e.preventDefault()} // disable hover open
                  // onPointerMove={(e) => e.preventDefault()} // disable hover open
                  onClick={(e) => e.preventDefault()}
                >
                  <LogIn className="mr-2 h-4 w-4" />
                  Login or Sign up
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid w-[300px] gap-3 p-4"
                  >
                    <NavigationMenuLink asChild>
                      <Link
                        href="/merchants"
                        className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Building2 className="h-4 w-4 text-shamrock" />
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Merchants
                          </div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Access your merchant dashboard and manage your
                          business
                        </p>
                      </Link>
                    </NavigationMenuLink>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/customer"
                        className="group block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                      >
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-shamrock" />
                          <div className="text-sm font-medium leading-none group-hover:underline">
                            Customers
                          </div>
                        </div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Sign in to track orders and manage your account
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>

            <NavigationMenuViewport />
          </NavigationMenu> */}
        </div>

        {/* Mobile Menu */}
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-6">
              {/* Mobile Logo */}
              <Link
                href="/"
                className="flex items-center space-x-2 pb-4 border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Logo className="lg:w-[130px]" />
              </Link>

              {/* Mobile Navigation Links */}
              {/* {path.toString().includes('contact') ? */}
              <Link
                href="/about"
                className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* <Info className="h-5 w-5" /> */}
                About Us
              </Link>
              {/* : */}
              <Link
                // href="/contact"
                href="https://m.me/pitakurewards"
                target="_blank"
                className="flex items-center gap-2 text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {/* <Phone className="h-5 w-5" /> */}
                Contact Us
              </Link>
              {/* } */}

              {/* Mobile Login Section */}
              {/* <div className="space-y-3 pt-4 border-t">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-gray-900">
                  <LogIn className="h-5 w-5 text-shamrock" />
                  Login or Sign up
                </h3>
                <div className="space-y-2 pl-7">
                  <Link
                    href="/merchants/login"
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Merchants
                  </Link>
                  <Link
                    href="/customers/login"
                    className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Customers
                  </Link>
                </div>
              </div> */}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
