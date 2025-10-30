'use client'

import { motion } from 'framer-motion'

export default function CircleAnimation() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {/* Outermost Circle */}
      <motion.div
        className="absolute w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(34, 197, 94, 0.15) 0%, rgba(22, 163, 74, 0.25) 100%)',
          filter: 'blur(1px)',
        }}
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 360],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          scale: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          },
          rotate: {
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          },
          opacity: {
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
          },
        }}
      />

      {/* Middle Circle */}
      <motion.div
        className="absolute w-72 h-72 md:w-96 md:h-96 lg:w-[450px] lg:h-[450px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(74, 222, 128, 0.2) 0%, rgba(34, 197, 94, 0.3) 100%)',
          filter: 'blur(0.5px)',
        }}
        animate={{
          scale: [1, 1.08, 1],
          rotate: [360, 0],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          scale: {
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 0.5,
          },
          rotate: {
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          },
          opacity: {
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1,
          },
        }}
      />

      {/* Innermost Circle */}
      <motion.div
        className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(134, 239, 172, 0.25) 0%, rgba(74, 222, 128, 0.35) 100%)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 360],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          scale: {
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1,
          },
          rotate: {
            duration: 15,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'linear',
          },
          opacity: {
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: 'easeInOut',
            delay: 1.5,
          },
        }}
      />

      {/* Central Glow Effect */}
      <motion.div
        className="absolute w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(187, 247, 208, 0.4) 0%, transparent 70%)',
          filter: 'blur(2px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.9, 0.6],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      {/* Subtle Pulse Rings */}
      <motion.div
        className="absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full border border-green-300/20"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.8, 0, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeOut',
        }}
      />

      <motion.div
        className="absolute w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border border-green-400/15"
        animate={{
          scale: [1, 1.8, 1],
          opacity: [0.6, 0, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: 'easeOut',
          delay: 1,
        }}
      />
    </div>
  )
}
