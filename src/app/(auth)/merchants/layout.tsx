import { type Metadata } from 'next'
import AuthProvider from '@/providers/AuthProvider'

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

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
