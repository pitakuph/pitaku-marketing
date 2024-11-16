export const getAllBlogsApi = async () => {
  return fetch(`${process.env.API_BASE_URL}/posts/published`, {
    next: { tags: ['blogs-all'] },
    method: 'GET',
    headers: {'Content-Type': 'application/json'},
    cache: 'no-store',
  });
};

export const getBlogApi = async (slug:string) => {
    return fetch(`${process.env.API_BASE_URL}/v1/posts/${slug}`, {
      next: { tags: ['blog-post'] },
      method: 'GET',
      headers: {'Content-Type': 'application/json'},
      cache: 'no-store',
    });
};