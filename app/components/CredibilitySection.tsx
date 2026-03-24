'use client'

import { motion } from 'framer-motion'
import { Globe, Clock, Award } from 'lucide-react'

export function CredibilitySection() {
  return (
    <motion.section
      className="py-20 px-4 bg-brand-card/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8 text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block p-3 bg-brand-teal/10 rounded-lg mb-3">
              <Globe className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold">
              Built on Official FAA Study Materials
            </h3>
            <p className="text-slate-400 mt-2">
              All content sourced from official FAA documentation and study guides
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block p-3 bg-brand-teal/10 rounded-lg mb-3">
              <Clock className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold">
              Updated for March 2026 Regulations
            </h3>
            <p className="text-slate-400 mt-2">
              All content verified against current FAA regulations and guidelines
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="inline-block p-3 bg-brand-teal/10 rounded-lg mb-3">
              <Award className="w-6 h-6 text-brand-teal" />
            </div>
            <h3 className="text-2xl font-bold">
              Veteran-Designed & Developed
            </h3>
            <p className="text-slate-400 mt-2">
              Built by U.S. military veterans who bring mission-grade discipline and precision to every feature
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
