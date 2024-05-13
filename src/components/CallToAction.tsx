import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import backgroundImage from '@/images/wall1.jpg'

export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-shamrock py-32"
    >
      <Image
        className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
        src={backgroundImage}
        alt=""
        width={2688}
        height={1536}
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center bg-white p-10 rounded-xl">
          <h2 className="font-display text-3xl tracking-tight text-shamrock sm:text-4xl">
            Get started today
          </h2>
          <p className="mt-4 text-lg tracking-tight text-gray-500">
          Unlock the full potential of customer loyalty and transform your business into a thriving, customer-centric powerhouse. Join us in redefining the future of retention and lifetime value today!
          </p>
          <Button href="/register" color="green" className="mt-10">
            Get early access
          </Button>
        </div>
      </Container>
    </section>
  )
}
