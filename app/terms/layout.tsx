import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | Flycensed',
  description: 'Flycensed terms of service. Read the terms and conditions for using the Flycensed mobile application and website.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service | Flycensed',
    description: 'Flycensed terms of service and conditions of use.',
    url: '/terms',
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
