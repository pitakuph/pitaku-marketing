import { motion } from "framer-motion";
// import Image from 'next/image'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { AuroraBackground } from '@/utils/aceternity/aurora-background'


export function CallToAction() {
  return (
    <section
      id="get-started-today"
      className="relative overflow-hidden bg-shamrock py-36 bg-[url('/images/wall2.jpg')] bg-cover bg-center"
    >

          {/* <AuroraBackground>
            <motion.div
              initial={{ opacity: 0.0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="relative flex flex-col gap-4 items-center justify-center px-4"
            >           */}

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center bg-white p-14 rounded-xl shadow-black shadow-2xl border-gray-200">
          <h2 className="font-display text-3xl font-bold  text-shamrock sm:text-4xl">
            Start today
          </h2>
          <p className="mt-4 text-2xl  text-gray-500">
            {/* Tap into the power of customer loyalty and turn your business into a customer-focused success story. Join us in revolutionizing retention and lifetime value starting now! */}
            {/* Let&#39;s grow together with a loyalty program that truly rewards your customers! */}
            Reward Your Customers, Grow Your Business
          </p>
          <Button href="/contact" color="green" className="mt-10">
            Get early access
          </Button>
        </div>
      </Container>

      {/* </motion.div>
      </AuroraBackground>       */}
    </section>
  )
}
