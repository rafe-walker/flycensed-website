'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export function BlogSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4">From the Blog</h2>
          <p className="text-slate-400 text-lg mb-8">Expert insights to help you pass your Part 107 exam</p>
          <div className="accent-line" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
        >
          {[
            {
              title: 'Free Part 107 Practice Test: 20 Questions with Answers',
              description: 'Test your knowledge with our free 20-question practice test covering all five exam areas.',
              slug: 'part-107-practice-test',
              category: 'Practice Tests',
            },
            {
              title: 'How to Pass the Part 107 Exam in 2026: Complete Study Guide',
              description: 'The ultimate guide covering what the exam tests, how to study effectively, and insider tips for success.',
              slug: 'how-to-pass-part-107-exam',
              category: 'Study Guide',
            },
            {
              title: 'How to Read a METAR for the Part 107 Exam (With Examples)',
              description: 'Master METAR decoding with real examples and learn to make safe flight decisions based on weather data.',
              slug: 'how-to-read-metar-part-107',
              category: 'Weather',
            },
          ].map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="block bg-brand-card/50 border border-brand-card rounded-xl p-6 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/10 group cursor-pointer"
              >
                <div className="inline-block mb-3">
                  <div className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full">
                    {post.category}
                  </div>
                </div>
                <h3 className="text-lg font-bold mb-3 text-slate-200 group-hover:text-brand-teal transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>
                <div className="inline-flex items-center gap-2 text-brand-teal font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-card text-brand-teal font-bold rounded-lg border border-brand-teal/30 hover:bg-brand-card/80 transform hover:scale-105 transition-all"
          >
            Explore All Blog Posts
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
