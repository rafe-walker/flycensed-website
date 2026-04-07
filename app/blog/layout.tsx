import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Flycensed',
  description: 'Expert guides, tips, and resources for FAA Part 107 drone pilot exam preparation.',
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Blog | Flycensed',
    description: 'Expert guides, tips, and resources for FAA Part 107 drone pilot exam preparation.',
    url: '/blog',
  },
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
