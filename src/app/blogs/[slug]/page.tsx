import Head from 'next/head';
import type { Metadata } from 'next'

import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"

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

export default async function Page({ params }: PostProps) {
  const res = await fetch(`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/posts/${params.slug}`);
  const post = await res.json();
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
              <section>By: {post?.createdBy}</section>
              <section dangerouslySetInnerHTML={{ __html: post.content }} ></section>
            </article>
          </div>
        </section>
        <CallToAction />
        <Footer />
      </div>
    </div>
  );
}
