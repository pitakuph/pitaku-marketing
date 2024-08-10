import Link from 'next/link'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"

import styles from './../../components/blog/article.module.css';

export default async function Page() {
  const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/posts/published`);
  const { items } = await res.json();
  return (
    <div>
      <div className="w-full h-auto">
        <Header />
        <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 bg-white/75 rounded-2xl border-t border-gray-100">
        {items.map((post: any) => {
          return(
            <div key={post.id} className="w-full">
              <article className={`${styles.container}`}>
                <Link href={`/blogs/${post.slug}`}><h1>{post?.title}</h1></Link>
                <section>By: {post?.createdBy}</section>
                <section dangerouslySetInnerHTML={{ __html: post?.summary }} ></section>
              </article>
            </div>
          )
        })}
        </section>
        {/* <CallToAction /> */}
        <Footer />
      </div>
    </div>
  );
}
