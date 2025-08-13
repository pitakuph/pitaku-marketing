'use client'

import { motion } from 'framer-motion'
import {
  MonitorSmartphone,
  Ban,
  SmilePlus,
  Sparkles,
  ArrowRight,
  Award,
  HeartHandshake,
  PhilippinePeso,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const features = [
  {
    id: 1,
    icon: Award,
    text: 'Cardless Rewards',
    position: {
      desktop: { top: '15%', left: '8%' },
      mobile: { order: 1 },
    },
    delay: 0.2,
  },
  {
    id: 2,
    icon: SmilePlus,
    text: 'Customer Insights',
    position: {
      desktop: { top: '8%', right: '15%' },
      mobile: { order: 2 },
    },
    delay: 0.4,
  },
  {
    id: 3,
    icon: PhilippinePeso,
    text: 'Sales tracking',
    position: {
      desktop: { top: '35%', right: '8%' },
      mobile: { order: 3 },
    },
    delay: 0.6,
  },
  {
    id: 4,
    icon: HeartHandshake,
    text: 'Easy redemption',
    position: {
      desktop: { top: '55%', right: '12%' },
      mobile: { order: 4 },
    },
    delay: 0.8,
  },
  {
    id: 5,
    icon: MonitorSmartphone,
    text: 'Use any device',
    position: {
      desktop: { bottom: '25%', left: '5%' },
      mobile: { order: 5 },
    },
    delay: 1.0,
  },
  {
    id: 6,
    icon: Ban,
    text: 'No App Installation',
    position: {
      desktop: { bottom: '45%', left: '12%' },
      mobile: { order: 6 },
    },
    delay: 1.2,
  },
]

const chartSegments = [
  { color: 'bg-purple-400', rotation: 0 },
  { color: 'bg-blue-400', rotation: 60 },
  { color: 'bg-green-400', rotation: 120 },
  { color: 'bg-yellow-400', rotation: 180 },
  { color: 'bg-orange-400', rotation: 240 },
  { color: 'bg-pink-400', rotation: 300 },
]

export default function Explainer() {
  return (
    <section className="relative py-12 md:py-24 bg-gradient-to-br from-teal-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            <span className="text-shamrock">Pitaku</span> rewards for merchants
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            {`Pitaku let's you track every sale and reward your best customers helping you boost repeat visits and steady your income.`}
          </p>
        </motion.div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative max-w-6xl mx-auto h-[700px]">
            {/* MIDDLE IMAGE */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="relative w-64 h-64">
                {chartSegments.map((segment, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, rotate: segment.rotation - 30 }}
                    whileInView={{ opacity: 1, rotate: segment.rotation }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className={`absolute inset-0 ${segment.color} rounded-full`}
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((segment.rotation + 60) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((segment.rotation + 60) * Math.PI) / 180)}%)`,
                    }}
                  />
                ))}

                <div className="absolute inset-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="text-3xl font-bold text-gray-700"
                  >
                    🚀
                  </motion.div>
                </div>
              </div>
            </motion.div> */}

            {/* Feature Cards - Desktop */}
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="absolute"
                style={feature.position.desktop}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 flex items-center gap-3 min-w-[200px] hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Decorative Elements - Desktop Only */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
              className="absolute top-12 right-20"
            >
              <Sparkles className="w-6 h-6 text-shamrock" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.7 }}
              className="absolute bottom-16 left-16"
            >
              <Sparkles className="w-4 h-4 text-shamrock" />
            </motion.div>

            {/* Animated Arrows - Desktop Only */}
            {/* <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 2 }}
              className="absolute top-20 left-1/3"
            >
              <svg width="100" height="60" viewBox="0 0 100 60" className="text-purple-400">
                <motion.path
                  d="M10 10 Q50 40 90 20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2.2 }}
                />
                <motion.polygon
                  points="85,15 95,20 85,25"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 3 }}
                />
              </svg>
            </motion.div> */}

            {/* <motion.div
              initial={{ opacity: 0, pathLength: 0 }}
              whileInView={{ opacity: 1, pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 2.5 }}
              className="absolute bottom-32 right-1/4"
            >
              <svg width="80" height="50" viewBox="0 0 80 50" className="text-green-400">
                <motion.path
                  d="M70 40 Q40 10 10 30"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2, delay: 2.7 }}
                />
                <motion.polygon
                  points="15,25 5,30 15,35"
                  fill="currentColor"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 3.5 }}
                />
              </svg>
            </motion.div> */}

            {/* Middle Badge - Desktop */}
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.8 }}
              className="absolute top-16 left-1/2 transform -translate-x-1/2"
            >
              <div className="bg-purple-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg">Process</div>
            </motion.div> */}
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden">
          {/* Central Chart - Mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              {/* Chart Segments */}
              {chartSegments.map((segment, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, rotate: segment.rotation - 30 }}
                  whileInView={{ opacity: 1, rotate: segment.rotation }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className={`absolute inset-0 ${segment.color} rounded-full`}
                  style={{
                    clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((segment.rotation + 60) * Math.PI) / 180)}% ${50 + 50 * Math.sin(((segment.rotation + 60) * Math.PI) / 180)}%)`,
                  }}
                />
              ))}

              {/* Inner Circle */}
              <div className="absolute inset-4 sm:inset-6 md:inset-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: 'linear',
                  }}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700"
                >
                  🚀
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Process Badge - Mobile */}
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1.8 }}
            className="flex justify-center mb-8 md:mb-12"
          >
            <div className="bg-purple-500 text-white px-4 py-2 sm:px-6 sm:py-2 rounded-full font-semibold shadow-lg text-sm sm:text-base">
              Process
            </div>
          </motion.div> */}

          {/* Feature Cards Grid - Mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-2xl mx-auto">
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="w-full"
                style={{ order: feature.position.mobile.order }}
              >
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-4 md:p-6 flex items-center gap-3 hover:shadow-xl transition-shadow">
                  <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-shamrock" />
                  </div>
                  <span className="font-semibold text-gray-900 text-sm md:text-base">
                    {feature.text}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mobile Decorative Elements */}
          {/* <div className="flex justify-center gap-8 mt-8 md:mt-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.5 }}
            >
              <Sparkles className="w-5 h-5 md:w-6 md:h-6 text-shamrock" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.7 }}
            >
              <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-shamrock" />
            </motion.div>
          </div> */}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 2 }}
          className="text-center mt-12 md:mt-16"
        >
          {/* <button className="bg-shamrock hover:bg-green-800 text-white px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold text-base md:text-lg transition-colors inline-flex items-center gap-2 group">
            Get Started Today
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
          </button> */}
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold group font-display"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
