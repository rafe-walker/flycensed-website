'use client'

import Link from 'next/link'
import { Rocket } from 'lucide-react'

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      className="border-t border-brand-card/30 bg-brand-card/10 py-12 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div
          >
            <h4 className="font-bold mb-4 flex items-center gap-2">
              <Rocket className="w-5 h-5 text-brand-teal" />
              Flycensed
            </h4>
            <p className="text-slate-400 text-sm">
              The most comprehensive FAA Part 107 exam prep app
            </p>
          </div>

          <div
          >
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <button onClick={() => scrollToSection('features')} className="hover:text-brand-teal transition-colors">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('pricing')} className="hover:text-brand-teal transition-colors">
                  Pricing
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('faq')} className="hover:text-brand-teal transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <Link href="/blog" className="hover:text-brand-teal transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div
          >
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="mailto:support@flycensed.com" className="hover:text-brand-teal transition-colors">
                  support@flycensed.com
                </a>
              </li>
              <li>
                <a href="mailto:press@flycensed.com" className="hover:text-brand-teal transition-colors">
                  press@flycensed.com
                </a>
              </li>
              <li>
                <a href="mailto:privacy@flycensed.com" className="hover:text-brand-teal transition-colors">
                  privacy@flycensed.com
                </a>
              </li>
            </ul>
            <h4 className="font-bold mb-4 mt-6">Legal</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li>
                <a href="/privacy" className="hover:text-brand-teal transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-brand-teal transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-card/30 pt-8 text-center text-slate-500 text-sm">
          <p className="mb-2">
            © 2026 Stormhaven Enterprises LLC. All rights reserved.
          </p>
          <p>
            Veteran-designed & developed by{' '}
            <span className="text-brand-teal font-semibold">Stronghold Precision Aerials</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
