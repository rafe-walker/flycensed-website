import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Delete Account | Flycensed',
  description: 'Delete your Flycensed account and all associated data.',
  alternates: {
    canonical: '/delete-account',
  },
  robots: 'noindex, nofollow',
}

export default function DeleteAccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
