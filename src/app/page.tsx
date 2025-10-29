'use client'

import Header from '@/components/header/Header'
import Hero from '@/components/hero/Hero'
import Belt from '@/components/hero/Belt'
import Explainer from '@/components/Explainer'
import HowItWorks from '@/components/HowItWorks'
import Faqs from '@/components/Faqs'
import Testimonials from '@/components/Testimonials'
import Features3 from '@/components/Features3'
import Footer from '@/components/Footer'

// import { sendGAEventCustom } from '@/utils/Helper';

export default function Home() {
  return (
    <div>
      <main>
        <Header />
        <Hero />
        {/* <Belt /> */}
        <Explainer />
        <HowItWorks />
        <Features3 />
        {/* <Testimonials /> */}
        {/* <CallToAction /> */}
        <Faqs />
      </main>
      <Footer />
    </div>
  )
}
