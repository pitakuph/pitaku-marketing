import Image from 'next/image'
import Link from 'next/link'
import { MerchantsProps } from '@/utils/Types'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { BuildingStorefrontIcon } from '@heroicons/react/24/outline'

type Props = {
    merchant: MerchantsProps;
    isPage: boolean;
}

export default function MerchantCard({merchant, isPage}:Props) {
  return (
        <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow shadow-black/25">
          <div className="flex flex-1 flex-col p-8">
            
            {merchant?.logoUrl ?
              <Image 
                className='w-[100px] h-[100px] mx-auto rounded-full object-cover' 
                src={merchant.logoUrl} 
                width={100} 
                height={100} 
                alt={merchant.name} 
              />
              :
              <BuildingStorefrontIcon className='w-[100px] h-[100px] mx-auto opacity-25 text-shamrock' />
            }

            <h3 className="mt-6 text-lg font-medium text-gray-900">{merchant.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Address</dt>
              <dd className="text-sm text-gray-500">{merchant.address}</dd>
              <dt className="sr-only">Contact</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {merchant.phone}
                </span>
              </dd>
            </dl>
          </div>
          {!isPage &&
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <Link
                  href={`/merchants/${merchant.name}`}
                  className="bg-shamrock/5 relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-shamrock hover:bg-shamrock/10 transition-all ease-out duration-300"
                >
                  Learn More
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
          }
        </div>
  )
}
