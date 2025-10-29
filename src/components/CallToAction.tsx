'use client'
// import { motion } from 'framer-motion';
// import Image from 'next/image'
// import { Button } from '@/components/Button'
import { CustomButton } from '@/components/Button'
import { Container } from '@/components/Container'
// import { AuroraBackground } from '@/utils/aceternity/aurora-background';
import RevealOnScroll from '@/utils/aceternity/reveal-scroll'
import { sendGAEventCustom } from '@/utils/Helper'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-dark-green border-b-8 border-shamrock py-24 lg:py-36 bg-[url('/images/cta.jpg')] max-w-[1920px] mx-auto bg-cover bg-top sm:bg-cover sm:bg-center bg-no-repeat"
    >
      <Container className="relative">
        <RevealOnScroll>
          <div className="w-full flex flex-col mx-auto sm:ml-[50%] lg:ml-[50%] sm:max-w-sm lg:max-w-lg">
            <h2 className="font-sans text-3xl font-semibold text-center sm:text-left lg:text-left text-white sm:text-3xl lg:text-5xl">
              Let&#39;s grow your business together!
            </h2>
            <CustomButton
              href="/contact"
              color="green"
              className="mt-10 self-center sm:self-start lg:self-start"
              onClick={() =>
                sendGAEventCustom({
                  action: 'click',
                  category: 'Button',
                  label: `Try It Free - CTA`,
                  value: `Try It Free - CTA`,
                })
              }
            >
              <span className="px-4 font-normal text-xl text-white ">
                Try It Free
              </span>
            </CustomButton>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  )
}
