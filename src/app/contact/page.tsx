import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { type Metadata } from 'next'

import { cookies } from 'next/headers'

export const metadata: Metadata = {
  title: 'Grow Your Business, One Loyal Customer at a Time with Pitaku!',
  description:
    'We believe that loyal customers are the heart of every business—and we’re here to help you keep them.',
  openGraph: {
    title: 'Grow Your Business, One Loyal Customer at a Time with Pitaku!',
    description:
      'We believe that loyal customers are the heart of every business—and we’re here to help you keep them.',
    images: [
      {
        url: '/images/pitaku-rewards.jpg',
        width: 1366,
        height: 780,
        alt: 'get-early-access-pitaku-ph',
      },
    ],
    siteName: 'Pitaku PH',
  },
}

export default function Contact() {
  // FOR A/B TESTING
  const variant = cookies().get('ab_test_variant')?.value || 'A' // Default to A

  return (
    <>
      <Header />
      <ContactForm variant={variant} />
      <Footer />
    </>
  )
}
