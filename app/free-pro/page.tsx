'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Rocket, CheckCircle, Gift, BookOpen, Brain, BarChart3, Zap, ArrowLeft } from 'lucide-react'

export default function FreeProPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/promo-signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name.trim(), email: email.trim() }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
        return
      }

      setSuccess(true)
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-brand-dark relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />

      {/* Navigation */}
      <nav className="relative z-10 px-4 py-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-brand-teal" />
            <span className="text-xl font-bold">
              <span className="text-brand-teal">FLY</span>
              <span className="text-brand-cream">CENSED</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-slate-400 hover:text-brand-teal transition-colors flex items-center gap-1 text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Column — Value Prop */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-teal/10 border border-brand-teal/20 rounded-full px-4 py-2 mb-6">
              <Gift className="w-4 h-4 text-brand-teal" />
              <span className="text-brand-teal text-sm font-semibold">Limited Time — Early Access Offer</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-black text-slate-100 mb-4 leading-tight">
              Get <span className="text-brand-teal">Flycensed Pro</span> for Free
            </h1>

            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We&apos;re giving early adopters full access to Flycensed Pro — the most comprehensive
              FAA Part 107 exam prep app — completely free. Sign up and we&apos;ll send you a
              promo code to unlock everything.
            </p>

            <div className="space-y-4 mb-8">
              {[
                { icon: BookOpen, text: '485 Flashcards across 5 study modes' },
                { icon: Brain, text: '201 Practice Questions & 11 Decision Chains' },
                { icon: Zap, text: 'Interactive METAR Tools & Scenario Training' },
                { icon: BarChart3, text: 'Readiness Score & Full Analytics Dashboard' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-brand-teal" />
                  </div>
                  <span className="text-slate-300">{item.text}</span>
                </div>
              ))}
            </div>

            <p className="text-sm text-slate-500">
              Normally <span className="line-through">$14.99</span> — yours free as an early supporter.
            </p>
          </div>

          {/* Right Column — Form */}
          <div>
            <div className="bg-brand-card/50 backdrop-blur-sm border border-brand-card/80 rounded-2xl p-8 md:p-10">
              {success ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-brand-teal" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-100 mb-3">
                    You&apos;re In!
                  </h2>
                  <p className="text-slate-400 mb-6 leading-relaxed">
                    We&apos;ll send your free Flycensed Pro promo code to <span className="text-brand-teal font-medium">{email}</span> shortly.
                    Keep an eye on your inbox!
                  </p>
                  <div className="bg-brand-dark/60 rounded-xl p-4 border border-brand-teal/20">
                    <p className="text-sm text-slate-400">
                      While you wait, download the app so you&apos;re ready to redeem:
                    </p>
                    <a
                      href="https://apps.apple.com/us/app/flycensed/id6760856459"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-3 px-6 py-3 bg-brand-teal text-brand-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors btn-glow"
                    >
                      Download Flycensed
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-slate-100 mb-2">
                    Claim Your Free Pro Access
                  </h2>
                  <p className="text-slate-400 text-sm mb-6">
                    Enter your info below and we&apos;ll email you a promo code.
                  </p>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-3 mb-4">
                      <p className="text-red-400 text-sm">{error}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                        placeholder="Your first name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal transition-colors"
                        placeholder="you@example.com"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-brand-teal hover:bg-cyan-400 text-brand-dark font-bold py-4 px-4 rounded-xl transition-colors btn-glow disabled:opacity-50 disabled:cursor-not-allowed text-lg"
                    >
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-5 h-5 border-2 border-brand-dark border-t-transparent rounded-full animate-spin" />
                          Signing up...
                        </span>
                      ) : (
                        'Get My Free Pro Code'
                      )}
                    </button>
                  </form>

                  <p className="text-xs text-slate-500 mt-4 text-center">
                    No spam, ever. We&apos;ll only email your promo code and occasional study tips.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-brand-card/30 py-8 px-4 mt-20">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p>&copy; 2026 Stormhaven Enterprises LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
