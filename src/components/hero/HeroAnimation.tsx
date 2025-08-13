'use client'

import { motion } from 'framer-motion'
import { Package, Clock, Heart, Coffee, Pizza, Trophy } from 'lucide-react'
import CircleAnimation from './CircleAnimation'

// const icons = [
//   Package,
//   Clock,
//   Star,
//   Heart,
//   Zap,
//   Coffee,
//   Pizza,
//   ShoppingBag,
//   Truck,
//   MapPin,
//   Phone,
//   Gift,
//   CreditCard,
//   Users,
//   TrendingUp,
//   CheckCircle,
// ]

// const colors = [
//   'bg-blue-400',
//   'bg-green-400',
//   'bg-purple-400',
//   'bg-pink-400',
//   'bg-yellow-400',
//   'bg-orange-400',
//   'bg-red-400',
//   'bg-indigo-400',
//   'bg-teal-400',
//   'bg-cyan-400',
// ]

const floatingElements = [
  {
    id: 1,
    type: 'circle',
    icon: Package,
    color: 'bg-teal-400',
    position: { bottom: '25%', left: '8%' },
    size: 'w-10 h-10 sm:w-20 sm:h-20',
    delay: 0,
  },
  {
    id: 2,
    type: 'circle',
    icon: Clock,
    color: 'bg-green-400',
    position: { top: '20%', right: '20%' },
    size: 'w-6 h-6 sm:w-12 sm:h-12',
    delay: 0.25,
  },
  // {
  //   id: 3,
  //   type: "diamond",
  //   color: "bg-orange-400",
  //   position: { top: "35%", left: "5%" },
  //   size: "w-8 h-8",
  //   delay: 1,
  // },
  {
    id: 4,
    type: 'circle',
    icon: Pizza,
    color: 'bg-purple-400',
    position: { top: '60%', right: '12%' },
    size: 'w-4 h-4 sm:w-8 sm:h-8',
    delay: 0.5,
  },
  // {
  //   id: 5,
  //   type: "star",
  //   color: "bg-yellow-400",
  //   position: { top: "60%", left: "10%" },
  //   size: "w-6 h-6",
  //   delay: 2,
  // },
  {
    id: 6,
    type: 'circle',
    icon: Coffee,
    color: 'bg-amber-400',
    position: { bottom: '55%', right: '25%' },
    size: 'w-8 h-8 sm:w-16 sm:h-16',
    delay: 0.75,
  },
  {
    id: 7,
    type: 'circle',
    icon: Heart,
    color: 'bg-rose-500',
    position: { bottom: '45%', left: '20%' },
    size: 'w-4 h-4 sm:w-8 sm:h-8',
    delay: 1,
  },
  // {
  //   id: 8,
  //   type: "diamond",
  //   color: "bg-cyan-400",
  //   position: { bottom: "15%", left: "25%" },
  //   size: "w-6 h-6",
  //   delay: 3.5,
  // },
  // {
  //   id: 9,
  //   type: "circle",
  //   icon: Truck,
  //   color: "bg-indigo-400",
  //   position: { top: "30%", left: "15%" },
  //   size: "w-12 h-12",
  //   delay: 4,
  // },
  {
    id: 10,
    type: 'circle',
    icon: Trophy,
    color: 'bg-cyan-400',
    position: { top: '20%', left: '15%' },
    size: 'w-10 h-10 sm:w-20 sm:h-20',
    delay: 1.25,
  },
  {
    id: 11,
    type: 'text',
    content: '120 PTS',
    color: 'bg-white',
    textColor: 'text-shamrock',
    position: { top: '45%', right: '8%' },
    size: 'w-16 h-6 sm:w-20 sm:h-8',
    delay: 1.5,
  },
  {
    id: 12,
    type: 'text',
    content: '24/7',
    color: 'bg-white',
    textColor: 'text-blue-500',
    position: { bottom: '15%', right: '25%' },
    size: 'w-10 h-6 sm:w-14 sm:h-8',
    delay: 1.75,
  },
  {
    id: 13,
    type: 'emoji',
    content: '✨',
    position: { top: '10%', right: '30%' },
    scale: 'scale-75',
    delay: 0,
  },
  {
    id: 14,
    type: 'emoji',
    content: '💯',
    position: { bottom: '15%', left: '15%' },
    scale: 'scale-100',
    delay: 0.25,
  },
  {
    id: 15,
    type: 'emoji',
    content: '🔶',
    position: { top: '35%', left: '25%' },
    scale: 'scale-50',
    delay: 0.5,
  },
  {
    id: 16,
    type: 'emoji',
    content: '✨',
    position: { top: '44%', right: '18%' },
    scale: 'scale-50',
    delay: 1,
  },
  {
    id: 17,
    type: 'emoji',
    content: '🔹',
    position: { bottom: '10%', right: '20%' },
    scale: 'scale-100',
    delay: 1.25,
  },
  {
    id: 18,
    type: 'emoji',
    content: '✨',
    position: { bottom: '10%', left: '25%' },
    scale: 'scale-75',
    delay: 1.5,
  },
  {
    id: 19,
    type: 'emoji',
    content: '👍',
    position: { bottom: '5%', right: '30%' },
    scale: 'scale-125',
    delay: 1.75,
  },
  {
    id: 20,
    type: 'emoji',
    content: '🫶🏻',
    position: { top: '50%', right: '5%' },
    scale: 'scale-125',
    delay: 2,
  },
]

const balloonAnimation = {
  initial: { scale: 0, opacity: 0, y: 20 },
  animate: {
    scale: [0, 1.2, 1],
    opacity: [0, 1, 1],
    y: [20, -5, 0],
    rotate: [0, 5, -5, 0],
  },
  transition: {
    duration: 0.8,
    ease: 'easeOut',
    times: [0, 0.6, 1],
  },
}

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    rotate: [0, 5, -5, 0],
    scale: [1, 1.05, 1],
  },
  transition: {
    duration: 4,
    repeat: Number.POSITIVE_INFINITY,
    ease: 'easeInOut',
  },
}

const StarShape = ({ className }: { className?: string }) => (
  <div className={`relative ${className}`}>
    <div className="absolute inset-0 transform rotate-0">
      <div className="w-full h-full bg-current clip-star"></div>
    </div>
    <svg viewBox="0 0 24 24" className="w-full h-full fill-current">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  </div>
)

const DiamondShape = ({ className }: { className?: string }) => (
  <div className={`transform rotate-45 ${className}`}></div>
)

export default function HeroAnimation() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px]">
      {/* Background Gradient */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-500 to-green-600 rounded-3xl"></div> */}

      {/* Circle Animation Background */}
      <div className="absolute inset-0 z-0 opacity-75 sm:-left-[50px]">
        <CircleAnimation />
      </div>

      {/* Subtle Background Pattern */}
      {/* <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div> */}

      {/* Main Character */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        // className="absolute inset-0 flex items-center justify-center z-10"
        className="absolute inset-0 flex z-30 justify-center items-start"
      >
        <motion.img
          src="/images/happy-merchant.png"
          alt="happy-merchant"
          //   className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain"
          className="object-cover object-top scale-75 sm:scale-100 origin-top"
          // animate={{
          //   y: [0, -8, 0],
          // }}
          // transition={{
          //   duration: 3,
          //   repeat: Number.POSITIVE_INFINITY,
          //   ease: "easeInOut",
          // }}
        />
      </motion.div>

      {/* Floating Elements */}
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute z-20"
          style={element.position}
          initial={balloonAnimation.initial}
          animate={balloonAnimation.animate}
          transition={{
            ...balloonAnimation.transition,
            delay: element.delay,
          }}
        >
          <motion.div
            {...floatingAnimation}
            transition={{
              ...floatingAnimation.transition,
              delay: element.delay + 1,
            }}
          >
            {element.type === 'circle' && (
              <div
                className={`${element.size} ${element.color} rounded-full shadow-lg flex items-center justify-center backdrop-blur-sm border-2 border-white/20`}
              >
                {element.icon && (
                  <element.icon className="w-1/2 h-1/2 text-white" />
                )}
              </div>
            )}

            {element.type === 'diamond' && (
              <DiamondShape
                className={`${element.size} ${element.color} shadow-lg border-2 border-white/20`}
              />
            )}

            {element.type === 'star' && (
              <StarShape
                className={`${element.size} ${element.color} shadow-lg`}
              />
            )}

            {element.type === 'text' && (
              <div
                className={`${element.size} ${element.color} rounded-lg shadow-lg flex items-center justify-center border-2 border-white/20 backdrop-blur-sm`}
              >
                <span
                  className={`text-xs md:text-sm font-bold ${element.textColor}`}
                >
                  {element.content}
                </span>
              </div>
            )}

            {element.type === 'emoji' && (
              <div className={`flex items-center justify-center`}>
                <span className={`text-4xl font-bold ${element.scale}`}>
                  {element.content}
                </span>
              </div>
            )}
          </motion.div>
        </motion.div>
      ))}

      {/* Additional Sparkle Effects */}
      {/* <motion.div
        className="absolute top-1/4 left-1/3 w-2 h-2 bg-yellow-300 rounded-full z-30"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          delay: 1,
        }}
      /> */}

      {/* <motion.div
        className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-white rounded-full z-30"
        animate={{
          scale: [0, 1.2, 0],
          opacity: [0, 0.8, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 2,
        }}
      /> */}

      {/* <motion.div
        className="absolute top-1/2 left-1/4 w-1 h-1 bg-yellow-200 rounded-full z-30"
        animate={{
          scale: [0, 1, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Number.POSITIVE_INFINITY,
          delay: 3,
        }}
      /> */}

      {/* Floating Particles */}
      {Array.from({ length: 10 }, (_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 bg-teal-200 rounded-full z-20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
