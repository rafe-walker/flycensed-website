'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, Apple, Play, Calendar, Clock, Tag, Rocket } from 'lucide-react'
import { blogPosts } from '../posts'

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string

  const post = blogPosts.find(p => p.slug === slug)

  if (!post) {
    return (
      <div className="min-h-screen bg-brand-dark flex items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-200 mb-4">Post Not Found</h1>
          <p className="text-slate-400 mb-8">Sorry, this blog post does not exist.</p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:gap-3 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

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
            href="/blog"
            className="flex items-center gap-2 text-slate-300 hover:text-brand-teal transition-colors text-sm md:text-base"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
      </nav>

      {/* Article Container */}
      <article className="pt-32 pb-20 px-4">
        <motion.div
          className="max-w-3xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInVariants}
        >
          {/* Header */}
          <motion.div variants={slideUpVariants} className="mb-12">
            {/* Category Badge */}
            <div className="inline-block mb-6">
              <div className="px-3 py-1 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full flex items-center gap-2">
                <Tag className="w-3 h-3" />
                {post.category}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6 text-slate-200">
              {post.title}
            </h1>

            {/* Metadata */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 text-slate-400 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-brand-teal" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-teal" />
                <span>{post.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <span>By {post.author}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-xl text-slate-300 leading-relaxed">
              {post.description}
            </p>

            <div className="accent-line mt-8" />
          </motion.div>

          {/* Article Content */}
          <motion.div
            className="article-content text-slate-300 leading-relaxed"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInVariants}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <motion.div
            className="mt-20 pt-12 border-t border-brand-card/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
          >
            <div className="bg-brand-card/50 border border-brand-teal/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-slate-200">
                Ready to pass your Part 107 exam?
              </h3>
              <p className="text-slate-400 mb-8 text-lg leading-relaxed">
                This guide gives you valuable knowledge, but mastering the entire exam requires structured learning. Flycensed provides 485 flashcards, 201 practice questions, interactive METAR tools, scenario-based training, and personalized study plans. Our users achieve an 84.2% pass rate on their first attempt.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-brand-teal text-brand-dark font-bold rounded-lg flex items-center justify-center gap-2 btn-glow hover:bg-cyan-400 transform hover:scale-105">
                  <Apple className="w-5 h-5" />
                  Download on App Store
                </button>
                <button className="px-8 py-4 bg-brand-card text-brand-teal font-bold rounded-lg flex items-center justify-center gap-2 border border-brand-teal/30 hover:bg-brand-card/80 transform hover:scale-105">
                  <Play className="w-5 h-5" />
                  Get on Google Play
                </button>
              </div>
            </div>
          </motion.div>

          {/* Related Posts */}
          <motion.div
            className="mt-20 pt-12 border-t border-brand-card/30"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={slideUpVariants}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-slate-200">
              More Blog Posts
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== slug)
                .slice(0, 4)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-brand-card/50 border border-brand-card rounded-xl p-6 hover:border-brand-teal/50 transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/10"
                  >
                    <div className="inline-block mb-3">
                      <div className="px-2 py-1 bg-brand-teal/20 text-brand-teal text-xs font-bold rounded-full">
                        {relatedPost.category}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-slate-200 group-hover:text-brand-teal transition-colors mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h4>
                    <p className="text-slate-400 text-sm mb-4 line-clamp-1">
                      {relatedPost.description}
                    </p>
                    <div className="flex items-center gap-2 text-brand-teal text-sm font-semibold group-hover:gap-3 transition-all">
                      Read More
                      <span>→</span>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      </article>

      {/* Footer */}
      <motion.footer
        className="border-t border-brand-card/30 bg-brand-card/10 py-12 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInVariants}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <motion.div variants={slideUpVariants}>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-brand-teal" />
                Flycensed
              </h4>
              <p className="text-slate-400 text-sm">
                The most comprehensive FAA Part 107 exam prep app
              </p>
            </motion.div>

            <motion.div variants={slideUpVariants}>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <Link href="/" className="hover:text-brand-teal transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-teal transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-brand-teal transition-colors">
                    Pricing
                  </a>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={slideUpVariants}>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="mailto:support@flycensed.com" className="hover:text-brand-teal transition-colors">
                    support@flycensed.com
                  </a>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-brand-teal transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-brand-teal transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </motion.div>
          </div>

          <div className="border-t border-brand-card/30 pt-8 text-center text-slate-500 text-sm">
            <p className="mb-2">
              © 2026 Stormhaven Enterprises LLC. All rights reserved.
            </p>
            <p>
              Built by drone pilots at{' '}
              <span className="text-brand-teal font-semibold">Stronghold Precision Aerials</span>
            </p>
          </div>
        </div>
      </motion.footer>
    </div>
  )
}
