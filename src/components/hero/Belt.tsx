'use client'

import { motion } from 'framer-motion'
import {
  Rocket,
  Coffee,
  ShoppingBag,
  Pizza,
  Utensils,
  Car,
  Bike,
  Package,
  Gift,
  Heart,
  Star,
  Zap,
  Truck,
  Clock,
  MapPin,
  Phone,
} from 'lucide-react'

const icons = [
  Rocket,
  Coffee,
  ShoppingBag,
  Pizza,
  Utensils,
  Car,
  Bike,
  Package,
  Gift,
  Heart,
  Star,
  Zap,
  Truck,
  Clock,
  MapPin,
  Phone,
]

const backgroundColors = [
  'bg-yellow-400',
  'bg-green-400',
  'bg-blue-400',
  'bg-purple-400',
  'bg-pink-400',
  'bg-orange-400',
  'bg-red-400',
  'bg-indigo-400',
  'bg-teal-400',
  'bg-cyan-400',
  'bg-lime-400',
  'bg-amber-400',
  'bg-emerald-400',
  'bg-violet-400',
  'bg-fuchsia-400',
  'bg-rose-400',
]

// Generate random icons with random colors
const generateBeltItems = (count: number) => {
  return Array.from({ length: count }, (_, index) => {
    const IconComponent = icons[Math.floor(Math.random() * icons.length)]
    const bgColor =
      backgroundColors[Math.floor(Math.random() * backgroundColors.length)]

    return {
      id: index,
      icon: IconComponent,
      bgColor,
    }
  })
}

const BeltRow = ({
  items,
  direction = 'left',
  speed = 50,
}: {
  items: Array<{ id: number; icon: any; bgColor: string }>
  direction?: 'left' | 'right'
  speed?: number
}) => {
  // Calculate the width needed for seamless animation
  const itemWidth = 96 + 24 // 96px (lg:w-24) + 24px gap (lg:gap-6)
  const totalWidth = items.length * itemWidth

  return (
    <div className="flex overflow-hidden">
      <motion.div
        className="flex gap-4 md:gap-6 lg:gap-6"
        animate={{
          x: direction === 'left' ? [0, -totalWidth] : [0, totalWidth],
        }}
        transition={{
          duration: speed,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'linear',
        }}
        style={{
          width: `${totalWidth * 2}px`, // Double width for seamless loop
        }}
      >
        {/* First set of items */}
        {items.map((item) => (
          <div
            key={`first-${item.id}`}
            className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${item.bgColor} rounded-full flex items-center justify-center`}
          >
            <item.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
        ))}

        {/* Duplicate set for seamless loop - no gap between sets */}
        {items.map((item) => (
          <div
            key={`second-${item.id}`}
            className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 ${item.bgColor} rounded-full flex items-center justify-center`}
          >
            <item.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
        ))}

        {/* Third set for extra smoothness */}
        {items.map((item) => (
          <div
            key={`third-${item.id}`}
            className={`flex-shrink-0 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 ${item.bgColor} rounded-full flex items-center justify-center shadow-lg`}
          >
            <item.icon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white" />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Belt() {
  // Generate different sets of items for each row with consistent counts
  const topRowItems = generateBeltItems(25)
  //   const middleRowItems = generateBeltItems(25)
  //   const bottomRowItems = generateBeltItems(25)

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      // className="relative overflow-hidden bg-blue-50 py-8 md:py-12 lg:py-16"
      className="relative overflow-hidden py-8 md:py-10 lg:py-12"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Animated Belt Rows */}
        <div className="space-y-6 md:space-y-8 lg:space-y-10">
          {/* Top Row - Moving Left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="will-change-transform"
          >
            <BeltRow items={topRowItems} direction="left" speed={120} />
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
