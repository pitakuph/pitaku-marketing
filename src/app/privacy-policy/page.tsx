// import { Header } from "@/components/Header"
// import { Footer } from "@/components/Footer"
// import { CallToAction } from "@/components/CallToAction"
import { companyName } from "@/utils/Constant"
import { type Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'This Privacy Policy outlines how we collect, use, and protect the information you provide when signing up for our loyalty program SaaS product',
}

export default function PrivacyPolicy() {
  return (
    <>
        <div className="w-full h-auto min-h-screen bg-white">
            {/* <Header /> */}
            <div className=" max-w-6xl mx-auto py-10 overflow-y-auto">
                <h1 className="text-2xl text-shamrock font-display font-semibold my-2">Privacy Policy</h1>
                {/* <p className="my-4"><strong>Effective Date:</strong> [Date]</p> */}

                <h2 className="text-lg text-shamrock font-medium my-1">1. Introduction</h2>
                <p className="my-4">
                    Welcome to {companyName} (“we”, “our”, “us”). We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner. This Privacy Policy outlines how we collect, use, and protect the information you provide when signing up for our loyalty program SaaS product.
                </p>

                <h2 className="text-lg text-shamrock font-medium my-1">2. Information We Collect</h2>
                <p className="my-4">When you sign up for our loyalty program, we collect the following information:</p>
                <ul className="my-4">
                    <li>First Name</li>
                    <li>Last Name</li>
                    <li>Email Address</li>
                    <li>Company Name (optional)</li>
                    <li>Business Category</li>
                    {/* <li>Contact Number</li> */}
                </ul>

                <h2 className="text-lg text-shamrock font-medium my-1">3. How We Use Your Information</h2>
                <p className="my-4">The information we collect is used to:</p>
                <ul className="my-4">
                    <li>Provide and manage our loyalty program services</li>
                    <li>Communicate with you about your account and the services we offer</li>
                    <li>Improve our services and customer experience</li>
                    <li>Ensure the security of our services</li>
                </ul>

                <h2 className="text-lg text-shamrock font-medium my-1">4. Information Sharing and Disclosure</h2>
                <p className="my-4">
                    We do not sell, trade, or otherwise transfer your personal information to outside parties without your consent, except to trusted third parties who assist us in operating our website, conducting our business, or servicing you, as long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law, enforce our site policies, or protect ours or others&#39; rights, property, or safety.
                </p>

                <h2 className="text-lg text-shamrock font-medium my-1">5. Data Security</h2>
                <p className="my-4">
                    We implement a variety of security measures to ensure your personal information is protected. This includes secure servers, encryption, and access controls to safeguard your data from unauthorized access or disclosure.
                </p>
            </div>
          {/* <Footer /> */}
        </div>
    </>
  )
}
