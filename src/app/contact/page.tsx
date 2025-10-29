import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { type Metadata } from 'next'
// import Image from 'next/image'
import ContactImage from '@/components/contact/ContactImage'
// import { cookies } from 'next/headers'

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
  // // FOR A/B TESTING
  // const variant = cookies().get('ab_test_variant')?.value || 'A' // Default to A

  return (
    <main className="relative bg-gradient-to-tr from-green-200 via-white to-emerald-50">
      <Header />
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 items-start p-6">
        <ContactImage />
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
