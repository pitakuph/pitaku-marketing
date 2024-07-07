import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import ContactForm from "@/components/ContactForm"
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Get early access',
  description:
    'Get early access and enjoy Pitaku platform for free for one month!',
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
