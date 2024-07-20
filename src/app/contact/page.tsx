import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get early access',
  description: 'Get early access and enjoy the Pitaku loyalty program free for one month!',
  openGraph: {
    title: 'Get early access - Pitaku PH',
    description: 'Get early access and enjoy the Pitaku loyalty program free for one month!',
    images: [
      {
        url: '/images/wall4.jpg',
        width: 1600,
        height: 914,
        alt: 'get-early-access-pitaku-ph',
      },
    ],
    siteName: 'Pitaku PH',
  },  
}

export default function Contact() {

  return (
    <>
        <Header />
        <ContactForm />
        <Footer />
    </>
  )
}
