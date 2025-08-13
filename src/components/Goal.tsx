'use client'
import { Container } from './Container'
import RevealOnScroll from '@/utils/aceternity/reveal-scroll'
import { Button } from './Button'
import YouTubePlayer from './YoutubePlayer'
import { sendGAEventCustom } from '@/utils/Helper'

export default function Goal() {
  return (
    <section
      id="offers"
      aria-label="Our Goal"
      className="relative overflow-hidden"
    >
      <RevealOnScroll>
        <Container className="relative">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-28 lg:max-w-7xl lg:px-8">
            <div className="mx-auto text-center">
              <h1 className="mx-auto text-3xl font-sans font-semibold tracking-tight leading-tight max-w-5xl text-dark-green sm:text-6xl">
                Our goal is to help your business&nbsp;
                <span className="text-shamrock">retain customers&nbsp;</span>
                and drive growth with&nbsp;
                <span className="text-shamrock">rewarding experiences.</span>
              </h1>
              <p className="mx-auto mt-20 max-w-3xl text-xl text-gray-800">
                You&#39;ll never have to worry about keeping customers. Our
                easy-to-use reward creator platform helps you retain customers
                and grow your business effortlessly.
              </p>
            </div>
            <div className="w-full flex flex-col items-center justify-center p-0 sm:p-6">
              <YouTubePlayer videoId="Jv-_i9i_MmY" />
              <Button
                href="/contact"
                color="green"
                className="mt-10"
                onClick={() =>
                  sendGAEventCustom({
                    action: 'click',
                    category: 'Button',
                    label: 'Try It Free - Goal',
                    value: 'Try It Free - Goal',
                  })
                }
              >
                <span className="px-4 font-normal text-xl text-white ">
                  Try It Free
                </span>
              </Button>
            </div>
          </div>
        </Container>
      </RevealOnScroll>
    </section>
  )
}
