'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Users,
  TrendingUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Restaurant Owner',
    company: 'Golden Dragon Bistro',
    avatar: '/placeholder.svg?height=60&width=60&text=SC',
    rating: 5,
    text: "DeliveryApp transformed our business completely. We've seen a 300% increase in orders and the platform is incredibly easy to use. The customer support is outstanding!",
    featured: true,
    stats: { orders: '2.5K+', revenue: '$45K+' },
    companyLogo: '/placeholder.svg?height=40&width=120&text=Golden+Dragon',
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Delivery Driver',
    company: 'Independent Contractor',
    avatar: '/placeholder.svg?height=60&width=60&text=MJ',
    rating: 5,
    text: "The driver app is intuitive and the route optimization saves me hours every day. I'm earning 40% more than with other platforms.",
    stats: { deliveries: '1.2K+', earnings: '$3.2K/mo' },
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Customer',
    company: 'Regular User',
    avatar: '/placeholder.svg?height=60&width=60&text=ER',
    rating: 5,
    text: 'Fast, reliable, and the food always arrives hot! The tracking feature is amazing - I know exactly when my order will arrive.',
    stats: { orders: '150+', saved: '$200+' },
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Cafe Manager',
    company: 'Urban Coffee Co.',
    avatar: '/placeholder.svg?height=60&width=60&text=DK',
    rating: 5,
    text: 'Integration was seamless and we started getting orders within hours. The analytics dashboard helps us understand our customers better.',
    stats: { orders: '800+', growth: '250%' },
    companyLogo: '/placeholder.svg?height=40&width=120&text=Urban+Coffee',
  },
  {
    id: 5,
    name: 'Lisa Thompson',
    role: 'Food Blogger',
    company: 'Foodie Adventures',
    avatar: '/placeholder.svg?height=60&width=60&text=LT',
    rating: 5,
    text: "I've tried every delivery platform, and DeliveryApp consistently delivers the best experience. The variety of restaurants is incredible!",
    stats: { reviews: '500+', followers: '25K+' },
  },
  {
    id: 6,
    name: 'Ahmed Hassan',
    role: 'Chain Owner',
    company: "Hassan's Pizza (5 locations)",
    avatar: '/placeholder.svg?height=60&width=60&text=AH',
    rating: 5,
    text: 'Managing multiple locations through one platform is a game-changer. The multi-store dashboard and unified reporting save us countless hours.',
    stats: { locations: '5', orders: '10K+' },
    companyLogo: "/placeholder.svg?height=40&width=120&text=Hassan's+Pizza",
  },
]

const stats = [
  { label: 'Happy Customers', value: '50K+', icon: Users },
  { label: 'Orders Delivered', value: '2M+', icon: TrendingUp },
  { label: 'Partner Restaurants', value: '1.5K+', icon: Star },
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const featuredTestimonial = testimonials.find((t) => t.featured)
  const regularTestimonials = testimonials.filter((t) => !t.featured)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % regularTestimonials.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, regularTestimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % regularTestimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + regularTestimonials.length) % regularTestimonials.length,
    )
    setIsAutoPlaying(false)
  }

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
      />
    ))
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative py-16 md:py-24 bg-gradient-to-br from-gray-50 to-blue-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100&text=pattern')] opacity-5"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our{' '}
            <span className="relative">
              <span className="relative z-10 text-blue-600">Community</span>
              <div className="absolute bottom-2 left-0 right-0 h-3 bg-blue-200 -rotate-1"></div>
            </span>{' '}
            Says
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers, restaurants, and drivers who
            trust DeliveryApp
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
            >
              <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Featured Testimonial */}
        {featuredTestimonial && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-16 md:mb-20"
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-gray-900" />
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-2">
                    <div className="flex mb-4">
                      {renderStars(featuredTestimonial.rating)}
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-6">
                      &#34;{featuredTestimonial.text}&#34;
                    </blockquote>

                    <div className="flex items-center gap-4">
                      <Avatar className="w-16 h-16 border-4 border-white/20">
                        <AvatarImage
                          src={featuredTestimonial.avatar || '/placeholder.svg'}
                        />
                        <AvatarFallback>
                          {featuredTestimonial.name
                            .split(' ')
                            .map((n) => n[0])
                            .join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-bold text-lg">
                          {featuredTestimonial.name}
                        </div>
                        <div className="text-blue-100">
                          {featuredTestimonial.role}
                        </div>
                        <div className="text-blue-200 text-sm">
                          {featuredTestimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center md:text-right">
                    <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6">
                      <div className="text-sm text-blue-100 mb-2">
                        Success Stats
                      </div>
                      {featuredTestimonial.stats && (
                        <div className="space-y-2">
                          {Object.entries(featuredTestimonial.stats).map(
                            ([key, value]) => (
                              <div key={key} className="flex justify-between">
                                <span className="capitalize text-blue-200">
                                  {key}:
                                </span>
                                <span className="font-bold">{value}</span>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              More Success Stories
            </h3>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {regularTestimonials
                  .slice(currentIndex, currentIndex + 3)
                  .map((testimonial, index) => (
                    <motion.div
                      key={testimonial.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <div className="flex mb-4">
                        {renderStars(testimonial.rating)}
                      </div>

                      <blockquote className="text-gray-700 mb-6 leading-relaxed">
                        &#34;{testimonial.text}&#34;
                      </blockquote>

                      <div className="flex items-center gap-3 mb-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage
                            src={testimonial.avatar || '/placeholder.svg'}
                          />
                          <AvatarFallback>
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-semibold text-gray-900">
                            {testimonial.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {testimonial.role}
                          </div>
                          <div className="text-xs text-gray-500">
                            {testimonial.company}
                          </div>
                        </div>
                      </div>

                      {testimonial.stats && (
                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="text-xs text-gray-500 mb-2">
                            Key Metrics
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            {Object.entries(testimonial.stats).map(
                              ([key, value]) => (
                                <div key={key} className="flex justify-between">
                                  <span className="capitalize text-gray-600">
                                    {key}:
                                  </span>
                                  <span className="font-semibold text-gray-900">
                                    {value}
                                  </span>
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {testimonial.companyLogo && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          {/* <img
                            src={testimonial.companyLogo || '/placeholder.svg'}
                            alt={`${testimonial.company} logo`}
                            className="h-6 opacity-60"
                          /> */}
                        </div>
                      )}
                    </motion.div>
                  ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from(
              { length: Math.ceil(regularTestimonials.length / 3) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setCurrentIndex(i * 3)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === i
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ),
            )}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 md:mt-20"
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-gray-600 mb-6">
              Start your journey with DeliveryApp today and become our next
              success story.
            </p>
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
            >
              Get Started Now
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
