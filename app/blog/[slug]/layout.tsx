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

  const canonicalUrl = `https://flycensed.com/blog/${slug}`

  return {
    title: `${post.title} | Flycensed Blog`,
    description: post.description,
    keywords: post.keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: canonicalUrl,
      publishedTime: post.date,
      authors: [post.author],
      images: post.featuredImage ? [`https://flycensed.com${post.featuredImage}`] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    },
  }
}

export default function BlogPostLayout({ children }: BlogSlugLayoutProps) {
  return <>{children}</>
}
