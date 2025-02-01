'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

import screenshotSalesTracker from '@/images/screenshots/sales-tracker.png'
import screenshotRewards from '@/images/screenshots/rewards.png'
import screenshotDevices from '@/images/screenshots/devices.png'

const features = [
  {
    title: 'Rewards creator and management',
    description:
      "Easily create and customize digital loyalty rewards, track redemptions, and keep your customers engaged.",
    image: screenshotRewards,
  },
  {
    title: 'Real-time Sales Tracker',
    description:
      "Monitor daily transactions and performance at a glance.",
    image: screenshotSalesTracker,
  },
  // {
  //   title: 'VAT handling',
  //   description:
  //     "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
  //   image: screenshotVatReturns,
  // },
  // {
  //   title: 'Reporting',
  //   description:
  //     'Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.',
  //   image: screenshotReporting,
  // },
  {
    title: 'Accessible Anytime, Anywhere',
    description:
      'Access your rewards program seamlessly on mobile, tablet, or laptop—manage your loyalty programs on the go, wherever you are.',
    image: screenshotDevices,
  },  
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-dark-green pb-28 pt-20 sm:py-32"
    >
      {/* <Image
        className="absolute left-1/2 top-1/2 max-w-none translate-x-[-44%] translate-y-[-42%]"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        unoptimized
      /> */}
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-2xl text-center tracking-tight text-white sm:text-4xl md:text-5xl">
            Everything you need to build lasting customer loyalty, all in one easy-to-use platform.
          </h2>
          {/* <p className="mt-6 text-lg tracking-tight text-green-100">
            Well everything you need if you aren’t that picky about minor
            details like tax compliance.
          </p> */}
        </div>
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-5">
                <Tab.List className="relative z-10 flex gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-6',
                        selectedIndex === featureIndex
                          ? ' lg:bg-white/10 lg:ring-1 lg:ring-inset lg:ring-white/10'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-lg ui-not-focus-visible:outline-none',
                            selectedIndex === featureIndex
                              ? 'text-white lg:text-white'
                              : 'text-white hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-green-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-7">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 bottom-[-4.25rem] top-[-6.5rem] bg-white/10 ring-1 ring-inset ring-white/10 sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-base text-white sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    {/* <div className="mt-10 w-[36rem] overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[53.0625rem]"> */}
                    <div className="mt-10 w-[26rem] overflow-hidden rounded-xl sm:w-auto lg:mt-0 lg:w-[53.0625rem]">
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt=""
                        priority
                        // sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                        sizes="(min-width: 849px) 53.0625rem, (min-width: 590px) 100vw, 26rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
