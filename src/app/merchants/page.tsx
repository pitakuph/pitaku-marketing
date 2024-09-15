export const dynamic = 'force-dynamic';

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { type Metadata } from 'next'

import MerchantCard from '@/components/merchants/MerchantCard';

export const metadata: Metadata = {
  title: 'Pitaku Partner Merchants',
  description: `Join Pitaku's Partner Merchants and boost your customer loyalty with a no-card rewards program`,
}

export default async function Page() {
  // const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/merchants?order=desc&pageNumber=0&pageSize=50&sort=id`);
  // const { items } = await res.json();
  
  //  hard coded data for now please delete if integrated
  const items = [
          {
              "id": 14,
              "status": "ACTIVE",
              "activeSubscription": "FREE_TRIAL",
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": null,
              "name": "TestMerchant1",
              "email": "neldaarvesu+24@gmail.com",
              "mobile": "+639204567898",
              "phone": null,
              "basePoint": 500.0,
              "currency": "PHP",
              "address": "SM Makati",
              "logo": null
          },
          {
              "id": 13,
              "status": "ACTIVE",
              "activeSubscription": "FREE_TRIAL",
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": null,
              "name": "TestMerchant",
              "email": "neldaarvesu+23@gmail.com",
              "mobile": "+639205277063",
              "phone": null,
              "basePoint": 50.0,
              "currency": "PHP",
              "address": "Cavitex",
              "logo": null
          },
          {
              "id": 12,
              "status": "ACTIVE",
              "activeSubscription": "FREE_TRIAL",
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/var-x-apparel_gmciwg.png",
              "name": "VarX Apparel",
              "email": "varxclothing@gmail.com",
              "mobile": "+639295043363",
              "phone": "09295043363",
              "basePoint": 100.0,
              "currency": "PHP",
              "address": "Las Pinas",
              "logo": null
          },
          {
              "id": 11,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": null,
              "name": "Merchant13",
              "email": "neldaarvesu+13@gmail.com",
              "mobile": "+639205277062",
              "phone": null,
              "basePoint": 50.0,
              "currency": "PHP",
              "address": "Sample Address",
              "logo": null
          },
          {
              "id": 10,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/mukako_dlt1tv.png",
              "name": "Dan Perez Business",
              "email": "danrudolf.perez@gmail.com",
              "mobile": "+639295043363",
              "phone": null,
              "basePoint": 100.0,
              "currency": "PHP",
              "address": "Las Pinas",
              "logo": null
          },
          {
              "id": 9,
              "status": "ACTIVE",
              "activeSubscription": "PREMIUM",
              "activeRewards": 4,
              "numOfCustomers": 6,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/coffee-logo-design-template-coffee-logo-for-coffee-shop-and-any-business-related-to-coffee-vector_cet2zp.jpg",
              "name": "My Coffee Business",
              "email": "dan2@merchant.com",
              "mobile": "+639123456789",
              "phone": null,
              "basePoint": 100.0,
              "currency": "PHP",
              "address": "Las Pinas",
              "logo": null
          },
          {
              "id": 8,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": null,
              "name": "Seriously Punny",
              "email": "seriouslypunny.printing@gmail.com",
              "mobile": "+639663552391",
              "phone": null,
              "basePoint": 60.0,
              "currency": "PHP",
              "address": "Ridgecrest Subd",
              "logo": null
          },
          {
              "id": 7,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 2,
              "logoUrl": null,
              "name": "Cerritos Sari-Sari",
              "email": "neldadichoso@gmail.com",
              "mobile": "+639158865327",
              "phone": null,
              "basePoint": 50.0,
              "currency": "PHP",
              "address": "Blk6A Lot 6 Albacete St., Cerritos Heights Subd",
              "logo": null
          },
          {
              "id": 6,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 1,
              "numOfCustomers": 3,
              "logoUrl": null,
              "name": "Bubblewash",
              "email": "asiasat567@yahoo.com",
              "mobile": "+639289018408",
              "phone": null,
              "basePoint": 10.0,
              "currency": "PHP",
              "address": "San Vicente, National Road, Orion Bataan",
              "logo": null
          },
          {
              "id": 5,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 0,
              "logoUrl": null,
              "name": "Merchant 1",
              "email": "admin@merchant1.com",
              "mobile": "+639205273457",
              "phone": null,
              "basePoint": 50.0,
              "currency": "PHP",
              "address": "SM Manila",
              "logo": null
          },
          {
              "id": 4,
              "status": "ACTIVE",
              "activeSubscription": "PREMIUM",
              "activeRewards": 0,
              "numOfCustomers": 1,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/bcb-main_ots5bl.jpg",
              "name": "Bataan Cocker's Club",
              "email": "arcazerlan@gmail.com",
              "mobile": "+639178282596",
              "phone": null,
              "basePoint": 200.0,
              "currency": "PHP",
              "address": "Orion Bataan",
              "logo": null
          },
          {
              "id": 3,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 1,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/breadtalk_logo_myanmarplaza_mmtfeq.jpg",
              "name": "Breadtalk",
              "email": "sales@breadtalk.com",
              "mobile": "+639205273456",
              "phone": "0287654321",
              "basePoint": 100.0,
              "currency": "PHP",
              "address": "Evia Lifestyle Center",
              "logo": null
          },
          {
              "id": 2,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 2,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/1000_F_249186585_RF2r5vNajTMztOaFGVliqsyWoAxK4sYM_jaw6lf.jpg",
              "name": "Dan 1 Merchant",
              "email": "dan1@email.com",
              "mobile": "+639123456789",
              "phone": null,
              "basePoint": 10.0,
              "currency": "PHP",
              "address": "Las Pinas",
              "logo": null
          },
          {
              "id": 1,
              "status": "ACTIVE",
              "activeSubscription": null,
              "activeRewards": 0,
              "numOfCustomers": 2,
              "logoUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_300/f_auto/v1/logos/patatas_s6lng3.jpg",
              "name": "Potato Corner SM Megamall",
              "email": "admin@potatocorner.com",
              "mobile": "+639206754323",
              "phone": null,
              "basePoint": 50.0,
              "currency": "PHP",
              "address": "SM Megamall, Ortigas",
              "logo": null
          }
  ]

  return (
    <div>
      <div className="w-full h-auto">
        <Header />
        <h1 className='text-2xl sm:text-5xl font-semibold tracking-tight text-center text-shamrock'>
          Pitaku Partner Merchants
        </h1>
        <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item: any) => {
            return(
              <MerchantCard key={item.email} merchant={item} isPage={false} />
            )
          })}
        </section>
        <Footer />
      </div>
    </div>
  );
}
