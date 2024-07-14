import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import Article from "@/components/blog/Article"
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Customer Lifetime',
  description:'Pitaku maximizing customer lifetime for your business using segmentation and targeting',
  openGraph: {
    title: 'Customer Lifetime - Pitaku PH',
    description: 'Pitaku maximizing customer lifetime for your business using segmentation and targeting',
    images: [
      {
        url: '/articles/maximizing-customer-lifetime-for-your-small-business-using-segmentation-and-targeting.jpg',
        width: 1600,
        height: 914,
        alt: 'maximizing-customer-lifetime-for-your-small-business-using-segmentation-and-targeting',
      },
    ],
    siteName: 'Pitaku PH',
  },  
}


export default function CustomerLifetime() {
  return (
    <>
        <div className="w-full h-auto">
          <Header />
          <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 bg-white/75 rounded-2xl border-t border-gray-100">
            <Article articleId={1} />
          </section>
          <CallToAction />
          <Footer />
        </div>
    </>
  )
}
