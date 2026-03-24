'use client'

import { motion } from 'framer-motion'

export function ByTheNumbersSection() {
  return (
    <motion.section
      className="py-20 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-cyan-500/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { number: '485', label: 'Flashcards' },
            { number: '201', label: 'Questions' },
            { number: '11', label: 'Decision Chains' },
            { number: '20', label: 'Lessons' },
            { number: '100', label: 'METAR Challenges' },
            { number: '5', label: 'Study Modes' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-brand-card/50 border border-brand-card rounded-xl p-8 text-center hover:bg-brand-card/70 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-teal mb-2">
                {item.number}
              </div>
              <div className="text-slate-400 font-semibold">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
