'use client';

import { useState } from 'react'
// import { Button } from './Button';
import { Field, Label, Switch } from '@headlessui/react'
import { SubmitHandler, useForm } from 'react-hook-form';
// import ComboBox from './Combobox';
import { Button } from '@/components/Button'
import { sendGAEventCustom } from "@/utils/Helper";
import axios from 'axios';
import { companyEmailMarketing, titleEmailMarketing } from '@/utils/Constant';

import GrowYourBusinessContent from './contact/GrowYourBusinessContent';
import BeTheHeroContent from './contact/BeTheHeroContent';

type Props = {
  variant: string;
}


type Inputs = {
  full_name: string;
  // company: string;
  email: string;
  // business_category: string;
  contact: string;
  message_inquiry: string;
}

/**
 * Business Categories
 */
const categories = [
  { id: 1, name: 'Clothing and Apparel', category: 'Retail' },
  { id: 2, name: 'Electronics', category: 'Retail' },
  { id: 3, name: 'Furniture and Home Goods', category: 'Retail' },
  { id: 4, name: 'Grocery and Food', category: 'Retail' },
  { id: 5, name: 'Health and Beauty', category: 'Retail' },
  { id: 6, name: 'Books and Stationery', category: 'Retail' },
  { id: 7, name: 'Sports and Outdoors', category: 'Retail' },
  { id: 8, name: 'Toys and Games', category: 'Retail' },
  { id: 9, name: 'Automotive', category: 'Retail' },
  { id: 10, name: 'Pet Supplies', category: 'Retail' },
  { id: 11, name: 'Restaurants', category: 'Food and Beverage' },
  { id: 12, name: 'Cafes', category: 'Food and Beverage' },
  { id: 13, name: 'Food Trucks', category: 'Food and Beverage' },
  { id: 14, name: 'Bakeries', category: 'Food and Beverage' },
  { id: 15, name: 'Bars and Pubs', category: 'Food and Beverage' },
  { id: 16, name: 'Catering Services', category: 'Food and Beverage' },
  { id: 17, name: 'Specialty Food Stores', category: 'Food and Beverage' },
  { id: 18, name: 'Convenience Stores', category: 'Food and Beverage' },
  { id: 19, name: 'Gyms and Fitness Centers', category: 'Health and Wellness' },
  { id: 20, name: 'Spas and Salons', category: 'Health and Wellness' },
  { id: 21, name: 'Medical and Dental Clinics', category: 'Health and Wellness' },
  { id: 22, name: 'Counseling and Therapy', category: 'Health and Wellness' },
  { id: 23, name: 'Laundry and Dry Cleaning', category: 'Personal Services' },
  { id: 24, name: 'Barber Shops and Hair Salons', category: 'Personal Services' },
  { id: 25, name: 'Nail Salons', category: 'Personal Services' },
  { id: 26, name: 'Tailoring and Alterations', category: 'Personal Services' },
  { id: 27, name: 'Legal Services', category: 'Professional Services' },
  { id: 28, name: 'Accounting and Tax Services', category: 'Professional Services' },
  { id: 29, name: 'Consulting Services', category: 'Professional Services' },
  { id: 30, name: 'Real Estate Agencies', category: 'Professional Services' },
  { id: 31, name: 'Cleaning Services', category: 'Home Services' },
  { id: 32, name: 'Plumbing', category: 'Home Services' },
  { id: 33, name: 'Electrical', category: 'Home Services' },
  { id: 34, name: 'Landscaping and Lawn Care', category: 'Home Services' },
  { id: 35, name: 'Pest Control', category: 'Home Services' },
  { id: 36, name: 'Schools and Universities', category: 'Education and Training' },
  { id: 37, name: 'Tutoring Services', category: 'Education and Training' },
  { id: 38, name: 'Vocational Training', category: 'Education and Training' },
  { id: 39, name: 'Driving Schools', category: 'Education and Training' },
  { id: 40, name: 'Travel Agencies', category: 'Travel and Tourism' },
  { id: 41, name: 'Tour Operators', category: 'Travel and Tourism' },
  { id: 42, name: 'Hotels and Lodging', category: 'Travel and Tourism' },
  { id: 43, name: 'Car Rentals', category: 'Travel and Tourism' },
  { id: 44, name: 'Movie Theaters', category: 'Entertainment and Recreation' },
  { id: 45, name: 'Amusement Parks', category: 'Entertainment and Recreation' },
  { id: 46, name: 'Arcades', category: 'Entertainment and Recreation' },
  { id: 47, name: 'Event Planning', category: 'Entertainment and Recreation' },
  { id: 48, name: 'Music and Dance Studios', category: 'Entertainment and Recreation' },
  { id: 49, name: 'Art Galleries', category: 'Entertainment and Recreation' },
  { id: 50, name: 'IT Services', category: 'Technology and Communications' },
  { id: 51, name: 'Telecommunications', category: 'Technology and Communications' },
  { id: 52, name: 'Software Development', category: 'Technology and Communications' },
  { id: 53, name: 'Web Design and Development', category: 'Technology and Communications' },
  { id: 54, name: 'Electronics Repair', category: 'Technology and Communications' },
  { id: 55, name: 'Industrial Manufacturing', category: 'Manufacturing and Wholesale' },
  { id: 56, name: 'Wholesale Distribution', category: 'Manufacturing and Wholesale' },
  { id: 57, name: 'Agricultural Products', category: 'Manufacturing and Wholesale' },
  { id: 58, name: 'Food Processing', category: 'Manufacturing and Wholesale' },
  { id: 59, name: 'Banks and Credit Unions', category: 'Financial Services' },
  { id: 60, name: 'Insurance Agencies', category: 'Financial Services' },
  { id: 61, name: 'Investment Firms', category: 'Financial Services' },
  { id: 62, name: 'Mortgage Brokers', category: 'Financial Services' },
  { id: 63, name: 'Construction Companies', category: 'Construction and Real Estate' },
  { id: 64, name: 'Real Estate Development', category: 'Construction and Real Estate' },
  { id: 65, name: 'Property Management', category: 'Construction and Real Estate' },
  { id: 66, name: 'Architecture and Design', category: 'Construction and Real Estate' },
  { id: 67, name: 'Shipping and Freight', category: 'Transportation and Logistics' },
  { id: 68, name: 'Courier Services', category: 'Transportation and Logistics' },
  { id: 69, name: 'Public Transportation', category: 'Transportation and Logistics' },
  { id: 70, name: 'Vehicle Rentals', category: 'Transportation and Logistics'},
]


function classNames(...classes:any) {
  return classes.filter(Boolean).join(' ')
}

export default function ContactForm({variant}:Props) {

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<Inputs>()

  const [agreed, setAgreed] = useState(false)
  // const watchAllFields = watch();

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /**
   * on Submit
   */
  const onSubmit: SubmitHandler<Inputs> = async (data:any) => {
    // console.log(data)
    // submit email
    setLoading(true);

    // HTML TEMPLATE
    const htmlText:string = `
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${titleEmailMarketing}</title>
      </head>
      <body>
          <h2>Merchant Information</h2>
          <p><strong>Name:</strong><br> ${data?.full_name}</p>
          <p><strong>Email:</strong><br> ${data?.email}</p>
          <p><strong>Contact:</strong><br> ${data?.contact}</p>
          <p><strong>Message:</strong><br> ${data?.message_inquiry}</p>
          <p><strong>Variant:</strong><br> ${variant}</p>
      </body>
      </html>    
    `

    const payload:any = {
      to: companyEmailMarketing,
      subject: titleEmailMarketing,
      text: titleEmailMarketing,
      html: htmlText,
      from: `${data?.first_name} ${data?.last_name}`
    };

    console.log(payload);

    // // tracking for submit button
    // sendGAEventCustom({ 
    //   action: 'click', 
    //   category: 'Button',
    //   label: `Submit`,
    //   value: `Submit` 
    // }) 

    // tracking for business category selection 
    sendGAEventCustom({
      action: 'selection',
      category: 'Combobox',
      label: data?.business_category,
      value: data?.business_category
    });    
  
    try {
      const response = await axios.post('/api/send-email', payload);
      console.log('Email sent:', response.data);
      if(response.data?.success){
        setLoading(false);
        setSubmitted(true);

        // tracking for successful send
        sendGAEventCustom({ 
          action: 'submission', 
          category: 'Form',
          label: 'Email Success',
          value: 'Email Success' 
        })        
      }
      return response.data;
    } catch (error) {
      setLoading(false);
      console.error('Error sending email:', error);
      throw error;
    }
  }

  return (
    <div className="px-6 py-6 sm:py-12 lg:px-8 relative">

      { 
      submitted ? 
      <div className="relative mx-auto max-w-2xl text-center my-14 sm:p-6">
        <h1 className='text-3xl font-display font-bold text-shamrock'>
          Thank you for signing up to our loyalty program platform! 
        </h1>
        <p className='text-lg my-6 leading-loose'>
          We&#39;re excited to have you on board. 
          <br></br>
          Stay tuned for more updates, and thank you for your patience and support.
        </p>
        <Button 
            href="/" 
            color="green" 
            className="mt-10"
            onClick={()=>sendGAEventCustom({ 
              action: 'click', 
              category: 'Button',
              label: `Go back home`,
              value: `Go back home` 
            })}
            >
            Go back home
          </Button>
      </div>
      :
      <>
      {variant === "A" ?
      <GrowYourBusinessContent />
      :
      <BeTheHeroContent />
      }
      <form 
        className="relative mx-auto my-16 max-w-4xl "
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

          <div className="sm:col-span-2">
            <label htmlFor="full_name" className="block text-sm font-medium  text-gray-900">
              Full Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="full_name"
                placeholder='Your name'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
                {...register("full_name", 
                    { required: true }
                )}
              />
              {errors.full_name && 
                <span className='text-red-500 text-sm'>
                  Please provide your full name.
                </span>
              }
            </div>
          </div>

          {/* <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-medium  text-gray-900">
              Company <span className='text-gray-400'>(optional)</span>
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                id="company"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
                {...register("company", 
                  // { required: true }
                )}
              />
            </div>
          </div> */}

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-medium  text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                id="email"
                autoComplete="email"
                placeholder='Your email'
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
                {...register("email", 
                  { required: true }
                )}
              />
              {errors.email && 
                <span className='text-red-500 text-sm'>
                  Please provide your email.
                </span>
              } 
            </div>
          </div>
          
          {/* <div className="sm:col-span-2">
            <label htmlFor="industry" className="block text-sm font-medium  text-gray-900">
              Business Category
            </label>
            <div className="mt-2.5">
              <ComboBox 
                fieldId='business_category'
                options={categories} 
                setOption={(option:any)=>{
                  console.log("option", option);
                }} 
                register={register}
                />
                {errors.business_category && 
                <span className='text-red-500 text-sm'>
                  Please select your business category.
                </span>
              }
            </div>
          </div>   */}

          <div className="sm:col-span-2">
            <label htmlFor="contact" className="block text-sm font-medium  text-gray-900">
              Mobile/Contact number
            </label>
            <div className="relative mt-2.5">
              <input
                type="tel"
                id="contact"
                autoComplete="tel"
                placeholder='Your mobile/contact number'
                maxLength={11}
                {...register("contact", 
                  { required: true }
                )}                
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
              />
              {errors.contact && 
                <span className='text-red-500 text-sm'>
                  Please provide your contact information.
                </span>
              }               
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message_inquiry" className="block text-sm font-medium  text-gray-900">
              Send us your message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message_inquiry"
                rows={4}
                placeholder='How can we help?'
                {...register("message_inquiry")}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-shamrock sm:text-sm sm:"
                defaultValue={''}
              />
            </div>
          </div>

          <div className='flex flex-row items-center gap-2'>
              <Field as="div" className="flex gap-x-4 sm:col-span-2">
                <div className="flex h-6 items-center">
                  <Switch
                    checked={agreed}
                    onChange={setAgreed}
                    className={classNames(
                      agreed ? 'bg-shamrock' : 'bg-gray-200',
                      'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-shamrock'
                    )}
                  >
                    <span className="sr-only">Agree to policies</span>
                    <span
                      aria-hidden="true"
                      className={classNames(
                        agreed ? 'translate-x-3.5' : 'translate-x-0',
                        'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                      )}
                    />
                  </Switch>
                </div>
              </Field>
              <p className="text-sm  text-gray-600">
                  By selecting this, you agree to our{' '}
                  <a href="/privacy-policy" target='_blank' className="font-medium text-shamrock">
                    privacy&nbsp;policy
                  </a>
                  .
              </p>       
          </div>   
        </div>
        <div className="mt-10">
          <Button 
            type='submit' 
            color="green" 
            className={`
              ${agreed ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} 
              ${!loading ? 'opacity-100 pointer-events-auto' : 'opacity-50 pointer-events-none'} 
              w-full 
            `}>
              <span>
                { loading ? 'Submitting...' : 'Submit' } 
              </span>
            </Button>
        </div>
      </form>
      </>
      }
    </div>
  )
}
