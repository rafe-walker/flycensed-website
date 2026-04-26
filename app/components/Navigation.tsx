'use client'

import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  const handleScrollOrNavigate = (id: string) => {
    if (isHome) {
      // On homepage, smooth scroll to the section
      const element = document.getElementById(id)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // On other pages, navigate to homepage with hash
      window.location.href = `/#${id}`
    }
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-card/30" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-brand-teal" />
          <span className="text-xl font-bold">
            <span className="text-brand-teal">FLY</span>
            <span className="text-brand-cream">CENSED</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[
            { label: 'Features', id: 'features' },
            { label: 'Pricing', id: 'pricing' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollOrNavigate(item.id)}
              className="text-slate-300 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
            Blog
          </Link>
          <Link href="/store" className="text-slate-300 hover:text-brand-teal transition-colors">
            Store
          </Link>
          <Link href="/free-pro" className="text-brand-teal hover:text-cyan-400 transition-colors font-semibold">
            Free Pro
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-teal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-brand-card/50 border-t border-brand-card/30 px-4 py-4 flex flex-col gap-4"
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          exit={{ height: 0 }}
          transition={{ duration: 0.2 }}
        >
          {[
            { label: 'Features', id: 'features' },
            { label: 'Pricing', id: 'pricing' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScrollOrNavigate(item.id)}
              className="text-slate-300 hover:text-brand-teal transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
          <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
            Blog
          </Link>
          <Link href="/store" className="text-slate-300 hover:text-brand-teal transition-colors">
            Store
          </Link>
          <Link href="/free-pro" className="text-brand-teal hover:text-cyan-400 transition-colors font-semibold">
            Free Pro
          </Link>
        </motion.div>
      )}
    </nav>
  )
}