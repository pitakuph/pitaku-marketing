import Link from 'next/link'

import { CustomButton } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-24 w-auto -ml-4" />
        </Link>
      </div>
      {/* <p className="mt-20 font-medium text-gray-700">404</p> */}
      <h1 className="mt-3 text-lg font-semibold text-dark-green">
        404: Page Not Found — But You&#39;re Still Valued.
      </h1>
      <p className="mt-3 text-gray-700">
        Even when pages disappear, your loyalty doesn’t. Let’s guide you back to
        something more rewarding.
      </p>
      <CustomButton href="/" color="green" className="mt-10">
        Go to homepage
      </CustomButton>
    </SlimLayout>
  )
}
