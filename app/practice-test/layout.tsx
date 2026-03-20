import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Free Part 107 Practice Test | Flycensed',
  description:
    'Take our free 10-question Part 107 practice test covering all exam areas. Includes detailed explanations and performance breakdown. See how ready you are for the real exam.',
  keywords: [
    'Part 107 practice test',
    'free drone pilot test',
    'Part 107 exam questions',
    'drone pilot exam prep',
    'FAA Part 107 test',
    'practice exam',
    'study guide',
  ],
  openGraph: {
    title: 'Free Part 107 Practice Test | Flycensed',
    description:
      '10-question practice test with detailed explanations. Perfect for FAA Part 107 exam prep.',
    type: 'website',
    url: 'https://flycensed.com/practice-test',
    images: [
      {
        url: 'https://flycensed.com/og-practice-test.png',
        width: 1200,
        height: 630,
        alt: 'Part 107 Practice Test',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Part 107 Practice Test | Flycensed',
    description: '10-question practice test with detailed explanations.',
  },
}

export default function PracticeTestLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      {/* JSON-LD Schema for Quiz */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org/',
            '@type': 'Quiz',
            name: 'Free Part 107 Practice Test',
            description:
              '10-question practice test covering all FAA Part 107 exam areas',
            url: 'https://flycensed.com/practice-test',
            about: {
              '@type': 'Thing',
              name: 'FAA Part 107 Remote Pilot Certificate',
            },
            educationalLevel: 'Professional',
            numberOfQuestions: 10,
            quizType: 'Exam',
          }),
        }}
      />
    </>
  )
}
