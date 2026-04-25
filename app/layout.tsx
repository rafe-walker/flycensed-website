import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flycensed.com'),
  title: 'Flycensed | FAA Part 107 Drone Pilot Exam Prep',
  description: 'The most comprehensive drone pilot exam prep built by pilots, for pilots. 485 flashcards, interactive METAR tools, scenario-based training, and more.',
  keywords: [
    'FAA Part 107',
    'drone pilot exam',
    'pilot certification',
    'exam prep',
    'METAR',
    'part 107 exam questions',
    'drone license',
    'part 107 study guide',
  ],
  authors: [{ name: 'Stormhaven Enterprises LLC' }],
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Flycensed | FAA Part 107 Drone Pilot Exam Prep',
    description: 'The most comprehensive drone pilot exam prep built by pilots, for pilots.',
    images: [
      {
        url: 'https://flycensed.com/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Flycensed',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flycensed | FAA Part 107 Drone Pilot Exam Prep',
    description: 'The most comprehensive drone pilot exam prep built by pilots, for pilots.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#0F172A" />
      </head>
      <body className="bg-brand-dark text-slate-200 antialiased">
        {children}
      </body>
    </html>
  )
}
