// 'use client'

import Header from '@/components/header/Header'
import Footer from '@/components/Footer'
import About from '@/components/about/About'

import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Us',
  description:
    'We’re a team of developers and entrepreneurs who came together with a simple goal — to build solutions that help our own businesses thrive.',
}

export default function AboutPage() {
  return (
    <div>
      <main>
        <Header />
        <About />
      </main>
      <Footer />
    </div>
  )
}
