'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Calendar, Clock, Tag, Rocket } from 'lucide-react'
import { blogPosts } from './posts'

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)))

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? blogPosts.filter(post => post.category === selectedCategory)
    : blogPosts

  // Sort by date (newest first)
  const sortedPosts = [...filteredPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-card/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-brand-teal" />
            <span className="text-xl font-bold">
              <span className="text-brand-teal">FLY</span>
              <span className="text-brand-cream">CENSED</span>
            </span>
          </Link>
          <Link
            href="/"
            className="text-slate-300 hover:text-brand-teal transition-colors text-sm md:text-base"
          >
            Back to Home
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center pt-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mb-8"
          >
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
              <span className="text-brand-teal">Flycensed</span>
              <span className="text-brand-cream ml-3">Blog</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-slate-300 mb-4"
          >
            Expert tips, study strategies, and everything you need to pass your Part 107 exam
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto"
          >
            Deep-dive guides on regulations, weather interpretation, exam prep, and night operations. Written by drone pilots for drone pilots.
          </motion.p>

          <div className="accent-line mt-8" />
        </div>
      </section>

      {/* Category Filter */}
      <motion.section
        className="py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                selectedCategory === null
                  ? 'bg-brand-teal text-brand-dark'
                  : 'bg-brand-card text-slate-300 hover:bg-brand-card/80 border border-brand-card/30'
              }`}
            >
              All Posts
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-brand-teal text-brand-dark'
                    : 'bg-brand-card text-slate-300 hover:bg-brand-card/80 border border-brand-card/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Blog Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {sortedPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-400 text-lg">No posts found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedPosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-brand-card/50 border border-brand-card rounded-xl overflow-hidden hover:border-brand-teal/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/10 group flex flex-col"
                >
                  {/* Featured Image */}
                  {post.featuredImage && (
                    <div className="w-full h-48 overflow-hidden">
                      <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                  )}

                  {/* Category Badge */}
                  <div className="px-6 pt-6">
                    <div className="inline-block">
                      <div className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full flex items-center gap-2">
                        <Tag className="w-3 h-3" />
                        {post.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 py-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-brand-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-slate-400 text-sm mb-4 flex-1 line-clamp-2">
                      {post.description}
                    </p>

                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-6">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="py-20 px-4 bg-brand-card/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Ready to Master Part 107?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-slate-400 mb-8 text-lg"
          >
            These blog posts provide valuable knowledge, but structured learning accelerates your progress. Flycensed combines lessons, practice questions, interactive METAR tools, and scenario training to prepare you for exam success.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-lg hover:bg-cyan-400 transform hover:scale-105 transition-all btn-glow">
              Download Flycensed
            </button>
            <Link
              href="/"
              className="px-8 py-4 bg-brand-card text-brand-teal font-bold rounded-lg border border-brand-teal/30 hover:bg-brand-card/80 transform hover:scale-105 transition-all"
            >
              Back to Home
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        className="border-t border-brand-card/30 bg-brand-card/10 py-12 px-4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <p className="mb-2">
            © 2026 Stormhaven Enterprises LLC. All rights reserved.
          </p>
          <p>
            Built by drone pilots at{' '}
            <span className="text-brand-teal font-semibold">Stronghold Precision Aerials</span>
          </p>
        </div>
      </motion.footer>
    </div>
  )
}
