import { Inter, Lexend, Noto_Sans  } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s - Pitaku',
    default: 'Pitaku - Powerful solution for customer engagement and life time value',
  },
  description:
    'Our comprehensive loyalty program solution empowers businesses in retail, lifestyle, travel, and food industries to do just that, elevating customer engagement and fueling sustainable growth.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const notosans = Noto_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-notosans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-dot-pattern bg-repeat antialiased',
        inter.variable,
        notosans.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
