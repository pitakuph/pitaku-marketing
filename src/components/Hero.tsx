import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'
import heroImage from '@/images/hero.jpg'

import { TextGenerateEffect } from '@/utils/aceternity/text-generate-effect'
import { sendGAEventCustom } from '@/utils/Helper'


type Props = {
  onWatchClick?: () => void
}

export function Hero({
  onWatchClick
}:Props) {
  
  return (
    <div className='relative w-full h-auto pb-10 sm:h-[960px] bg-dark-green'>
    <Image className='w-full h-[240px] sm:h-full max-w-[1920px] absolute object-cover object-center z-0 top-0 left-[50%] translate-x-[-50%]' src={heroImage} alt='create-rewards' unoptimized />
    <Container className="z-10 relative pt-[260px] flex flex-col">
      <h1 className="order-2 mt-4 font-sans text-4xl font-semibold text-center sm:text-left text-white sm:text-7xl max-w-xl lg:max-w-2xl xl:max-w-3xl leading-tight tracking-tight p-4 sm:p-0">        
        <TextGenerateEffect words={'Create rewards for your loyal customers.'}/>
      </h1>
      <p className='order-1 w-64 mx-auto sm:mx-0 text-center rounded-xl p-4 sm:p-1 bg-dark-green text-white'>Pitaku Rewards Platform</p>
      <p className="order-3 mt-6 max-w-2xl text-xl text-center sm:text-left text-white p-4 sm:p-0">
        Our user-friendly platform makes creating and integrating rewards simple and effective.
      </p>

      <Button 
        href="/contact" 
        color="green" 
        className='order-4 mt-10 self-center sm:self-start ml-4 sm:ml-0'
        onClick={()=>sendGAEventCustom({ 
          action: 'click', 
          category: 'Button',
          label: 'Try It Free - Hero',
          value: 'Try It Free - Hero' 
        })}
        >
        <span className='px-4 font-normal text-xl text-white '>
          Try It Free
        </span>
      </Button>

        
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
    </div>
  )
}
