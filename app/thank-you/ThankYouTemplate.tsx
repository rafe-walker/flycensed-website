'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense } from 'react'
import Link from 'next/link'

interface ProductConfig {
  name: string
  tagline: string
  downloadPath: string
  downloadFilename: string
  pageCount: string
  icon: string
  tips: string[]
  upsellProducts: { name: string; href: string; price: string }[]
}

function DownloadContent({ config }: { config: ProductConfig }) {
  const searchParams = useSearchParams()
  const session = searchParams.get('session_id')

  if (!session) {
    return (
      <div className="text-center py-32 px-6 max-w-xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Looking for your download?</h1>
        <p className="text-slate-400 text-lg leading-relaxed">
          If you&apos;ve already purchased, check your email for the download link.
          If you haven&apos;t purchased yet, visit our{' '}
          <Link href="/store" className="text-brand-teal hover:underline">store page</Link> to get started.
        </p>
      </div>
    )
  }

  return (
    <div className="text-center py-28 px-6 max-w-2xl mx-auto">
      {/* Success */}
      <div className="text-6xl mb-4">✅</div>
      <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
        Thank you for your purchase!
      </h1>
      <p className="text-slate-400 text-lg mb-10 leading-relaxed">
        Your {config.name} is ready to download. Click the button below to save your PDF.
        We recommend bookmarking this page in case you need to re-download later.
      </p>

      {/* Download Card */}
      <div className="bg-brand-card border border-brand-teal/30 rounded-2xl p-8 mb-8 inline-block w-full max-w-md">
        <div className="text-5xl mb-3">{config.icon}</div>
        <h3 className="text-xl font-bold text-white mb-1">{config.name}</h3>
        <p className="text-slate-400 text-sm mb-1">{config.tagline}</p>
        <p className="text-slate-500 text-xs mb-5">{config.pageCount} pages &middot; PDF format</p>
        <a
          href={config.downloadPath}
          download={config.downloadFilename}
          className="inline-block bg-gradient-to-r from-brand-teal to-cyan-500 text-brand-dark font-bold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity btn-glow text-lg"
        >
          ⬇ Download PDF
        </a>
      </div>

      {/* Tips */}
      <div className="bg-brand-card/60 border border-brand-card rounded-xl p-6 text-left mb-8 max-w-lg mx-auto">
        <h3 className="text-brand-teal font-semibold text-sm mb-3">Getting the Most from Your Purchase</h3>
        <ul className="space-y-2">
          {config.tips.map((tip, i) => (
            <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
              <span className="text-brand-teal mt-0.5">✓</span>
              {tip}
            </li>
          ))}
        </ul>
      </div>

      {/* Upsell */}
      {config.upsellProducts.length > 0 && (
        <div className="max-w-lg mx-auto mb-8">
          <h3 className="text-white font-semibold text-sm mb-3">Complete Your Study Kit</h3>
          <div className="grid grid-cols-1 gap-3">
            {config.upsellProducts.map((product, i) => (
              <Link
                key={i}
                href={product.href}
                className="flex items-center justify-between bg-brand-card/40 border border-brand-card rounded-lg p-4 hover:border-brand-teal/30 transition-colors"
              >
                <span className="text-slate-300 text-sm">{product.name}</span>
                <span className="text-brand-teal font-semibold text-sm">{product.price} →</span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* App Promo with FLYSTUDY code */}
      <div className="max-w-lg mx-auto mb-8 bg-gradient-to-br from-brand-card to-brand-dark border border-brand-teal/20 rounded-xl p-6 text-left">
        <p className="text-brand-teal text-xs font-semibold uppercase tracking-wider mb-2">🎁 Bonus — Free with Your Purchase</p>
        <h3 className="text-white font-bold text-lg mb-2">
          Get Flycensed Pro Free (iOS)
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-3">
          As a thank you for your purchase, get the full Flycensed Pro app free — interactive
          <span className="text-brand-teal font-medium"> METAR decoder</span>, adaptive quizzes,
          scenario training, and progress tracking. The perfect companion to your study materials.
        </p>
        <div className="bg-brand-dark/80 rounded-lg p-4 border border-brand-teal/30 mb-4 text-center">
          <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Your Promo Code</p>
          <p className="text-2xl font-black text-brand-teal tracking-widest mb-1">FLYSTUDY</p>
          <p className="text-xs text-slate-500">Expires Jun 30, 2026 · iOS only</p>
        </div>
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

export default function ThankYouTemplate({ config }: { config: ProductConfig }) {
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
        <DownloadContent config={config} />
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
