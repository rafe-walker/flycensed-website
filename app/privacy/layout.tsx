import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Flycensed',
  description: 'Flycensed privacy policy. Learn how we handle your data when using the Flycensed mobile application and website.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy | Flycensed',
    description: 'Flycensed privacy policy. Learn how we handle your data.',
    url: '/privacy',
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
