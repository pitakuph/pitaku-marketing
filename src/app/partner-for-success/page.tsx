import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import Article from "@/components/blog/Article"
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Partner For Success',
  description:
    'Having Pitaku as a great business tool and a partner for success',
}

export default function PartnerForSuccess() {
  return (
    <>
        <div className="w-full h-auto">
          <Header />
          <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 bg-white/75 rounded-2xl border-t border-gray-100">
            <Article articleId={3} />
          </section>
          <CallToAction />
          <Footer />
        </div>
    </>
  )
}
