import Link from 'next/link'
import styles from './article.module.css'

type Props = {
  currentID: any
}
export default async function OtherArticles({ currentID }: Props) {
  const res = await fetch(
    `${process.env.API_BASE_URL || 'https://api.pitaku.ph'}/posts/published`,
  )
  const { items } = await res.json()

  let filteredItems
  if (currentID) {
    const data = items?.filter(
      (item: any) => item.id?.toString() !== currentID?.toString(),
    )
    filteredItems = data
  }

  const getRandomArticles = (dataArray: any, count: number) => {
    if (count > dataArray?.length) {
      throw new Error('Count cannot be greater than the length of the array')
    }
    const randomIndex = Math.floor(
      Math.random() * (dataArray.length - count + 1),
    )
    return dataArray.slice(randomIndex, randomIndex + count)
  }

  const randomArticles = getRandomArticles(filteredItems, 2)

  return (
    <div className="w-full max-w-6xl py-10">
      <div className="mx-auto w-full">
        <div className="mx-auto">
          <h2 className="text-xl font-bold text-shamrock sm:text-2xl">
            Read More Articles
          </h2>
          <div className="mt-5 flex flex-col sm:flex-row justify-between gap-6">
            {randomArticles?.map((post: any) => (
              <Link
                key={post.id}
                href={`/blogs/${post.slug}`}
                className="group relative isolate flex flex-col gap-6 w-full"
              >
                <div className={`${styles.smallcards}`}>
                  <article>
                    <h1>{post?.title}</h1>
                    <section
                      className="mt-2"
                      dangerouslySetInnerHTML={{ __html: post?.summary }}
                    ></section>
                  </article>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
