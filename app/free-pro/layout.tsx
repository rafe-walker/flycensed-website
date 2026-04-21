import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Get Flycensed Pro Free — FAA Part 107 Exam Prep App',
  description:
    'Sign up for early access and get a free promo code for Flycensed Pro — the most comprehensive FAA Part 107 drone pilot exam prep app with 485 flashcards, practice tests, and METAR tools.',
  keywords: [
    'flycensed pro free',
    'part 107 study app free',
    'drone pilot exam prep free',
    'FAA part 107 app promo code',
    'free drone license study guide',
  ],
  alternates: {
    canonical: '/free-pro',
  },
  openGraph: {
    title: 'Get Flycensed Pro Free — FAA Part 107 Exam Prep',
    description:
      'Sign up and get a free promo code for the full Flycensed Pro experience. 485 flashcards, 201 practice questions, METAR tools, and more.',
    url: '/free-pro',
    type: 'website',
  },
}

export default function FreeProLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
