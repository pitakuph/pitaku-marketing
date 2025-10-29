'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Zap } from 'lucide-react'
import AboutAnimation from './AboutAnimation'
import { ArrowRight } from 'lucide-react'

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-shamrock/25 via-white to-emerald-100 lg:px-16 border-dotted border-b-2 border-green-500"
    >
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8 lg:mt-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-transparent rounded-xl border-green-400 text-green-600 hover:bg-transparent"
              >
                <Zap className="h-4 w-4" />
                About the Pitaku Team
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <h1 className="text-3xl lg:text-5xl font-bold text-gray-900 font-display mb-5 leading-none lg:leading-tight">
                Who We Are
              </h1>

              {/* Description */}
              <p className="my-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                {`We’re a team of developers and entrepreneurs who came together with a simple goal — to build solutions that help our own businesses thrive.`}
              </p>

              <p className="my-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                {`We’ve been on both sides of the table: building, selling, serving customers, and struggling to keep loyalty alive. That’s why Pitaku isn’t just another rewards platform — it’s a product born from real-world experience, designed to solve real business problems.`}
              </p>

              <p className="my-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                {`We build what we wish existed — tools that make it easier for small businesses to grow, retain loyal customers, and compete in a digital-first world.`}
              </p>
            </motion.div>

            {/* Stats or Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-8"
            >
              <h1 className="mt-10 text-3xl lg:text-5xl font-bold text-gray-900 font-display leading-none lg:leading-tight">
                What We Believe
              </h1>
              <p className="my-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                {`We operate on three core values:`}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8 border-t border-green-200">
                <div className="">
                  <div className="text-2xl font-bold text-gray-900">
                    Clarity
                  </div>
                  <div className="text-sm text-gray-600">
                    in design, in data, and in direction.
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-bold text-gray-900">
                    Intention
                  </div>
                  <div className="text-sm text-gray-600">
                    every feature must have a purpose that drives value.
                  </div>
                </div>
                <div className="">
                  <div className="text-2xl font-bold text-gray-900">Impact</div>
                  <div className="text-sm text-gray-600">
                    our work must make measurable improvements for merchants and
                    their customers
                  </div>
                </div>
              </div>

              <p className="my-5 text-lg text-gray-600 leading-relaxed max-w-xl">
                {`We don’t chase trends. We build with purpose. Our goal is to create tools that work quietly but powerfully — so businesses can focus on what they do best.`}
              </p>

              <Link href="https://m.me/pitakurewards" target="_blank">
                <Button
                  size="lg"
                  className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold group font-display"
                >
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column - Hero Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <AboutAnimation />
          </motion.div>
        </div>
      </div>

      {/* <Belt /> */}
    </motion.section>
  )
}
