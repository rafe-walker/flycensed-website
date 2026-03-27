'use client'

import { Apple } from 'lucide-react'

export function BetaBanner() {
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-brand-teal/20 via-cyan-500/20 to-brand-teal/20 border-b border-brand-teal/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-center gap-3 text-sm">
        <span className="inline-block px-2 py-0.5 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full">NEW</span>
        <span className="text-slate-300">Flycensed is now available on the App Store!</span>
        <a
          href="https://apps.apple.com/us/app/flycensed/id6760856459"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-3 py-1 bg-brand-teal text-brand-dark font-bold text-xs rounded-full hover:bg-cyan-400 transition-colors whitespace-nowrap"
        >
          <Apple className="w-3 h-3" />
          Download Now
        </a>
      </div>
    </div>
  )
}