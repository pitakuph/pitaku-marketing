'use client'

import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const faqs = [
  {
    question: "Is it expensive to implement a loyalty program for my business?",
    answer:
      "Our loyalty program solutions are designed to be affordable and scalable, tailored to fit businesses of all sizes and budgets. We offer flexible pricing plans with transparent pricing structures to ensure maximum value for your investment.",
  },
  {
    question: "How do I ensure that my loyalty program is effective in retaining customers?",
    answer:
      "Our loyalty program solutions are equipped with advanced analytics and reporting tools that allow you to track key performance metrics, measure the effectiveness of your program, and identify areas for improvement. We also provide strategic guidance and best practices to help you optimize your program for maximum results.",
  },
  {
    question: "Can I customize the loyalty program to suit the needs of my business and customers?",
    answer:
      "Yes, our loyalty program solutions are highly customizable, allowing you to tailor the program to fit the unique needs and preferences of your business and customers. From branding and design to rewards and incentives, we work closely with you to create a program that aligns with your goals and objectives.",
  },  

  // More questions...
]

export default function Faqs() {
  return (
    <div className="bg-slate-50">
      {/* <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40"> */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-5xl divide-y divide-gray-900/10">
          <h2 className="text-3xl font-display font-bold leading-10  text-shamrock text-center">
            Frequently asked questions
          </h2>
          <dl className="mt-10 space-y-10 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-xl font-semibold leading-7">{faq.question}</span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          ) : (
                            <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-4 pr-12">
                      <p className="text-lg leading-7 text-gray-700">{faq.answer}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
