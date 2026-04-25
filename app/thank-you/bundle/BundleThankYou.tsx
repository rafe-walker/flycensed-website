'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'

const downloads = [
  {
    name: 'Part 107 Complete Study Guide',
    tagline: '20 Chapters • 375 Key Facts • 61 Pages',
    downloadPath: '/downloads/Flycensed-Part107-Study-Guide.pdf',
    downloadFilename: 'Flycensed Part 107 Study Guide.pdf',
    icon: '📖',
  },
  {
    name: 'Part 107 Flashcard Deck',
    tagline: '485 Cards • 8 Categories • 91 Pages',
    downloadPath: '/downloads/Flycensed-Part107-Flashcard-Deck.pdf',
    downloadFilename: 'Flycensed Part 107 Flashcard Deck.pdf',
    icon: '🗂',
  },
  {
    name: 'Part 107 Practice Exams',
    tagline: '197 Questions • 3 Full Exams • 41 Pages',
    downloadPath: '/downloads/Flycensed-Part107-Practice-Exams.pdf',
    downloadFilename: 'Flycensed Part 107 Practice Exams.pdf',
    icon: '📝',
  },
  {
    name: 'Part 107 Cheat Sheet',
    tagline: '375 Key Facts • Quick Reference • 15 Pages',
    downloadPath: '/downloads/Flycensed-Part107-Cheat-Sheet.pdf',
    downloadFilename: 'Flycensed Part 107 Cheat Sheet.pdf',
    icon: '⚡',
  },
]

function BundleDownloadContent() {
  const searchParams = useSearchParams()
  const session = searchParams.get('session_id')

  if (!session) {
    return (
      <div className="text-center py-32 px-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Looking for your downloads?</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          If you&apos;ve already purchased the bundle, check your email for the download link.
          If you haven&apos;t purchased yet, visit our{' '}
          <Link href="/store" className="text-brand-teal hover:underline">store page</Link> to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="text-center py-28 px-6 max-w-3xl mx-auto">
      {/* Success */}
      <div className="text-6xl mb-4">🎉</div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
        Thank you for your purchase!
      </h1>
      <p className="text-slate-400 text-lg mb-4 leading-relaxed">
        Your Complete Study Bundle is ready. Download all 4 products below.
        We recommend bookmarking this page in case you need to re-download later.
      </p>
      <p className="text-brand-teal text-sm font-medium mb-10">
        208 total pages of exam prep — everything you need to pass Part 107
      </p>

      {/* Download Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
        {downloads.map((item, i) => (
          <div
            key={i}
            className="bg-brand-card border border-brand-teal/20 rounded-2xl p-6 text-center hover:border-brand-teal/40 transition-colors"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
            <p className="text-slate-400 text-xs mb-4">{item.tagline}</p>
            <a
              href={item.downloadPath}
              download={item.downloadFilename}
              className="inline-block bg-gradient-to-r from-brand-teal to-cyan-500 text-brand-dark font-bold px-6 py-2.5 rounded-xl hover:opacity-90 transition-opacity text-sm"
            >
              ⬇ Download PDF
            </a>
          </div>
        ))}
      </div>

      {/* Study Plan Tips */}
      <div className="bg-brand-card/60 border border-brand-card rounded-xl p-6 text-left mb-8 max-w-lg mx-auto">
        <h3 className="text-brand-teal font-semibold text-sm mb-3">Recommended Study Plan</h3>
        <ul className="space-y-2">
          {[
            'Start with the Study Guide — read 1-2 chapters per day',
            'Use the Flashcard Deck to reinforce what you learned',
            'Take the Practice Exams to identify weak areas',
            'Review the Cheat Sheet the morning of your exam',
            'Aim for 80%+ on practice tests before scheduling your real exam',
          ].map((tip, i) => (
            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
              <span className="text-brand-teal mt-0.5">{i + 1}.</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* App Promo with FLYSTUDY code */}
      <div className="max-w-lg mx-auto mb-8 bg-gradient-to-br from-brand-card to-brand-dark border border-brand-teal/20 rounded-xl p-6 text-left">
        <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-2">🎁 Bonus — Free with Your Bundle</p>
        <h3 className="text-white font-bold text-lg mb-2">
          You&apos;ve got the materials — now get Pro free (iOS)
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">
          The Flycensed app brings your study materials to life with an interactive
          <span className="text-brand-teal font-medium"> METAR decoder</span>, adaptive quizzes
          that learn your weak spots, scenario-based training, and real-time progress tracking.
        </p>
        <div className="bg-brand-dark/80 rounded-lg p-4 border border-brand-teal/30 mb-3 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Your Promo Code</p>
          <p className="text-2xl font-black text-brand-teal tracking-widest mb-1">FLYSTUDY</p>
          <p className="text-xs text-slate-500">Expires Jun 30, 2026 · iOS only</p>
        </div>
        <p className="text-slate-500 text-xs mb-4">
          Pro tip: Use the app for daily practice and the PDFs for deep study sessions and exam-day review.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <a
            href="https://apps.apple.com/redeem?ctx=offercodes&id=6760856459&code=FLYSTUDY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-teal text-brand-dark font-bold px-5 py-2.5 rounded-lg hover:bg-cyan-400 transition-colors text-sm text-center"
          >
            Redeem on App Store
          </a>
          <a
            href="https://apps.apple.com/us/app/flycensed/id6760856459"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-card text-brand-teal border border-brand-teal/30 font-semibold px-5 py-2.5 rounded-lg hover:bg-brand-card/80 transition-colors text-sm text-center"
          >
            Download App First
          </a>
        </div>
      </div>

      {/* Support */}
      <p className="text-slate-500 text-sm">
        Questions? Email us at{' '}
        <a href="mailto:support@flycensed.com" className="text-brand-teal hover:underline">
          support@flycensed.com
        </a>
      </p>

      <div className="mt-8 pt-6 border-t border-brand-card">
        <Link href="/store" className="text-slate-500 text-sm hover:text-brand-teal transition-colors">
          ← Back to Store
        </Link>
      </div>
    </div>
  )
}

export default function BundleThankYou() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-md border-b border-brand-card/30 px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">
            <span className="text-brand-teal">FLY</span>
            <span className="text-brand-cream">CENSED</span>
          </span>
        </Link>
        <Link href="/store" className="text-slate-400 text-sm hover:text-brand-teal transition-colors">
          Store
        </Link>
      </nav>

      <Suspense fallback={
        <div className="text-center py-32 text-slate-500">Loading...</div>
      }>
        <BundleDownloadContent />
      </Suspense>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-brand-card/30">
        <p className="text-slate-500 text-xs">
          © 2026 Flycensed · <Link href="/" className="hover:text-brand-teal">flycensed.com</Link>
        </p>
      </footer>
    </>
  )
}
