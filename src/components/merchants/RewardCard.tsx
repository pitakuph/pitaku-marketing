import Image from 'next/image'
import Link from 'next/link'
import { RewardsProps } from '@/utils/Types'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { GiftIcon } from '@heroicons/react/24/outline'

type Props = {
    reward: RewardsProps;
}

export default function RewardCard({reward}:Props) {
  return (
        <div className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow shadow-black/25">
          <div className="flex flex-1 flex-col p-8">
            
            {reward?.imageUrl ?
              <Image 
                className='w-[100px] h-[100px] mx-auto rounded-full object-cover' 
                src={reward.imageUrl} 
                width={100} 
                height={100} 
                alt={reward.name} 
              />
              :
              <GiftIcon className='w-[100px] h-[100px] mx-auto opacity-25 text-shamrock' />
            }

            <h3 className="mt-6 font-medium text-gray-900">{reward.name}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Description</dt>
              <dd className="text-sm text-gray-500">{reward.description}</dd>
              <dt className="sr-only">Points</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  Redeem for {reward.requiredPoints} Points
                </span>
              </dd>
            </dl>
          </div>
        </div>
  )
}
