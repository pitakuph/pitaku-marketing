'use client'
import { useState } from 'react'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import Offers from '@/components/Offers'
import Faqs from '@/components/Faqs'
import Features from '@/components/Features'
import Features2 from '@/components/Features2'
import VideoDialog from '@/components/VideoDialog'

import { sendGAEventCustom } from '@/utils/Helper'

export default function Home() {

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const onWatchClick = () => {
    setIsOpen(true);

    sendGAEventCustom({ 
      action: 'click', 
      category: 'Button',
      label: 'Watch how Pitaku works - Hero',
      value: 'Watch how Pitaku works - Hero' 
    })    
  }

  return (
    <>
      <Header />
      <main>
        <Hero 
          onWatchClick={onWatchClick}
          />
        <VideoDialog 
          isOpen={isOpen} 
          setIsOpen={setIsOpen}
          />
        <Offers />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <Features /> */}
        <Features2 />
        <Pricing />
        <CallToAction />
        {/* <Testimonials /> */}
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
