import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reset Password | Flycensed',
  description: 'Reset your Flycensed account password.',
  alternates: {
    canonical: '/reset-password',
  },
  robots: 'noindex, nofollow',
}

export default function ResetPasswordLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
