import Image from 'next/image'
import featuresImage from '@/images/features.jpg'

const features = [
    { name: 'Real-time Sales Tracker', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { name: 'Transaction Management', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { name: 'Customizable Loyalty Program', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { name: 'Marketing Bot', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
    { name: 'Merchant Support', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' },
  ]
  
  export default function Features() {
    return (
      <div className="bg-slate-900">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-20 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-display font-bold tracking-tight text-white sm:text-4xl">
                Features
            </h2>
            <p className="mt-4 text-white">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} 
                    // className="border-t border-shamrock pt-4"
                    >
                  <dt className="text-lg font-display font-medium text-shamrock">{feature.name}</dt>
                  <dd className="mt-2 text-sm text-white">{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          {/* <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8"> */}
          <div className="grid grid-cols-1 overflow-hidden rounded-xl">
            <Image 
                src={featuresImage} 
                alt='features'
                width={2048}
                height={2048}
                className="w-auto h-full object-contain object-center"
            />
            {/* <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            /> */}
          </div>
        </div>
      </div>
    )
  }
  