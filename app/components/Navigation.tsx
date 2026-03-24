'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Rocket, Menu, X } from 'lucide-react'

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleScroll = (id: string) => {
    scrollToSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className="fixed top-[36px] left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-card/30">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Rocket className="w-6 h-6 text-brand-teal" />
          <span className="text-xl font-bold">
            <span className="text-brand-teal">FLY</span>
            <span className="text-brand-cream">CENSED</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {[
            { label: 'Features', id: 'features' },
            { label: 'Pricing', id: 'pricing' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-300 hover:text-brand-teal transition-colors"
            >
              {item.label}
            </button>
          ))}
          <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
            Blog
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-brand-teal"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden bg-brand-card/50 border-t border-brand-card/30 px-4 py-4 flex flex-col gap-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {[
            { label: 'Features', id: 'features' },
            { label: 'Pricing', id: 'pricing' },
            { label: 'FAQ', id: 'faq' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-300 hover:text-brand-teal transition-colors text-left"
            >
              {item.label}
            </button>
          ))}
          <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
            Blog
          </Link>
        </motion.div>
      )}
    </nav>
  )
}
