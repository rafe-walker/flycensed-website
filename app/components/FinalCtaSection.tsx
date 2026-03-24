'use client'

import { motion } from 'framer-motion'
import { Apple, Play, CheckCircle } from 'lucide-react'

export function FinalCtaSection() {
  return (
    <motion.section
      className="py-32 md:py-40 px-4 relative overflow-hidden min-h-[80vh] flex items-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Launch Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
        style={{ minWidth: '100%', minHeight: '100%' }}
      >
        <source src="/launch-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-brand-dark/60" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-3xl md:text-5xl font-black text-slate-200 mb-4">
            Ready to get <span className="text-brand-teal">FLY</span><span className="text-brand-cream">CENSED</span>? 🚀
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-lg text-slate-400 mb-12"
        >
          Join 59,000+ drone pilots who get certified every year
        </motion.p>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-3xl mx-auto"
          id="pricing"
        >
          <div className="bg-brand-dark/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 text-left">
            <div className="text-lg font-bold text-brand-teal mb-1">FREE</div>
            <div className="text-slate-400 mb-6">Free Forever</div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                100 Flashcards
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                1 Practice Test
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                Basic Dashboard
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                Mobile App Access
              </li>
            </ul>
            <button className="w-full mt-8 py-3 rounded-lg font-bold bg-brand-card text-brand-teal border border-brand-teal/30 hover:bg-brand-card/80 transition-colors">
              Get Started Free
            </button>
          </div>
          <div className="bg-brand-dark/80 backdrop-blur-sm border-2 border-brand-teal/60 rounded-2xl p-8 text-left relative">
            <div className="absolute -top-4 right-6 bg-brand-teal text-brand-dark px-4 py-1 rounded-full text-sm font-bold">
              BEST VALUE
            </div>
            <div className="text-lg font-bold text-brand-teal mb-1">PRO</div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-black text-brand-teal">$14.99</span>
              <span className="text-slate-500">one-time</span>
            </div>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                485 Flashcards + 5 Study Modes
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                201 Practice Questions
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                METAR Tools & Scenarios
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                Readiness Score & Analytics
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                11 Decision Chains
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                Offline Access
              </li>
            </ul>
            <button className="w-full mt-8 py-3 rounded-lg font-bold bg-brand-teal text-brand-dark hover:bg-cyan-400 transition-colors btn-glow">
              Get Pro — $14.99
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <button className="px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-lg flex items-center justify-center gap-2 btn-glow hover:bg-cyan-400 transform hover:scale-105">
            <Apple className="w-5 h-5" />
            Download on App Store
          </button>
          <button className="px-8 py-4 bg-brand-card text-brand-teal font-bold rounded-lg flex items-center justify-center gap-2 border border-brand-teal/30 hover:bg-brand-card/80 transform hover:scale-105">
            <Play className="w-5 h-5" />
            Get on Google Play
          </button>
        </motion.div>
      </div>
    </motion.section>
  )
}
