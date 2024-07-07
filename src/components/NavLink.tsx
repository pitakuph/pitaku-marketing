'use client';
import Link from 'next/link'
import { sendGAEventCustom } from '@/utils/Helper'

export function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      onClick={()=>sendGAEventCustom({ 
        action: 'click', 
        category: 'Button',
        label: `${children} - Navlink`,
        value: `${children} - Navlink` 
      })}
      href={href}
      className="inline-block rounded-lg px-2 py-1 text-lg font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
    >
      {children}
    </Link>
  )
}
