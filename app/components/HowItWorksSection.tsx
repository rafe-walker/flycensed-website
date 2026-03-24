'use client'

import { motion } from 'framer-motion'
import { Target, Brain, Award } from 'lucide-react'

export function HowItWorksSection() {
  return (
    <motion.section
      className="py-20 px-4 bg-brand-card/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4"
        >
          {[
            {
              step: '1',
              title: 'Pick Your Plan',
              description: 'Choose from 4 study paces tailored to your schedule',
              icon: Target,
            },
            {
              step: '2',
              title: 'Study Smart',
              description: 'Use interactive lessons, flashcards, and scenarios',
              icon: Brain,
            },
            {
              step: '3',
              title: 'Pass Your Exam',
              description: 'Take practice tests and pass with confidence',
              icon: Award,
            },
          ].map((item, i) => {
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className="relative text-center"
              >
                <div className="inline-block relative mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-teal to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-3xl font-black text-brand-dark">
                      {item.step}
                    </span>
                  </div>
                </div>

                {i < 2 && (
                  <div className="hidden md:block absolute top-10 left-1/2 w-1/3 h-1 bg-gradient-to-r from-brand-teal/50 to-transparent" />
                )}

                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400">{item.description}</p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
