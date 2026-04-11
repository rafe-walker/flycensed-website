import { notFound } from 'next/navigation'
import { blogPosts } from '../posts'
import BlogPostContent from './BlogPostContent'

// Pre-render all blog posts at build time as static HTML
export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params

  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { '@type': 'Organization', name: 'Stormhaven Enterprises LLC', url: 'https://flycensed.com' },
    publisher: { '@type': 'Organization', name: 'Flycensed', url: 'https://flycensed.com', logo: { '@type': 'ImageObject', url: 'https://flycensed.com/icon.svg' } },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `https://flycensed.com/blog/${post.slug}` },
    image: `https://flycensed.com${post.featuredImage}`,
    keywords: post.keywords.join(', '),
  }

  const relatedPosts = blogPosts
    .filter(p => p.slug !== slug)
    .slice(0, 4)

  return (
    <BlogPostContent
      post={post}
      relatedPosts={relatedPosts}
      jsonLd={jsonLd}
    />
  )
}
