'use client';
import { Container } from "./Container";
import Image from "next/image";
import RevealOnScroll from "@/utils/aceternity/reveal-scroll";
import customerRetention from '@/images/customer-retention.jpg'
import lifetimeValue from '@/images/lifetime-value.jpg'
import elevateBusiness from '@/images/elevate-business.jpg'
import partnerSuccess from '@/images/partner-success.jpg'
// import backgroundImage from '@/images/background-features.jpg'

import { Button } from "./Button";

const features = [
    {
      name: 'Boost Customer Retention',
      description:
        'Use personalized rewards and incentives to increase satisfaction and build emotional connections with your customers.',
      imageSrc: customerRetention,
      imageAlt: 'Boost Customer Retention',
      page: '/customer-retention'
    },
    {
      name: 'Maximize Lifetime Value',
      description:
        'Use smart segmentation and targeting to nurture your best customers, boosting profits and long-term revenue.',
      imageSrc: lifetimeValue,
      imageAlt: 'Maximize Lifetime Value',
      page: '/customer-lifetime'
    },
    {
      name: 'Elevate Your Business',
      description:
        'Easily integrate our loyalty program with retail, lifestyle, travel, and food businesses of any size, creating a unified experience for your customers.',
      imageSrc: elevateBusiness,
      imageAlt: 'Elevate Your Business',
      page: '/elevate-businesses'
    },  
    {
      name: 'Partner for Success',
      description:
        'Work with a trusted partner dedicated to your success, providing expert advice, ongoing support, and innovative solutions tailored to your business needs.',
      imageSrc: partnerSuccess,
      imageAlt: 'Partner for Success',
      page: '/partner-for-success'
    },        
  ]
  
  function classNames(...classes:any) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Offers() {
    return (
      <section
        id="offers"
        aria-label="What can Pitaku do for you?"
        // className="relative overflow-hidden pb-28 pt-20 sm:py-20"
        className="relative overflow-hidden"
      >  
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      />           */}
      <Container className="relative">
        <div className="bg-slate">
          <div className="mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl font-display font-semibold tracking-tight text-gray-900 sm:text-5xl">
                What can <span className="text-shamrock font-bold">Pitaku</span> do for you?
              </h2>
              {/* <p className="mt-4 text-gray-500">
              </p> */}
            </div>
            
            <div className="mt-16 space-y-16">
              {features.map((feature, featureIdx) => (

                <div
                  key={feature.name}
                  className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:items-center lg:gap-10 "
                >
                <RevealOnScroll>
                <div
                    className={classNames(
                      // featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                      // 'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 sm:p-10'
                      featureIdx % 2 === 0 ? 'lg:col-start-1' : '',
                      'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4 sm:p-10'
                    )}
                  >
                    <h3 className="text-2xl sm:text-3xl font-semibold font-display tracking-tight text-shamrock">{feature.name}</h3>
                    <p className="mt-6 text-xl text-gray-900">{feature.description}</p>
                    <Button href={feature.page} color="green" className='mt-10'>
                      <span>
                        Learn more
                      </span>
                    </Button>
                  </div>

                  <div
                    className={classNames(
                      // featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                      // 'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8'
                      featureIdx % 2 === 0 ? '' : 'xl:col-start-3',
                      'flex-auto lg:row-start-1 col-span-8'
                    )}
                  >
                    {/* <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100"> */}
                    <div className="flex justify-center">
                      <Image 
                        src={feature.imageSrc} 
                        alt={feature.imageAlt}
                        width={400}
                        height={400}
                        className="w-auto h-[400px] object-contain object-center rounded-full border-8 border-shamrock"
                        />
                    </div>
                  </div>
                  </RevealOnScroll>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      </section>
    )
  }
  