import Image from 'next/image'
import styles from './article.module.css'
import { Articles } from '@/utils/Content'

type Props = {
  articleId: number
}

export default function Article({ articleId }: Props) {
  const content = Articles[articleId]
  return (
    <>
      <div className="w-full">
        <article className={`${styles.container}`}>
          <h1>{content?.title}</h1>
          <Image
            src={content?.image}
            alt={content?.title}
            width={1000}
            height={1000}
            unoptimized
          ></Image>
          <section
            dangerouslySetInnerHTML={{ __html: content?.content }}
          ></section>
        </article>
      </div>
    </>
  )
}
