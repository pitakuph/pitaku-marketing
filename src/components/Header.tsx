'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { Popover, Transition } from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'

import { useRouter, usePathname } from 'next/navigation'
import { sendGAEventCustom } from '@/utils/Helper'

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Popover.Button 
      as={Link} 
      href={href} 
      className="block w-full p-2"
      onClick={()=>sendGAEventCustom({ 
        action: 'click', 
        category: 'Button',
        label: `${children} - Header - Mobile`,
        value: `${children} - Header - Mobile` 
      })}
      >
      {children}
    </Popover.Button>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  const pathname = usePathname();

  return (
    <Popover>
      <Popover.Button
        className="relative z-10 flex h-8 w-8 items-center justify-center ui-not-focus-visible:outline-none"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 bg-slate-300/50" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            as="div"
            className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5"
          >
            <MobileNavLink href="/#offers">Our Offers</MobileNavLink>
            <MobileNavLink href="/#features">Features</MobileNavLink>
            <MobileNavLink href="/#pricing">Pricing</MobileNavLink>
            <MobileNavLink href="/blogs">Blog</MobileNavLink>
            <hr className="m-2 border-slate-300/40" />

            { pathname !== '/contact' &&
              <MobileNavLink href="/contact">Get early access</MobileNavLink>
            }

          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  )
}

export function Header() {
  
  const pathname = usePathname();

  return (
    <header className="pt-4 pb-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          
          <div className="flex items-center lg:gap-x-12">
            <Link href="/" aria-label="Home">
              <Logo className="w-auto h-20 object-contain" />
            </Link>
            <div className="hidden lg:flex lg:gap-x-6">
              <NavLink href="/#offers">Our Offers</NavLink>
              <NavLink href="/#features">Features</NavLink>
              <NavLink href="/#pricing">Pricing</NavLink>
              <NavLink href="/blogs">Blog</NavLink>
            </div>
          </div>

          <div className="flex items-center gap-x-5 lg:gap-x-8">
            { pathname !== '/contact' ? 
              <Button 
                href="/contact" 
                color="green" 
                className='hidden lg:flex'
                onClick={()=>sendGAEventCustom({ 
                  action: 'click', 
                  category: 'Button',
                  label: 'Get early access - Header',
                  value: 'Get early access - Header' 
                })}
                >
                <span>
                  Get early access
                </span>
              </Button>
              :
              <Button
                href="/" 
                color="green" 
                className='hidden lg:flex'
                onClick={()=>sendGAEventCustom({ 
                  action: 'click', 
                  category: 'Button',
                  label: 'Learn more - Header',
                  value: 'Learn more - Header' 
                })}
                >
                <span>
                  Learn more
                </span>
              </Button>              
            }
            <div className="-mr-1 lg:hidden">
              <MobileNavigation />
            </div>
          </div>

        </nav>
      </Container>
    </header>
  )
}
