import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

import { TextGenerateEffect } from '@/utils/aceternity/text-generate-effect'
import { sendGAEventCustom } from '@/utils/Helper'


type Props = {
  onWatchClick: () => void
}

export function Hero({
  onWatchClick
}:Props) {
  
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-24">
      {/* <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-gray-900 sm:text-7xl">
        Powerful solution for{' '}
        <span className="relative whitespace-nowrap text-shamrock">
          <span className="relative font-semibold whitespace-normal">customer engagement</span>
        </span>{' '}
        and life time value.
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight text-gray-700 p-4 sm:p-0">
        Our comprehensive loyalty program solution empowers businesses in retail, lifestyle, travel, and food industries to do just that, elevating customer engagement and fueling sustainable growth.
      </p> */}
      <h1 className="sm:mt-10 mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-gray-900 sm:text-7xl">
        <span className="relative whitespace-nowrap text-shamrock">
          {/* <span className="relative font-semibold whitespace-normal">Engage customers</span>           */}
            <TextGenerateEffect words={'Engage customers'} className='font-semibold whitespace-normal relative text-shamrock' />
        </span>{' '}
        {/* and boost lifetime value! */}
        <TextGenerateEffect words={'and boost lifetime value!'} delay={500}/>
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-xl text-gray-700 p-4 sm:p-0">
        Our loyalty program is perfect for businesses in retail, lifestyle, travel, and food industries, our platform helps you build deeper connections and drive sustainable growth.
      </p>

      <div className="mt-20 flex flex-col sm:flex-row justify-center items-center gap-6">
        <Button 
          href="/contact" 
          color='green'
          onClick={()=>sendGAEventCustom({ 
            action: 'click', 
            category: 'Button',
            label: 'Get early access - Hero',
            value: 'Get early access - Hero' 
          })}
          >
            Get early access
        </Button>
        <Button
          variant="solid"
          onClick={onWatchClick}
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-shamrock group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z" />
          </svg>
          <span className="ml-3 font-medium">Watch how Pitaku works</span>
        </Button>
      </div>
        
      {/* PARTNER MERCHANTS
      <div className="mt-24 lg:mt-28">
        <p className="font-display text-lg font-bold text-shamrock">
          Our Partner Merchants
        </p>
        <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div> */}
    </Container>
  )
}
