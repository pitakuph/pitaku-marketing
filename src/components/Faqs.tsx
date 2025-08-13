'use client'

import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const faqs = [
  {
    id: 'item-1',
    question: 'What is DeliveryApp?',
    answer:
      'DeliveryApp is a comprehensive delivery platform that connects customers, restaurants, and delivery drivers. We provide seamless ordering, efficient delivery management, and powerful analytics tools to help businesses grow and customers get their favorite food delivered quickly and reliably.',
  },
  {
    id: 'item-2',
    question: 'Can I trust DeliveryApp?',
    answer:
      "We use industry-leading security measures including bank-grade encryption, certified data centers, and comply with all local data protection laws. Your personal and payment information is completely secure with us. We're also fully licensed and insured for all delivery operations.",
  },
  {
    id: 'item-3',
    question: 'How do I use DeliveryApp?',
    answer:
      "Getting started is simple! Download our app or visit our website, create your account, and browse restaurants in your area. For restaurants, sign up for our merchant portal and we'll help you get set up within 24 hours. Delivery drivers can apply through our driver app and start earning after a quick verification process. You can use DeliveryApp from anywhere on your laptop, mobile, or tablet!",
  },
  {
    id: 'item-4',
    question: 'Do I have to pay to use DeliveryApp?',
    answer:
      'For customers, DeliveryApp is free to use! You only pay for your food and a small delivery fee. Restaurants pay a competitive commission rate only when they receive orders. Delivery drivers keep 100% of their tips plus competitive base pay. We offer a 1-month free trial for new restaurant partners.',
  },
  {
    id: 'item-5',
    question: "What if my favorite restaurant doesn't use DeliveryApp?",
    answer:
      "We're constantly expanding our network of partner restaurants! You can suggest restaurants to join our platform through the app, and we'll reach out to them. We're also actively recruiting new restaurants in all areas. In the meantime, discover new favorites from our existing partners - you might find your next go-to spot!",
  },
  {
    id: 'item-6',
    question: 'International customers',
    answer:
      "Currently, DeliveryApp operates in select regions, but we're rapidly expanding internationally. If we're not in your area yet, sign up for our waitlist to be notified when we launch in your location. We're committed to bringing our service to customers worldwide while maintaining our high standards of quality and reliability.",
  },
]

export default function FAQs() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-16 right-20 opacity-40">
        <Sparkles className="w-6 h-6 text-purple-400" />
      </div>
      <div className="absolute bottom-20 left-16 opacity-30">
        <div className="w-4 h-4 bg-blue-300 rounded-full"></div>
      </div>
      <div className="absolute top-32 left-10 opacity-25">
        <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="relative">
              <span className="relative z-10">Questions</span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-purple-300 -rotate-1"></div>
            </span>
          </h2>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Illustration Side */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative order-2 lg:order-1"
            >
              {/* Main Illustration Container */}
              <div className="relative">
                {/* Computer Monitor */}
                <div className="relative bg-gradient-to-br from-purple-400 to-blue-500 rounded-3xl p-8 shadow-2xl">
                  {/* Screen */}
                  <div className="bg-gradient-to-br from-yellow-200 to-orange-200 rounded-2xl p-6 mb-4 relative overflow-hidden">
                    {/* Characters */}
                    <div className="flex items-center justify-between relative z-10">
                      {/* Left Character */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-400 rounded-full mb-2 flex items-center justify-center">
                          <div className="text-2xl">👩‍🦰</div>
                        </div>
                        <div className="bg-pink-300 rounded-2xl px-3 py-2 text-xs font-medium text-gray-800">
                          Need help?
                        </div>
                      </div>

                      {/* Right Character */}
                      <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full mb-2 flex items-center justify-center">
                          <div className="text-2xl">👨‍💼</div>
                        </div>
                        <div className="bg-blue-300 rounded-2xl px-3 py-2 text-xs font-medium text-gray-800">
                          Happy to help!
                        </div>
                      </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute top-2 right-2 w-8 h-8 bg-green-400 rounded-full opacity-80 transform rotate-12"></div>
                    <div className="absolute bottom-2 left-2 w-6 h-6 bg-purple-400 rounded-full opacity-60 transform -rotate-12"></div>
                  </div>

                  {/* Monitor Stand */}
                  <div className="w-16 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-b-lg mx-auto"></div>
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-purple-400 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute -bottom-6 -left-6 w-6 h-6 bg-blue-400 rounded-full shadow-lg"
                ></motion.div>

                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                  className="absolute top-1/2 -left-8 w-4 h-4 border-2 border-purple-400 rounded-full"
                ></motion.div>
              </div>

              {/* Additional Decorative Elements */}
              <div className="absolute top-8 left-8 w-3 h-3 bg-yellow-400 rounded-full opacity-70"></div>
              <div className="absolute bottom-12 right-8 w-2 h-2 bg-pink-400 rounded-full opacity-80"></div>
            </motion.div>

            {/* FAQ Accordion Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <Accordion
                type="single"
                collapsible
                className="space-y-4"
                defaultValue="item-3"
              >
                {faqs.map((faq, index) => (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                  >
                    <AccordionItem
                      value={faq.id}
                      className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-2"
                    >
                      <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-purple-700 transition-colors text-base md:text-lg py-6 hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-sm md:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>

              {/* Contact Support */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="mt-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl p-6 text-white text-center"
              >
                <h3 className="text-xl font-bold mb-2">
                  Still have questions?
                </h3>
                <p className="mb-4 opacity-90">
                  Our support team is here to help you 24/7
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Contact Support
                </button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
