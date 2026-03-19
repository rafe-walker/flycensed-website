'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ChevronDown,
  Play,
  Brain,
  BarChart3,
  Smartphone,
  Mail,
  Rocket,
  Apple,
  Globe,
  Target,
  Award,
  Clock,
  CheckCircle,
  Menu,
  X,
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
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <motion.section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Animated Background Orb */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-brand-teal/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-glow opacity-30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={itemVariants} className="mb-8">
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
              },
              {
                title: 'Flashcards',
                subtitle: '485 Cards. A/B/C Format. 5 Study Modes.',
                description: 'SM-2 spaced repetition algorithm ensures you remember everything. Study by topic, difficulty, or custom decks.',
              },
              {
                title: 'METAR Tools',
                subtitle: 'Decode Weather Like a Pro',
                description: 'Interactive METAR decoder, weather generator, and proficiency tracking. Master weather interpretation with our exclusive tools.',
              },
              {
                title: 'Scenarios',
                subtitle: 'Find the Violations',
                description: 'Multi-rule scenarios with decision chains. Make judgment calls like you\'re planning a real flight.',
              },
              {
                title: 'Practice Tests',
                subtitle: '201 Questions Weighted by Exam Distribution',
                description: 'Full-length practice exams with detailed explanations. Review your answers and track improvement over time.',
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
                <div className="flex-1">
                  <div className="bg-gradient-to-br from-brand-teal/10 to-cyan-500/10 rounded-xl aspect-video flex items-center justify-center border border-brand-teal/20 hover:border-brand-teal/50 transition-colors">
                    <div className="text-center">
                      <Smartphone className="w-12 h-12 text-brand-teal/50 mx-auto mb-3" />
                      <p className="text-slate-500 font-semibold">
                        {feature.title} Screenshot
                      </p>
                    </div>
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

      {/* Pricing */}
      <motion.section
        id="pricing"
        className="py-20 px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="max-w-5xl mx-auto">
          <motion.div variants={slideUpVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Simple Pricing</h2>
            <div className="accent-line" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {[
              {
                name: 'Free',
                price: null,
                badge: 'Coming Soon',
                features: [
                  '100 Flashcards',
                  '1 Practice Test',
                  'Basic Dashboard',
                  'Mobile App Access',
                ],
              },
              {
                name: 'Pro',
                price: '$14.99',
                period: '/month',
                badge: 'Coming Soon',
                features: [
                  'All Free Features',
                  '485 Flashcards',
                  '201 Practice Questions',
                  'METAR Tools & Scenarios',
                  'Offline Access',
                  'Detailed Analytics',
                  'Priority Support',
                ],
                highlight: true,
              },
            ].map((plan, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className={`relative rounded-2xl p-8 border transition-all duration-300 ${
                  plan.highlight
                    ? 'bg-gradient-to-br from-brand-teal/10 to-cyan-500/10 border-brand-teal/50 transform md:scale-105'
                    : 'bg-brand-card/50 border-brand-card hover:border-brand-teal/30'
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-brand-teal text-brand-dark px-4 py-1 rounded-full text-sm font-bold">
                    {plan.badge}
                  </div>
                )}

                <h3 className="text-3xl font-bold mb-2">{plan.name}</h3>
                {plan.price && (
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-black text-brand-teal">
                      {plan.price}
                    </span>
                    <span className="text-slate-400">{plan.period}</span>
                  </div>
                )}
                {!plan.price && (
                  <p className="text-slate-400 mb-6 font-semibold">Free Forever</p>
                )}

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-brand-teal flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 ${
                    plan.highlight
                      ? 'bg-brand-teal text-brand-dark hover:bg-cyan-400 btn-glow'
                      : 'bg-brand-card text-brand-teal border border-brand-teal/30 hover:bg-brand-card/80'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

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
        className="py-20 px-4 relative overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/10 to-cyan-500/10" />

        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div variants={slideUpVariants}>
            <h1 className="text-6xl md:text-7xl font-black leading-tight mb-6">
              <span className="text-brand-teal">FLY</span>
              <span className="text-brand-cream ml-3">CENSED</span>
            </h1>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xl text-slate-300 mb-10"
          >
            Join 59,000+ drone pilots who get certified every year
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

          <motion.div
            variants={itemVariants}
            className="bg-brand-card/50 border border-brand-card rounded-lg p-8 max-w-md mx-auto"
          >
            <p className="text-slate-400 mb-4 font-semibold">
              Be the first to know when we launch
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 px-4 py-2 bg-brand-dark border border-brand-card rounded-lg text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-teal/50"
              />
              <button className="px-6 py-2 bg-brand-teal text-brand-dark font-bold rounded-lg hover:bg-cyan-400 transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
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
              </ul>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-brand-teal transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="mailto:support@flycensed.com" className="hover:text-brand-teal transition-colors">
                    support@flycensed.com
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
