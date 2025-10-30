'use client'

import { motion } from 'framer-motion'
import { Lock, Server, User, Flag } from 'lucide-react'

const features = [
  {
    id: 1,
    icon: Lock,
    title: 'Convenience',
    description:
      'No need to print, distribute, or replace physical cards — less hassle in managing a program.',
    delay: 0.1,
  },
  {
    id: 2,
    icon: Server,
    title: 'Digital-first',
    description:
      'Customer data and transactions are automatically tracked in one system, giving you insights in real time.',
    delay: 0.2,
  },
  {
    id: 3,
    icon: User,
    title: 'Eco-friendly',
    description:
      'Positions the business as sustainable and tech-forward, which appeals to today’s consumers.',
    delay: 0.3,
  },
  {
    id: 4,
    icon: Flag,
    title: 'Seamless access',
    description:
      'Easy for staff to enroll customers (just a phone number or QR scan), reducing friction at checkout.',
    delay: 0.4,
  },
]

export default function Features() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-gradient-to-br from-blue-50 via-green-50 to-indigo-50 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 border-2 border-green-300 rounded-full opacity-30"></div>
      <div className="absolute top-32 right-16 w-6 h-6 border-2 border-blue-300 rounded-full opacity-40"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 border-2 border-indigo-300 rounded-full opacity-35"></div>
      <div className="absolute bottom-32 right-32 w-5 h-5 border-2 border-green-300 rounded-full opacity-25"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20 max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {/* Data{' '} */}
            <span className="relative inline-block">
              <span className="relative z-10 text-white px-4 py-2 md:px-6 md:py-2">
                Loyalty
              </span>
              <div className="absolute inset-0 bg-green-500 rounded-full transform -rotate-2"></div>
            </span>{' '}
            made simple
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Run a modern rewards program without printing cards. Track customer
            activity in real time and engage them effortlessly at checkout.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="group"
              >
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className="flex items-start gap-4 md:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-green-600" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12 md:mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              🔒 Your Trust, Our Priority
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We`&#39;re committed to maintaining the highest standards of data
              protection and privacy. Your information is safe with us.
            </p>
          </div>
        </motion.div> */}

        {/* Trust Badges */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-8 mt-12 md:mt-16"
        >
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/60 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/60 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2 text-sm md:text-base text-gray-600 bg-white/60 px-4 py-2 rounded-full">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SOC 2 Type II</span>
          </div>
        </motion.div> */}
      </div>
    </motion.section>
  )
}
