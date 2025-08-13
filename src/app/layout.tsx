import { Lexend, Sora, Open_Sans } from 'next/font/google'
import clsx from 'clsx'
import Head from 'next/head'
import '@/styles/tailwind.css'
import { type Metadata } from 'next'

import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: {
    template: '%s - Pitaku Rewards',
    default: 'Pitaku Rewards',
  },
  description: 'Pitaku Rewards - Create rewards for your loyal customers.',
  openGraph: {
    url: 'https://www.pitaku.ph',
    title: 'Pitaku Rewards',
    description: 'Pitaku Rewards - Create rewards for your loyal customers.',
    images: [
      {
        url: '/images/pitaku-rewards.jpg',
        width: 1600,
        height: 914,
        alt: 'Pitaku Rewards - Create rewards for your loyal customers.',
      },
    ],
    siteName: 'Pitaku Rewards',
  },
}

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

const opensans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
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
        'h-full scroll-smooth bg-white bg-repeat antialiased',
        lexend.variable,
        sora.variable,
        opensans.variable,
      )}
    >
      <Head>
        <meta
          name="google-site-verification"
          content="k3oSinnwQEGxwPybB_a2LnS8rf8gvvVegzJ3zCjICk4"
        />
      </Head>
      <body className="flex h-full flex-col">{children}</body>
      <GoogleAnalytics gaId="G-9STR1P6QEC" />
    </html>
  )
}
