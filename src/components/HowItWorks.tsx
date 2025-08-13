'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    id: 1,
    title: 'Sign Up and login',
    description:
      "You only need your name, email and mobile number. It's that easy!",
    mockupImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-11%20211345-s0E16DSl1qNi4YsAJiF6NgLQppxGPk.png',
    mockupAlt: 'sign-up',
  },
  {
    id: 2,
    title: 'Create your rewards',
    description: 'Provide name, type and duration of the reward item.',
    mockupImage:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-11%20211404-sfdmASGpukW312fnySl1sNpANfcN5n.png',
    mockupAlt: 'create-your-rewards',
  },
  {
    id: 3,
    title: 'Transact',
    description:
      'Encourage your customers to register to your loyalty program.',
    mockupImage: '/mobile-app-profile-setup.png',
    mockupAlt: 'transact',
  },
  {
    id: 4,
    title: 'Reward your customers',
    description:
      'Engage with your customers and know the rewards that matter to them.',
    mockupImage: '/mobile-delivery-dashboard.png',
    mockupAlt: 'Reward',
  },
  {
    id: 5,
    title: 'Enjoy!',
    description: 'Build your community by using Pitaku.',
    mockupImage: '/mobile-app-analytics-dashboard.png',
    mockupAlt: 'enjoy',
  },
]

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % steps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)
  }

  // const goToStep = (index: number) => {
  //   setCurrentStep(index)
  // }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-100 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      {/* <div className="absolute top-20 left-10 opacity-30">
        <Sparkles className="w-6 h-6 text-green-400" />
      </div>
      <div className="absolute top-32 right-16 opacity-40">
        <Sparkles className="w-4 h-4 text-blue-400" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-35">
        <Sparkles className="w-5 h-5 text-indigo-400" />
      </div> */}

      <div className="container mx-auto px-4">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-display">
            How{' '}
            <span className="relative">
              <span className="relative z-10 text-white px-6 py-2">Pitaku</span>
              <div className="absolute inset-0 bg-green-500 rounded-full transform -skew-x-12"></div>
            </span>{' '}
            works
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
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Mobile Mockup */}
            <motion.div
              key={currentStep}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.5 }}
              className="relative flex justify-center lg:justify-start"
            >
              {/* Decorative Arrow */}
              {/* <div className="absolute -top-8 -right-8 hidden lg:block">
                <svg width="80" height="60" viewBox="0 0 80 60" className="text-green-400">
                  <motion.path
                    d="M10 50 Q40 10 70 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                  <motion.polygon
                    points="65,25 75,30 65,35"
                    fill="currentColor"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 }}
                  />
                </svg>
              </div> */}

              {/* Phone Mockup */}
              <div className="relative">
                <div className="w-72 h-[580px] -rotate-6 md:w-80 md:h-[640px] bg-white rounded-[3rem] shadow-2xl border-8 border-gray-200 overflow-hidden">
                  <div className="relative h-full">
                    {/* Phone Screen */}
                    {/* <img
                      src={steps[currentStep].mockupImage || '/placeholder.svg'}
                      alt={steps[currentStep].mockupAlt}
                      className="w-full h-full object-cover"
                    /> */}
                  </div>
                </div>

                {/* Floating Elements */}
                {/* <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  className="absolute -top-4 -left-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-6 -right-6 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center shadow-lg"
                >
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </motion.div> */}
              </div>
            </motion.div>

            {/* Content */}
            <div className="text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-6"
                >
                  {/* Step Number */}
                  <div className="text-lg font-semibold text-green-600 font-display">
                    Step {steps[currentStep].id}
                  </div>

                  {/* Step Title */}
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight font-display">
                    {steps[currentStep].title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                    {steps[currentStep].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="flex items-center justify-center lg:justify-start gap-4 mt-8">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={prevStep}
                  className="rounded-full w-12 h-12 border-2 bg-transparent"
                  disabled={currentStep === 0}
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-900">
                    {currentStep + 1} of {steps.length}
                  </span>
                </div>

                <Button
                  variant="outline"
                  size="icon"
                  onClick={nextStep}
                  className="rounded-full w-12 h-12 border-2 bg-transparent"
                  disabled={currentStep === steps.length - 1}
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Step Indicators */}
              {/* <div className="flex justify-center lg:justify-start gap-2 mt-6">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentStep ? "bg-green-500 scale-125" : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div> */}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 md:mt-20"
        >
          {/* <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg font-semibold">
            Get Started Now
          </Button> */}
          <Button
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold group font-display"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          {/* <p className="text-sm text-gray-500 mt-3">No credit card required • Free trial available</p> */}
        </motion.div>
      </div>
    </motion.section>
  )
}
