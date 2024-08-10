export const dynamic = 'force-dynamic';

import Link from 'next/link'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import { type Metadata } from 'next'

import styles from './../../components/blog/article.module.css';

export const metadata: Metadata = {
  title: 'Pitaku Blog',
  description: 'Discover insights and tips on how our customer loyalty platform helps small businesses retain loyal customers with meaningful, card-free rewards that drive engagement and sustainability.',
}

export default async function Page() {
  const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/posts/published`);
  const { items } = await res.json();
  return (
    <div>
      <div className="w-full h-auto">
        <Header />
        <h1 className='text-2xl sm:text-5xl font-semibold tracking-tight text-center text-shamrock'>
          Blog
        </h1>
        <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((post: any) => {
          return(
            <Link key={post.id} href={`/blogs/${post.slug}`}>
            <div  
              className={`${styles.cards}`}>
              <article>
                <h1>{post?.title}</h1>
                {/* <section className='text-sm text-gray-500'>By: {post?.createdBy}</section> */}
                <section className='mt-2' dangerouslySetInnerHTML={{ __html: post?.summary }} ></section>
              </article>
            </div>
            </Link>
          )
        })}
        </section>
        {/* <CallToAction /> */}
        <Footer />
      </div>
    </div>
  );
}
