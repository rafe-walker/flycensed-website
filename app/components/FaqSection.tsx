'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export function FaqSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const faqItems = [
    {
      q: 'How many questions are on the FAA Part 107 exam?',
      a: 'The FAA Part 107 exam has 60 questions covering airspace, regulations, weather, aircraft performance, and decision-making. You need to score 70% or higher to pass.',
    },
    {
      q: 'Do I need flight experience to use Flycensed?',
      a: 'No! Flycensed is designed for complete beginners and experienced pilots alike. Our structured lessons build from fundamentals to advanced concepts.',
    },
    {
      q: 'How long should I study before taking the exam?',
      a: 'Most users pass in 4-6 weeks of consistent study. Flycensed adapts to your schedule with plans ranging from 2 weeks to 3 months.',
    },
    {
      q: 'What\'s the average pass rate for Flycensed users?',
      a: 'Our users achieve an 84.2% pass rate on their first attempt, compared to the national average of 66%. The key is understanding concepts, not just memorization.',
    },
    {
      q: 'Is the content up to date with current regulations?',
      a: 'Yes. All content is verified against the latest FAA regulations as of March 2026. We update quarterly to reflect regulatory changes.',
    },
    {
      q: 'Does Flycensed work offline?',
      a: 'Pro users can download lesson content and flashcards for offline access. This is perfect for studying during flights or in areas without connectivity.',
    },
  ]

  return (
    <motion.section
      id="faq"
      className="py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          {faqItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-brand-card/50 border border-brand-card rounded-lg overflow-hidden hover:border-brand-teal/30 transition-colors"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-brand-card/70 transition-colors"
              >
                <h3 className="font-bold text-left text-slate-200">{item.q}</h3>
                <motion.div
                  animate={{ rotate: openFaq === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-brand-teal flex-shrink-0" />
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openFaq === i ? 'auto' : 0,
                  opacity: openFaq === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 text-slate-400 border-t border-brand-card/30">
                  {item.a}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
