import { getAllBlogsApi, getBlogApi } from '@/app/api/blog/blog'

export async function getAllBlogs() {
  const res: Response = await getAllBlogsApi()
  if (!res.ok) {
    throw new Error('Unable to load blogs')
  }

  const resJson = await res.json()
  const response = resJson

  return response
}

export async function getBlog(slug: string) {
  const res: Response = await getBlogApi(slug)
  if (!res.ok) {
    throw new Error('Unable to load blog')
  }

  const resJson = await res.json()
  const response = resJson

  return response
}
