import { Lexend, Rubik, Sora  } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Pitaku PH',
    default: 'Pitaku PH',
  },
  description: 'Pitaku PH - Powerful solution for customer engagement and life time value',
  openGraph: {
    url: 'https://www.pitaku.ph',
    title: 'Pitaku PH',
    description:
      'Pitaku PH - Powerful solution for customer engagement and life time value',
    images: [
      {
        url: '/articles/boosting-customer-retention-for-your-small-business.jpg',
        width: 1600,
        height: 914,
        alt: 'Pitaku PH - Powerful solution for customer engagement and life time value',
      },
    ],
    siteName: 'Pitaku PH',
  },   
}

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// })

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

// const notosans = Noto_Sans({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-notosans',
// })

const rubik = Rubik({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-rubik',
})

const sora = Sora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sora',
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
        lexend.variable,
        sora.variable,
      )}
    >
      <Head>
        <meta name="google-site-verification" content="k3oSinnwQEGxwPybB_a2LnS8rf8gvvVegzJ3zCjICk4" />
      </Head>
      <body className="flex h-full flex-col">{children}</body>
      <GoogleAnalytics gaId="G-9STR1P6QEC" />
    </html>
  )
}
