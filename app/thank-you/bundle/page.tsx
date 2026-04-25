import type { Metadata } from 'next'
import BundleThankYou from './BundleThankYou'

export const metadata: Metadata = {
  title: 'Download Your Complete Bundle | Flycensed',
  robots: 'noindex, nofollow',
}

export default function BundleThankYouPage() {
  return <BundleThankYou />
}
