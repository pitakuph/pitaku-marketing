'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Building2, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react'

const footerLinks = {
  company: [
    { name: 'Contact', href: '/contact' },
    { name: 'Security', href: '/security' },
    { name: 'About Us', href: '/about' },
    { name: 'Careers', href: '/careers' },
  ],
  whoWeHelp: [
    { name: 'Customers', href: '/customers' },
    { name: 'Merchants', href: '/merchants' },
    { name: 'Drivers', href: '/drivers' },
    { name: 'Partners', href: '/partners' },
  ],
  resources: [
    { name: 'Help Center', href: '/help' },
    { name: 'Blog', href: '/blog' },
    { name: 'API Docs', href: '/api' },
    { name: 'Status', href: '/status' },
  ],
}

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Instagram', href: '#', icon: Instagram },
]

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Privacy Collection Notice', href: '/privacy-collection' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white"
    >
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12"
        >
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                <Building2 className="h-5 w-5 text-white" />
              </div>
              <span className="text-2xl font-bold">DeliveryApp</span>
            </Link>
            <p className="text-gray-300 leading-relaxed max-w-md">
              Join the revolution and see how easy DeliveryApp makes food
              delivery and business management.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Who We Help Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Who we help</h3>
            <ul className="space-y-3">
              {footerLinks.whoWeHelp.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us / Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow us</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="h-4 w-4" />
                  {social.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          {/* Copyright */}
          <div className="text-sm text-gray-400">
            <p>
              Copyright © {currentYear} DeliveryApp Technology | ABN 99 649 575
              315 | Australian Business Licence 536443
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap gap-1 text-sm">
            {legalLinks.map((link, index) => (
              <span key={link.name} className="flex items-center">
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </Link>
                {index < legalLinks.length - 1 && (
                  <span className="text-gray-600 mx-2">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section (Optional Enhancement) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gray-800 border-t border-gray-700"
      >
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Stay updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest news and updates from DeliveryApp
              </p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-64 px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-200 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.footer>
  )
}
