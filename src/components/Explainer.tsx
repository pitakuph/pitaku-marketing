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
    <section
      id="explainer"
      className="relative py-12 md:py-24 bg-gradient-to-br from-teal-50 to-white overflow-hidden"
    >
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
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-[1100px] h-auto top-0 left-0 transform z-0"
            >
              <img
                src={`/images/pitaku-desktop.png`}
                alt="pitaku-desktop"
                className="w-full h-full object-contain shadow opacity-75 grayscale"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-[280px] h-auto mx-auto origin-center top-5 left-[37%] transform translate-x-[-37%] z-0"
            >
              <img
                src={`/images/pitaku-mobile.png`}
                alt="pitaku-mobile"
                className="w-full h-full object-contain object-center shadow-xl"
              />
            </motion.div>

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
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden relative">
          <div className="mx-auto absolute w-full h-[500px] scale-50 lg:block hidden">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-[1100px] h-auto top-0 left-0 transform z-0"
            >
              <img
                src={`/images/pitaku-desktop.png`}
                alt="pitaku-desktop"
                className="w-full h-full object-contain shadow opacity-75 grayscale"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute w-[280px] h-auto mx-auto origin-center top-5 left-[37%] transform translate-x-[-37%] z-0"
            >
              <img
                src={`/images/pitaku-mobile.png`}
                alt="pitaku-mobile"
                className="w-full h-full object-contain object-center shadow-xl"
              />
            </motion.div>
          </div>

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
        </div>
      </div>
    </section>
  )
}
