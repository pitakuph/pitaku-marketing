import clsx from 'clsx'

// import { Button } from '@/components/Button'
import { CustomButton } from '@/components/Button'
import { Container } from '@/components/Container'
import RevealOnScroll from '@/utils/aceternity/reveal-scroll'
import { sendGAEventCustom } from '@/utils/Helper'

function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Plan({
  name,
  price,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-white py-8 lg:order-none' : 'lg:py-8',
      )}
    >
      <h3
        className={clsx(
          'mt-5 font-display text-xl font-semibold',
          featured ? 'text-shamrock' : 'text-white',
        )}
      >
        {name}
      </h3>
      <p
        className={clsx(
          'my-4 text-lg leading-tight',
          featured ? 'text-shamrock' : 'text-white',
        )}
      >
        {description}
      </p>
      <p
        className={clsx(
          'order-first font-display text-4xl',
          featured ? 'text-shamrock' : 'text-white',
        )}
      >
        {price}
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-base',
          featured ? 'text-shamrock' : 'text-white',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-shamrock' : 'text-white'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <CustomButton
        href={href}
        variant={featured ? 'solid' : 'solid'}
        color={featured ? 'green' : 'white'}
        className="mt-8"
        onClick={() =>
          sendGAEventCustom({
            action: 'click',
            category: 'Button',
            label: `${name} - Get Started - Pricing`,
            value: `${name} - Get Started - Pricing `,
          })
        }
      >
        Get started
      </CustomButton>
    </section>
  )
}

export function Pricing() {
  return (
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-shamrock bg-dot-white-pattern py-20 sm:py-32"
    >
      <Container>
        <div className="md:text-center">
          <RevealOnScroll>
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
              <span className="relative whitespace-nowrap">
                <span className="relative">Simple pricing,</span>
              </span>{' '}
              for everyone.
            </h2>
            <p className="mt-4 text-xl text-white">
              Enjoy competitive pricing models designed to fit your budget,
              ensuring maximum return on investment with minimal upfront costs.
            </p>
          </RevealOnScroll>
        </div>

        <div className="-mx-4 mt-16 grid max-w-2xl grid-cols-1 gap-y-10 sm:mx-auto lg:-mx-8 lg:max-w-none lg:grid-cols-3 xl:mx-0 xl:gap-x-8">
          <RevealOnScroll>
            <Plan
              name="30-Day Free Trial"
              price="Free Trial"
              description="Good for small businesses who needs to try a loyalty program."
              href="/contact"
              features={[
                'Basic Loyalty Program Feature',
                'Real-time Sales Report',
                'Basic Analytics',
              ]}
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Plan
              featured
              name="Monthly Premium Plan"
              price="PHP 1499"
              description="Good for businesses who needs to scale their business."
              href="/contact"
              features={[
                'Loyalty Program Customization Feature',
                'Real-time Sales Report',
                'Complete Analytics',
                'Customer Data Analytics',
                'Email Support (2-3 Business Days)',
                'Chat Support (9am-5pm)',
              ]}
            />
          </RevealOnScroll>
          <RevealOnScroll>
            <Plan
              name="Enterprise"
              price="Contact sales"
              description="Good for businesses who needs to sustain their business growth."
              href="/contact"
              features={[
                'Loyalty Program Customization Feature',
                'Real-time Sales Report',
                'Complete Analytics',
                'Customer Data Analytics',
                'Email Support (2-3 Business Days)',
                'Chat Support (9am-5pm)',
                'Call Support (9am-5pm)',
              ]}
            />
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  )
}
