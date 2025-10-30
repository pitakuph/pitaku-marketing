import Image from 'next/image'
import contactImage from '@/images/pitaku-admin.png'

export default function GrowYourBusinessContent() {
  return (
    <div className="mx-auto text-center">
      <h2 className="text-2xl max-w-3xl mx-auto leading-none font-bold font-display tracking-tight text-gray-900 sm:text-3xl">
        Grow Your Business, One Loyal Customer at a Time with{' '}
        <span className="font-bold text-shamrock">Pitaku!</span>
      </h2>
      <Image
        className="w-full relative h-[240px] sm:h-full max-w-2xl object-contain object-center z-0 mx-auto"
        src={contactImage}
        alt="get-early-access-pitaku-ph"
        unoptimized
      />
      <p className="mt-8 max-w-2xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
        Here’s how Pitaku makes loyalty easy:
      </p>
      <ul className="mt-8 text-sm space-y-2 text-gray-700">
        <li>
          <span className="font-medium text-green-600">
            ✔ No cards, no apps to install
          </span>{' '}
          – Just seamless rewards customers love.
        </li>
        <li>
          <span className="font-medium text-green-600">
            ✔ Flexible & customizable
          </span>{' '}
          – Set up rewards that fit your business.
        </li>
        <li>
          <span className="font-medium text-green-600">
            ✔ Designed for small to medium businesses
          </span>{' '}
          – Whether you run a café, salon, or shop, Pitaku fits right in.
        </li>
        <li>
          <span className="font-medium text-green-600">
            ✔ Real-time insights (Premium)
          </span>{' '}
          – See what’s working and adjust as you grow.)
        </li>
      </ul>
      <p className="mt-10 max-w-3xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
        We believe that loyal customers are the heart of every business—and
        we’re here to help you keep them.
      </p>
      <p className="mt-10 max-w-3xl mx-auto text-xl sm:text-2xl leading-8 text-gray-800">
        Let’s build something great together. Start your free trial today.
      </p>
    </div>
  )
}
