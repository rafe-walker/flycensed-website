'use client'

import { motion } from 'framer-motion'

export function FeatureDeepDiveSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Deep Dive</h2>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          {[
            {
              title: 'Dashboard',
              subtitle: 'Your Command Center',
              description: 'Readiness score, proficiency tracking, streak counter, and daily reminders all in one beautiful dashboard.',
              screenshot: '/screenshots/main_dashboard.png',
            },
            {
              title: 'Flashcards',
              subtitle: '485 Cards. A/B/C Format. 5 Study Modes.',
              description: 'SM-2 spaced repetition algorithm ensures you remember everything. Study by topic, difficulty, or custom decks.',
              screenshot: '/screenshots/flashcards_answered.png',
            },
            {
              title: 'METAR Tools',
              subtitle: 'Decode Weather Like a Pro',
              description: 'Interactive METAR decoder, weather generator, and proficiency tracking. Master weather interpretation with our exclusive tools.',
              screenshot: '/screenshots/METAR_mid_solve.png',
            },
            {
              title: 'Scenarios',
              subtitle: 'Find the Violations',
              description: 'Multi-rule scenarios with decision chains. Make judgment calls like you\'re planning a real flight.',
              screenshot: '/screenshots/mid_3_error_scenarios.png',
            },
            {
              title: 'Study Plan',
              subtitle: 'Custom Plans That Fit Your Schedule',
              description: 'Set your exam date and we build a personalized plan. 7-day intensive to 30-day comprehensive, or custom with calendar picker.',
              screenshot: '/screenshots/studyplan_calendar_custom_date.png',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className={`flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-12 items-center`}
            >
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                <p className="text-brand-teal font-semibold text-lg mb-4">
                  {feature.subtitle}
                </p>
                <p className="text-slate-400 text-lg leading-relaxed">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-gradient-to-br from-brand-teal/5 to-cyan-500/5 rounded-2xl p-3 border border-brand-teal/20 hover:border-brand-teal/40 transition-colors shadow-lg shadow-brand-teal/5 max-w-[280px]">
                  <img
                    src={feature.screenshot}
                    alt={`${feature.title} screenshot`}
                    className="rounded-xl w-full h-auto"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
