'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, Zap } from 'lucide-react'
import HeroAnimation from './HeroAnimation'
// import Belt from "./Belt"
import Link from 'next/link'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-white via-shamrock/30 to-emerald-100 lg:px-16 border-dotted border-b-2 border-green-500"
      // className="relative overflow-hidden bg-gradient-to-br from-green-50 via-teal-100 to-emerald-500 lg:px-16"
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
            {/* Trial Badge */}
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
                {/* <Zap className="h-4 w-4" />Unlock more with premium */}
                <Zap className="h-4 w-4" />
                Welcome to Pitaku Rewards!
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
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 font-display mb-5 leading-none lg:leading-tight">
                {/* Start a loyalty program in minutes&nbsp; */}
                {/* <span className="text-shamrock">for free</span> */}
                {`We’re building something`}&nbsp;
                <span className="text-shamrock">powerful</span>&nbsp;
                {`for your business.`}
              </h1>

              {/* Description */}
              <p className="my-5 text-xl text-gray-600 leading-relaxed max-w-xl">
                {/* Pitaku rewards makes it effortless to build customer loyalty and community. */}
                {`Join the waitlist and get early access when we launch.`}
              </p>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row sm:items-center gap-4"
            >
              <Link href="https://m.me/pitakurewards" target="_blank">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold group font-display"
                >
                  {/* Get started */}
                  Join Waitlist
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link href="#explainer">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-6 text-lg font-semibold group font-display"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              {/* Trial Messaging */}
              {/* <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1.0 }}
                className="flex items-center gap-2 text-sm text-gray-500"
              >
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>No credit card required</span>
                </div>
                <span>•</span>
                <span>Cancel anytime</span>
                <span>•</span>
                <span>Full access</span>
              </motion.div> */}
            </motion.div>

            {/* Stats or Social Proof */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Active Merchants</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-gray-900">99.9%</div>
                <div className="text-sm text-gray-600">Uptime</div>
              </div>
            </motion.div> */}
          </motion.div>

          {/* Right Column - Hero Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>

      {/* <Belt /> */}
    </motion.section>
  )
}
