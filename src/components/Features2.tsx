'use client'

import Image from 'next/image'
import featuresImage1 from '@/images/features.jpg'
import featuresImage2 from '@/images/features2.jpg'
import featuresImage3 from '@/images/features3.jpg'
import { StickyScroll } from '@/utils/aceternity/sticky-scroll-reveal'

const features = [
  {
    title: 'Real-time Sales Tracker',
    description: `Boost your business's performance with our Real-time Sales Tracker feature. This tool provides instant updates on your sales activity, helping you monitor transactions as they happen. Stay informed about your best-selling products, peak sales times, and overall revenue trends. `,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={featuresImage1}
          width={640}
          height={480}
          className="h-full w-full object-cover object-center rounded-4xl"
          alt="real-time-sales-tracker"
        />
      </div>
    ),
  },
  {
    title: 'Transaction Management',
    description:
      'Enhance your business operations with our Transaction Management feature. This powerful tool streamlines your sales process by providing a comprehensive overview of all transactions in real time. Simplify your financial management and boost your business success with our seamless Transaction Management feature.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white rounded-full">
        <Image
          src={featuresImage2}
          width={640}
          height={480}
          className="h-full w-full object-cover object-center rounded-4xl"
          alt="transaction-management"
        />
      </div>
    ),
  },
  {
    title: 'Customizable Loyalty Program',
    description:
      'Tailor rewards and incentives to match your unique business needs and customer preferences. Create personalized loyalty tiers, exclusive offers, and special promotions that resonate with your audience. Empower your business with a loyalty program that adapts to your goals and keeps customers coming back.',
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <Image
          src={featuresImage3}
          width={640}
          height={480}
          className="h-full w-full object-cover object-center rounded-4xl"
          alt="customizable-loyalty-program"
        />
      </div>
    ),
  },
]

export default function Features2() {
  return (
    <section
      id="features"
      aria-label="Pitaku Features"
      className="bg-slate-900 bg-dot-pattern"
    >
      <div className="mx-auto py-20">
        <h1 className="flex relative px-6 sm:px-14 lg:px-3 text-3xl sm:text-4xl font-semibold font-display text-slate-50 max-w-6xl mx-auto">
          Pitaku Features
        </h1>
        <StickyScroll content={features} />
      </div>
    </section>
  )
}
