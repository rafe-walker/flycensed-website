import { blogPosts } from './posts'
import BlogListContent from './BlogListContent'

export default function BlogPage() {
  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))

  return (
    <BlogListContent
      posts={blogPosts}
      categories={categories}
    />
  )
}
