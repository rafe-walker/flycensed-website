'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  Play,
  Brain,
  BarChart3,
  Rocket,
  Apple,
  Globe,
  Target,
  Award,
  Clock,
  CheckCircle,
  Menu,
  X,
  ArrowRight,
} from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' as const },
  },
}

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

const slideUpVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-brand-card/30">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-brand-teal" />
            <span className="text-xl font-bold">
              <span className="text-brand-teal">FLY</span>
              <span className="text-brand-cream">CENSED</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {[
              { label: 'Features', id: 'features' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-brand-teal transition-colors"
              >
                {item.label}
              </button>
            ))}
            <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
              Blog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-teal"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-brand-card/50 border-t border-brand-card/30 px-4 py-4 flex flex-col gap-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { label: 'Features', id: 'features' },
              { label: 'Pricing', id: 'pricing' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-slate-300 hover:text-brand-teal transition-colors text-left"
              >
                {item.label}
              </button>
            ))}
            <Link href="/blog" className="text-slate-300 hover:text-brand-teal transition-colors">
              Blog
            </Link>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-end justify-center relative overflow-hidden pb-24"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
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
          <motion.div variants={itemVariants} className="mb-8">
            {/* Logo — uncomment when true transparent PNG is available
            <img
              src="/logo-transparent.png"
              alt="Flycensed Logo"
              className="w-32 h-32 mx-auto mb-6"
            />
            */}
            <div className="inline-block">
              <h1 className="text-6xl md:text-7xl font-black leading-tight mb-2">
                <span className="text-brand-teal">FLY</span>
                <span className="text-brand-cream ml-3">CENSED</span>
              </h1>
            </div>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-slate-200 mb-6"
          >
            Pass Your FAA Part 107 Exam With Confidence
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto"
          >
            The most comprehensive drone pilot exam prep — built by pilots, for pilots
          </motion.p>

          <motion.div
            variants={itemVariants}
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

          <motion.div variants={itemVariants} className="flex justify-center">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-8 h-8 text-brand-teal" />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section
        className="py-20 px-4 bg-gradient-to-b from-brand-dark to-brand-card/30 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Problem</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="bg-brand-card/50 border border-red-500/20 rounded-2xl p-8 md:p-12 mb-12"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <div className="text-5xl md:text-6xl font-black text-red-400 mb-2">
                1 in 6
              </div>
              <div className="text-xl text-slate-300">people fail the Part 107 exam</div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
            >
              {[
                { stat: '84.2%', label: 'Pass Rate Gap' },
                { stat: '79.95%', label: 'Average Score' },
                { stat: '10,700+', label: 'Failures in 2024' },
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="text-center">
                  <CountUpAnimation target={parseInt(item.stat)} duration={2} />
                  <div className="text-slate-400">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 text-center"
            >
              Most study apps are just question banks with outdated content. The FAA tests{' '}
              <span className="text-brand-teal font-bold">APPLICATION</span>, not memorization.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Solution Section */}
      <motion.section
        id="features"
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Flycensed teaches you to <span className="text-brand-teal">THINK</span> like a pilot
            </h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                title: 'Structured Study Plans',
                description: '4 pace options, custom exam date, daily checkoffs',
                icon: Target,
              },
              {
                title: 'Interactive METAR Tools',
                description: 'Decoder, generator, quiz mode. No other app has this.',
                icon: Cloud,
              },
              {
                title: 'Scenario-Based Training',
                description: 'Violation finder, decision chains, real-world judgment',
                icon: Brain,
              },
              {
                title: 'Readiness Score',
                description: 'Know exactly when you\'re prepared with our 5-component algorithm',
                icon: BarChart3,
              },
            ].map((feature, i) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  className="bg-brand-card/50 border border-brand-card hover:border-brand-teal/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/10 group cursor-pointer"
                >
                  <div className="mb-4 inline-block p-3 bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-400">{feature.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Feature Deep Dive */}
      <motion.section
        className="py-20 px-4 bg-brand-card/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Feature Deep Dive</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-16">
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
                variants={itemVariants}
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

      {/* By The Numbers */}
      <motion.section
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-cyan-500/5" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
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
                variants={itemVariants}
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

      {/* How It Works */}
      <motion.section
        className="py-20 px-4 bg-brand-card/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How It Works</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
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
                  variants={itemVariants}
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

      {/* Pricing section removed — merged into Final CTA below */}

      {/* Credibility */}
      <motion.section
        className="py-20 px-4 bg-brand-card/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            className="space-y-8 text-center"
          >
            <motion.div variants={itemVariants}>
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

            <motion.div variants={itemVariants}>
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

            <motion.div variants={itemVariants}>
              <div className="inline-block p-3 bg-brand-teal/10 rounded-lg mb-3">
                <Award className="w-6 h-6 text-brand-teal" />
              </div>
              <h3 className="text-2xl font-bold">
                Built by Stormhaven Enterprises LLC
              </h3>
              <p className="text-slate-400 mt-2">
                Developed by drone pilots and aviation professionals at Stronghold Precision Aerials
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* From the Blog */}
      <motion.section
        className="py-20 px-4 bg-brand-card/20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">From the Blog</h2>
            <p className="text-slate-400 text-lg mb-8">Expert insights to help you pass your Part 107 exam</p>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
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
                variants={itemVariants}
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

          <motion.div variants={itemVariants} className="text-center">
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

      {/* FAQ */}
      <motion.section
        id="faq"
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-3xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div variants={containerVariants} className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
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

      {/* Final CTA */}
      <motion.section
        className="py-32 md:py-40 px-4 relative overflow-hidden min-h-[80vh] flex items-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
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
          <motion.div variants={slideUpVariants}>
            <h2 className="text-3xl md:text-5xl font-black text-slate-200 mb-4">
              Ready to get <span className="text-brand-teal">FLY</span><span className="text-brand-cream">CENSED</span>? 🚀
            </h2>
          </motion.div>
          <motion.p
            variants={itemVariants}
            className="text-lg text-slate-400 mb-12"
          >
            Join 59,000+ drone pilots who get certified every year
          </motion.p>

          {/* Pricing Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14 max-w-3xl mx-auto" id="pricing">
            <div className="bg-brand-dark/80 backdrop-blur-sm border border-slate-600/50 rounded-2xl p-8 text-left">
              <div className="text-lg font-bold text-brand-teal mb-1">FREE</div>
              <div className="text-slate-400 mb-6">Free Forever</div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />100 Flashcards</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />1 Practice Test</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />Basic Dashboard</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />Mobile App Access</li>
              </ul>
              <button className="w-full mt-8 py-3 rounded-lg font-bold bg-brand-card text-brand-teal border border-brand-teal/30 hover:bg-brand-card/80 transition-colors">Get Started Free</button>
            </div>
            <div className="bg-brand-dark/80 backdrop-blur-sm border-2 border-brand-teal/60 rounded-2xl p-8 text-left relative">
              <div className="absolute -top-4 right-6 bg-brand-teal text-brand-dark px-4 py-1 rounded-full text-sm font-bold">BEST VALUE</div>
              <div className="text-lg font-bold text-brand-teal mb-1">PRO</div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-4xl font-black text-brand-teal">$14.99</span>
                <span className="text-slate-500">one-time</span>
              </div>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />485 Flashcards + 5 Study Modes</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />201 Practice Questions</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />METAR Tools & Scenarios</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />Readiness Score & Analytics</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />11 Decision Chains</li>
                <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />Offline Access</li>
              </ul>
              <button className="w-full mt-8 py-3 rounded-lg font-bold bg-brand-teal text-brand-dark hover:bg-cyan-400 transition-colors btn-glow">Get Pro — $14.99</button>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
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

          {/* Clean CTA without email signup */}
        </div>
      </motion.section>

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
            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Rocket className="w-5 h-5 text-brand-teal" />
                Flycensed
              </h4>
              <p className="text-slate-400 text-sm">
                The most comprehensive FAA Part 107 exam prep app
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#features" className="hover:text-brand-teal transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#pricing" className="hover:text-brand-teal transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-brand-teal transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-brand-teal transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="mailto:support@flycensed.com" className="hover:text-brand-teal transition-colors">
                    support@flycensed.com
                  </a>
                </li>
                <li>
                  <a href="mailto:press@flycensed.com" className="hover:text-brand-teal transition-colors">
                    press@flycensed.com
                  </a>
                </li>
                <li>
                  <a href="mailto:privacy@flycensed.com" className="hover:text-brand-teal transition-colors">
                    privacy@flycensed.com
                  </a>
                </li>
              </ul>
              <h4 className="font-bold mb-4 mt-6">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="/privacy" className="hover:text-brand-teal transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:text-brand-teal transition-colors">
                    Terms of Service
                  </a>
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

// Counter Animation Component
function CountUpAnimation({
  target,
  duration = 2,
}: {
  target: number
  duration: number
}) {
  const [count, setCount] = useState(0)

  useState(() => {
    let start = 0
    const increment = target / (duration * 60) // Assuming 60fps
    const interval = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(start))
      }
    }, 1000 / 60)
    return () => clearInterval(interval)
  })

  return (
    <div className="text-4xl md:text-5xl font-black text-brand-teal">
      {count.toLocaleString()}%
    </div>
  )
}

// Cloud Icon
function Cloud(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
    </svg>
  )
}
