import Head from 'next/head';
import type { Metadata } from 'next'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import MerchantCard from '@/components/merchants/MerchantCard';
import RewardCard from '@/components/merchants/RewardCard';

type PostProps = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: PostProps,
): Promise<Metadata> {
  // const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/merchants/${params.slug}`);
  // const { title, description, tags, createdBy } = await res.json();
  // return {
  //   title,
  //   description,
  //   keywords: tags.split(',').filter(Boolean),
  //   authors: [ { name: createdBy } ]
  // }
  return {};
}

export default async function Page({ params }: PostProps) {
  // const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/merchants/${params.slug}`);
  // const item = await res.json();

  //  hard coded data for now please delete if integrated
  const item = {
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
    "logo": null,
    "rewards": [
    {
            "id": 16,
            "status": "INACTIVE",
            "merchantId": 7,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/fullmug_pitaku_it8j26.png",
            "name": "Free Tissue",
            "description": null,
            "requiredPoints": 10.0,
            "cap": null,
            "notes": null,
            "startDate": "2024-08-12T14:00:00Z",
            "endDate": "2024-08-31T13:59:59.999Z",
            "image": null
        },
        {
            "id": 15,
            "status": "ACTIVE",
            "merchantId": 9,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/totbag_bttzvq.jpg",
            "name": "Free Tote Bag",
            "description": "Free Tote Bag",
            "requiredPoints": 10.0,
            "cap": null,
            "notes": "Free Tote Bag",
            "startDate": "2024-08-12T16:00:00Z",
            "endDate": "2024-12-30T15:59:59.999Z",
            "image": null
        },
        {
            "id": 14,
            "status": "ACTIVE",
            "merchantId": 9,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/flask_oh0kag.jpg",
            "name": "Free Tumbler Flask",
            "description": "Free Tumbler Flask",
            "requiredPoints": 600.0,
            "cap": null,
            "notes": "Free Tumbler Flask",
            "startDate": "2024-08-12T16:00:00Z",
            "endDate": "2024-09-30T15:59:59.999Z",
            "image": null
        },
        {
            "id": 13,
            "status": "INACTIVE",
            "merchantId": 11,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/Blank_school_label_8x3cm_wokf8r.png",
            "name": "Reward13",
            "description": null,
            "requiredPoints": 10.0,
            "cap": null,
            "notes": null,
            "startDate": "2024-08-12T14:00:00Z",
            "endDate": "2024-08-31T13:59:59.999Z",
            "image": null
        },
        {
            "id": 12,
            "status": "INACTIVE",
            "merchantId": 9,
            "imageUrl": null,
            "name": "Free Reward 5",
            "description": "Free Reward 5",
            "requiredPoints": 500.0,
            "cap": null,
            "notes": "Free Reward 5",
            "startDate": "2024-08-03T16:00:00Z",
            "endDate": "2024-08-31T15:59:59.999Z",
            "image": null
        },
        {
            "id": 11,
            "status": "INACTIVE",
            "merchantId": 9,
            "imageUrl": null,
            "name": "Free Reward 4",
            "description": "Free Reward 4",
            "requiredPoints": 400.0,
            "cap": null,
            "notes": "Free Reward 4",
            "startDate": "2024-08-02T16:00:00Z",
            "endDate": "2024-08-31T15:59:59.999Z",
            "image": null
        },
        {
            "id": 10,
            "status": "INACTIVE",
            "merchantId": 9,
            "imageUrl": null,
            "name": "Free Reward 3",
            "description": "Free Reward 3",
            "requiredPoints": 300.0,
            "cap": null,
            "notes": "Free Reward 3",
            "startDate": "2024-08-02T16:00:00Z",
            "endDate": "2024-08-31T15:59:59.999Z",
            "image": null
        },
        {
            "id": 9,
            "status": "ACTIVE",
            "merchantId": 9,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/planner_awfsxq.jpg",
            "name": "Free Planner",
            "description": "Free Planner",
            "requiredPoints": 20.0,
            "cap": null,
            "notes": "Free Planner",
            "startDate": "2024-08-03T16:00:00Z",
            "endDate": "2024-09-30T15:59:59.999Z",
            "image": null
        },
        {
            "id": 8,
            "status": "ACTIVE",
            "merchantId": 9,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/coffee_vep5fy.jpg",
            "name": "Free Coffee",
            "description": "Free Coffee",
            "requiredPoints": 10.0,
            "cap": null,
            "notes": "Free Coffee",
            "startDate": "2024-08-03T16:00:00Z",
            "endDate": "2024-09-30T15:59:59.999Z",
            "image": null
        },
        {
            "id": 7,
            "status": "ACTIVE",
            "merchantId": 6,
            "imageUrl": "http://res.cloudinary.com/dwldvi7ox/image/upload/c_scale,h_500/f_auto/v1/rewards/logo-new-small_abzlua.png",
            "name": "Free wash and dry",
            "description": null,
            "requiredPoints": 90.0,
            "cap": null,
            "notes": null,
            "startDate": "2024-07-19T20:00:00Z",
            "endDate": "2024-12-31T19:59:59.999Z",
            "image": null
        }      
    ]
  }

  return (
    <div>
      <Head>
        <title>{item?.name}</title>
        <meta name="description" content={item?.email} key="desc" />
      </Head>
      <div className="w-full h-auto">
        <Header />
        <div className="max-w-7xl mx-auto p-6 sm:px-24">
          <MerchantCard merchant={item} isPage={true} />
        </div>
        <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {item.rewards?.map((item: any) => {
            return(
              <RewardCard key={item.email} reward={item} />
            )
          })}
        </section>        
        {/* <CallToAction /> */}
        <Footer />
      </div>
    </div>
  );
}
