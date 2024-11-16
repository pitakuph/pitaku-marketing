'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { CallToAction } from "@/components/CallToAction"
import OtherArticles from '@/components/blog/OtherArticles';
import axios from 'axios';
import Head from 'next/head';

import styles from './/article.module.css';

export default function BlogDetail() {

 const params = useParams();
 console.log(params);

 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);
 const [post, setPost] = useState<any>(null);

 const url=`${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/v1/posts/${params?.slug}`
 console.log(url);

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true);
          try {
              const response = await axios.get(url);
              console.log(response);
              setLoading(false);    
              setPost(response); // Assuming the API response has { data: [...] }
              setError(null);
          } catch (error:any) {
              console.log(error);
              setLoading(false);
              setError(error.response?.data?.error || 'Oops! Something went wrong.');
          } finally {
              setLoading(false);
          }
      };
    fetchData();
  }, []);   

  if (loading) {
    return <></>;
  }

  if (error) {
    return <p className="my-10">Error: {error}</p>;
  }

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
  )
}
