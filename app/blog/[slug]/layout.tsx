import type { Metadata } from 'next'
import { blogPosts } from '../posts'

interface BlogSlugLayoutProps {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: BlogSlugLayoutProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return {}
  }

  return {
    title: `${post.title} | Flycensed Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage ? [`https://flycensed.com${post.featuredImage}`] : [],
    },
  }
}

export default function BlogPostLayout({ children }: BlogSlugLayoutProps) {
  return <>{children}</>
}
