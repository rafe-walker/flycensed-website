import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

export const metadata: Metadata = {
  title: 'Study Materials Store | Flycensed Part 107 Exam Prep',
  description: 'Premium Part 107 study materials: flashcard decks, cheat sheets, practice exams, and comprehensive study guides. Pass your FAA drone pilot exam on the first try.',
  alternates: { canonical: '/store' },
  openGraph: {
    url: '/store',
    title: 'Part 107 Study Materials | Flycensed',
    description: 'Premium printable study materials to help you pass the FAA Part 107 Knowledge Test.',
  },
}

const products = [
  {
    id: 'flashcard-deck',
    name: 'Part 107 Flashcard Deck',
    tagline: '485 Cards Across 8 Exam Topics',
    description: 'Master every concept tested on the FAA Part 107 exam. Each card includes the question, multiple choice options, and a detailed explanation of the correct answer. Organized by category for focused study sessions.',
    price: '$12.99',
    features: [
      '485 exam-style flashcards',
      '8 categories: Regulations, Airspace, Weather, Operations & more',
      'Correct answers marked with detailed explanations',
      'Print-ready PDF format (91 pages)',
    ],
    badge: 'Most Popular',
    badgeColor: 'bg-brand-teal',
    checkoutUrl: 'https://buy.stripe.com/aFadRb9jCdTCgUU9R69Ve02',
    icon: '🗂',
    previewImage: '/previews/preview-flashcard-deck.webp',
  },
  {
    id: 'practice-exams',
    name: 'Part 107 Practice Exams',
    tagline: '3 Full Exams + 17 Bonus Questions',
    description: 'Simulate the real exam experience with 197 FAA-style questions organized into three 60-question practice tests. Each question includes detailed explanations referencing specific FAA regulations.',
    price: '$9.99',
    features: [
      '197 multiple-choice questions',
      '3 full 60-question practice exams',
      '17 bonus questions for extra prep',
      'Separate answer keys with regulation references',
    ],
    badge: 'Exam Ready',
    badgeColor: 'bg-cyan-500',
    checkoutUrl: 'https://buy.stripe.com/dRmcN767qeXG8oo8N29Ve03',
    icon: '📝',
    previewImage: '/previews/preview-practice-exams.webp',
  },
  {
    id: 'study-guide',
    name: 'Part 107 Complete Study Guide',
    tagline: '20 Chapters Covering Every Exam Topic',
    description: 'The most comprehensive Part 107 study resource available. Every topic on the FAA Knowledge Test explained in detail with key facts highlighted for easy review. Your complete preparation manual.',
    price: '$14.99',
    features: [
      '20 in-depth chapters, 75 sections',
      '375 highlighted key facts',
      'Full table of contents with color-coded topics',
      'Covers regulations, airspace, weather, operations & more',
    ],
    badge: 'Comprehensive',
    badgeColor: 'bg-emerald-500',
    checkoutUrl: 'https://buy.stripe.com/14AeVf53mg1KgUU8N29Ve04',
    icon: '📖',
    previewImage: '/previews/preview-study-guide.webp',
  },
  {
    id: 'cheat-sheet',
    name: 'Part 107 Cheat Sheet',
    tagline: 'Quick Reference for Exam Day',
    description: 'Every critical fact, number, and rule you need for the FAA Part 107 Knowledge Test on one condensed reference. Print it out and review right before your exam.',
    price: '$4.99',
    features: [
      '375 key facts organized by topic',
      'Quick-numbers reference table',
      'All 20 exam topics covered',
      'Perfect for last-minute review (15 pages)',
    ],
    badge: 'Quick Review',
    badgeColor: 'bg-amber-500',
    checkoutUrl: 'https://buy.stripe.com/4gM3cxcvOcPycEE2oE9Ve05',
    icon: '⚡',
    previewImage: '/previews/preview-cheat-sheet.webp',
  },
]

const bundle = {
  name: 'Complete Study Bundle',
  tagline: 'All 4 Products — Save 40%',
  description: 'Get everything you need to pass the Part 107 exam: flashcard deck, practice exams, study guide, and cheat sheet. The ultimate preparation package at a massive discount.',
  originalPrice: '$42.96',
  price: '$24.99',
  checkoutUrl: 'https://buy.stripe.com/eVqdRbgM44j2gUU5AQ9Ve06',
  icon: '🎯',
}

export default function StorePage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="pt-28 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="accent-line" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Study Materials</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-6">
            Premium printable study resources to help you pass the FAA Part 107
            Knowledge Test on your first attempt. Instant download after purchase.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-1">✓ Instant PDF Download</span>
            <span className="flex items-center gap-1">✓ Print-Ready Format</span>
            <span className="flex items-center gap-1">✓ 100% Exam Coverage</span>
          </div>
        </div>
      </section>

      {/* Bundle Banner */}
      <section className="px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border-2 border-brand-teal/50 bg-gradient-to-r from-brand-card to-brand-dark">
            <div className="absolute top-0 right-0 bg-brand-teal text-brand-dark text-xs font-bold px-4 py-1 rounded-bl-lg z-10">
              BEST VALUE
            </div>

            {/* Bundle Preview Image */}
            <div className="px-6 pt-6 pb-2">
              <Image
                src="/previews/preview-bundle.webp"
                alt="Preview of all 4 study materials included in the bundle"
                width={900}
                height={400}
                className="w-full h-auto rounded-lg opacity-90"
                priority
              />
            </div>

            <div className="p-8 pt-4 md:p-10 md:pt-4">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl font-bold text-white mb-1">{bundle.name}</h2>
                  <p className="text-brand-teal font-medium mb-2">{bundle.tagline}</p>
                  <p className="text-slate-400 text-sm">{bundle.description}</p>
                </div>
                <div className="text-center">
                  <div className="text-slate-500 line-through text-sm">{bundle.originalPrice}</div>
                  <div className="text-3xl font-bold text-white mb-3">{bundle.price}</div>
                  <a
                    href={bundle.checkoutUrl}
                    className="inline-block bg-gradient-accent text-brand-dark font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity btn-glow"
                  >
                    Get the Bundle
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Individual Products */}
      <section className="px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-white mb-2">Or Buy Individually</h2>
          <p className="text-slate-400 text-center text-sm mb-10">Each product is available as a standalone purchase</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="relative bg-brand-card border border-brand-card/80 rounded-2xl overflow-hidden hover:border-brand-teal/30 transition-colors group"
              >
                {/* Badge */}
                <div className={`absolute top-4 right-4 z-10 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </div>

                {/* Preview Image */}
                <div className="relative bg-gradient-to-b from-slate-800/50 to-brand-card px-4 pt-5 pb-3 flex items-center justify-center">
                  <Image
                    src={product.previewImage}
                    alt={`Preview of ${product.name}`}
                    width={800}
                    height={520}
                    className="w-full max-w-md h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                  />
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-brand-card to-transparent" />
                </div>

                {/* Content */}
                <div className="p-7 pt-4">
                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="text-4xl">{product.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{product.name}</h3>
                      <p className="text-brand-teal text-sm font-medium">{product.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm mb-5 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                        <span className="text-brand-teal mt-0.5">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price + CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-brand-card/50">
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                    <a
                      href={product.checkoutUrl}
                      className="inline-block bg-brand-teal/10 text-brand-teal border border-brand-teal/30 font-semibold px-6 py-2.5 rounded-xl hover:bg-brand-teal hover:text-brand-dark transition-all"
                    >
                      Buy Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App CTA Section */}
      <section className="px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-card to-brand-dark border border-brand-teal/20 p-8 md:p-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1 text-center md:text-left">
                <p className="text-brand-teal text-sm font-semibold mb-2 uppercase tracking-wider">Supercharge Your Study</p>
                <h3 className="text-2xl font-bold text-white mb-3">
                  Pair These Materials with the Flycensed App
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  These PDFs are perfect for offline and desk study. But for interactive practice with
                  adaptive quizzes, a real-time <span className="text-brand-teal font-medium">METAR decoder</span>,
                  scenario-based training, and progress tracking — download the app. It&apos;s the complete
                  Part 107 prep system.
                </p>
                <div className="flex flex-wrap gap-3 text-xs text-slate-300 mb-6">
                  <span className="bg-brand-card/80 px-3 py-1 rounded-full border border-brand-card">Interactive METAR Decoder</span>
                  <span className="bg-brand-card/80 px-3 py-1 rounded-full border border-brand-card">Adaptive Quizzes</span>
                  <span className="bg-brand-card/80 px-3 py-1 rounded-full border border-brand-card">Progress Tracking</span>
                  <span className="bg-brand-card/80 px-3 py-1 rounded-full border border-brand-card">Scenario Training</span>
                </div>
                <p className="text-slate-500 text-xs mb-4">
                  Buy any study material and get a free <span className="text-brand-teal font-medium">FLYSTUDY</span> promo
                  code for Flycensed Pro on your download page. iOS only.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://apps.apple.com/us/app/flycensed/id6760856459"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-brand-teal text-brand-dark font-bold px-6 py-3 rounded-xl hover:bg-cyan-400 transition-colors text-center"
                  >
                    Download Free on App Store
                  </a>
                  <Link
                    href="/free-pro"
                    className="inline-block bg-brand-card text-brand-teal border border-brand-teal/30 font-semibold px-6 py-3 rounded-xl hover:bg-brand-card/80 transition-colors text-center"
                  >
                    Get Pro Free →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-4 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-xl font-bold text-white mb-6">Created from Real Exam Data</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { stat: '485', label: 'Flashcards' },
              { stat: '197', label: 'Practice Questions' },
              { stat: '20', label: 'Study Chapters' },
              { stat: '375', label: 'Key Facts' },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl font-bold text-brand-teal">{item.stat}</div>
                <div className="text-slate-400 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-6">
            All materials are derived from FAA Part 107 regulations and designed to
            match the official exam format and difficulty level.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 pb-20">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-center text-white mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              {
                q: 'How do I receive my purchase?',
                a: 'After completing checkout, you\'ll be redirected to a download page where you can instantly download your PDF. You can also bookmark the page for future re-downloads.',
              },
              {
                q: 'Can I print these materials?',
                a: 'Yes! All PDFs are designed to be print-ready. We recommend printing on standard letter-size paper. The cheat sheet is especially great printed and laminated for exam day review.',
              },
              {
                q: 'What format are the files?',
                a: 'All products are delivered as high-quality PDF files that work on any device — computer, tablet, or phone.',
              },
              {
                q: 'Do these cover the entire Part 107 exam?',
                a: 'Yes. Our materials cover all exam topics: regulations, airspace, weather, operations, decision-making, performance, night operations, and operations over people.',
              },
              {
                q: 'How are these different from the Flycensed app?',
                a: 'The Flycensed app provides interactive study with adaptive quizzes, METAR decoders, and progress tracking. These printable materials are perfect for offline study, desk reference, and exam-day review — they complement the app beautifully.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-brand-card/50 rounded-xl p-5">
                <h4 className="font-semibold text-white mb-2">{item.q}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
