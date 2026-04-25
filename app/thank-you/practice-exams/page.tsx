import type { Metadata } from 'next'
import ThankYouTemplate from '../ThankYouTemplate'

export const metadata: Metadata = {
  title: 'Download Your Practice Exams | Flycensed',
  robots: 'noindex, nofollow',
}

const config = {
  name: 'Part 107 Practice Exams',
  tagline: '3 Full Exams + 17 Bonus Questions',
  downloadPath: '/downloads/Flycensed-Part107-Practice-Exams.pdf',
  downloadFilename: 'Flycensed Part 107 Practice Exams.pdf',
  pageCount: '41',
  icon: '📝',
  tips: [
    'Time yourself — the real exam gives you 120 minutes for 60 questions',
    'Take each exam without looking at answers first, then check your score',
    'You need 70% (42/60) to pass — aim for 80%+ on practice for confidence',
    'Review the detailed explanations for every question you miss',
  ],
  upsellProducts: [
    { name: 'Part 107 Flashcard Deck (485 cards)', href: '/store', price: '$12.99' },
    { name: 'Part 107 Complete Study Guide', href: '/store', price: '$14.99' },
    { name: 'Part 107 Cheat Sheet (quick reference)', href: '/store', price: '$4.99' },
  ],
}

export default function PracticeExamsThankYou() {
  return <ThankYouTemplate config={config} />
}
