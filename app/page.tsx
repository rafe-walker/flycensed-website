import type { Metadata } from 'next'
import { Navigation } from './components/Navigation'

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
  openGraph: {
    url: '/',
  },
}
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'
import { FeatureDeepDiveSection } from './components/FeatureDeepDiveSection'
import { ByTheNumbersSection } from './components/ByTheNumbersSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { CredibilitySection } from './components/CredibilitySection'
import { BlogSection } from './components/BlogSection'
import { FaqSection } from './components/FaqSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { Footer } from './components/Footer'

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Flycensed',
    description: 'Part 107 drone license study app with practice tests, flashcards, and study guides',
    url: 'https://flycensed.com',
    applicationCategory: 'Education',
    operatingSystem: 'iOS',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    downloadUrl: 'https://apps.apple.com/us/app/flycensed/id6760856459',
    publisher: {
      '@type': 'Organization',
      name: 'StormHaven Enterprises LLC',
      url: 'https://flycensed.com',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StormHaven Enterprises LLC',
    legalName: 'StormHaven Enterprises LLC',
    url: 'https://flycensed.com',
    logo: 'https://flycensed.com/apple-touch-icon.png',
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'support@flycensed.com',
      contactType: 'customer support',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Flycensed',
    url: 'https://flycensed.com',
    description: 'Part 107 drone license study app with practice tests, flashcards, and study guides',
    publisher: {
      '@type': 'Organization',
      name: 'StormHaven Enterprises LLC',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many questions are on the FAA Part 107 exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The FAA Part 107 exam has 60 questions covering airspace, regulations, weather, aircraft performance, and decision-making. You need to score 70% or higher to pass.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need flight experience to use Flycensed?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No! Flycensed is designed for complete beginners and experienced pilots alike. Our structured lessons build from fundamentals to advanced concepts.',
        },
      },
      {
        '@type': 'Question',
        name: 'How long should I study before taking the exam?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Most users pass in 4-6 weeks of consistent study. Flycensed adapts to your schedule with plans ranging from 2 weeks to 3 months.',
        },
      },
      {
        '@type': 'Question',
        name: "What's the average pass rate for Flycensed users?",
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our users achieve an 84.2% pass rate on their first attempt, compared to the national average of 66%. The key is understanding concepts, not just memorization.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the content up to date with current regulations?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All content is verified against the latest FAA regulations as of March 2026. We update quarterly to reflect regulatory changes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does Flycensed work offline?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Pro users can download lesson content and flashcards for offline access. This is perfect for studying during flights or in areas without connectivity.',
        },
      },
    ],
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureDeepDiveSection />
      <ByTheNumbersSection />
      <HowItWorksSection />
      <CredibilitySection />
      <BlogSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  )
}
