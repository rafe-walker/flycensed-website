'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Apple, Play } from 'lucide-react'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-end justify-center relative overflow-hidden pb-24"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      {/* Subtle dark overlay — just enough for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/40 to-brand-dark/90" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div
          className="mb-8"
        >
          <div className="inline-block">
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-2">
              <span className="text-brand-teal">FLY</span>
              <span className="text-brand-cream ml-3">CENSED</span>
            </h1>
          </div>
        </div>

        <p
          className="text-2xl md:text-3xl font-bold text-slate-200 mb-6"
        >
          Pass Your FAA Part 107 Exam With Confidence
        </p>

        <p
          className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
        >
          The most comprehensive drone pilot exam prep — veteran-built, mission-ready
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <a href="https://apps.apple.com/us/app/flycensed/id6760856459" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-lg flex items-center justify-center gap-2 btn-glow hover:bg-cyan-400 transform hover:scale-105">
            <Apple className="w-5 h-5" />
            Download on App Store
          </a>
          <span className="px-8 py-4 bg-brand-card text-slate-500 font-bold rounded-lg flex items-center justify-center gap-2 border border-slate-600/30 cursor-default">
            <Play className="w-5 h-5" />
            Google Play — Coming Soon
          </span>
        </div>

        <div
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-brand-teal" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}