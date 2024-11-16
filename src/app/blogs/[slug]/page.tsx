import Head from 'next/head';
import type { Metadata } from 'next'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import OtherArticles from '@/components/blog/OtherArticles';
import { getBlog } from '@/server/blog/blog';

import styles from '../../../components/blog/article.module.css';

type PostProps = {
  params: { slug: string }
}

export async function generateMetadata(
  { params }: PostProps,
): Promise<Metadata> {
  const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/posts/${params.slug}`);
  const { title, description, tags, createdBy } = await res.json();
  return {
    title,
    description,
    keywords: tags.split(',').filter(Boolean),
    authors: [ { name: createdBy } ]
  }
}

async function BlogLoader(slug: string) {
  const blogpost = await getBlog(slug);
  return blogpost;
}

export default async function Page({ params }: PostProps) {
  const [ 
    post,
  ] = await Promise.all([
    BlogLoader(params?.slug),
  ]);

  return (
    <div>
      <Head>
        <title>{post?.title}</title>
        <meta name="description" content={post?.description} key="desc" />
      </Head>
      <div className="w-full h-auto">
        <Header />
        <section className="max-w-7xl mx-auto mb-20 p-6 sm:px-24 sm:py-12 bg-white/75 rounded-2xl border-t border-gray-100">
          <div key={post.id} className="w-full">
            <article className={`${styles.container}`}>
              <h1>{post?.title}</h1>
              {/* <section className='text-sm text-gray-500'>By: {post?.createdBy}</section> */}
              <section className='mt-2' dangerouslySetInnerHTML={{ __html: post.content }} ></section>
            </article>
          </div>
          <OtherArticles currentID={post?.id} />
        </section>
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
