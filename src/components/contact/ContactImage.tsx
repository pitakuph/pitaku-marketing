'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ContactImage() {
  return (
    <motion.section
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <Image
        src={`/images/pitaku-contact.png`}
        width={601}
        height={482}
        alt="pitaku-contact"
        className="w-full h-full object-contain object-top"
      />
    </motion.section>
  )
}
