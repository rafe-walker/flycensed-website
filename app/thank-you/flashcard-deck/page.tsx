import type { Metadata } from 'next'
import ThankYouTemplate from '../ThankYouTemplate'

export const metadata: Metadata = {
  title: 'Download Your Flashcard Deck | Flycensed',
  robots: 'noindex, nofollow',
}

const config = {
  name: 'Part 107 Flashcard Deck',
  tagline: '485 Cards Across 8 Exam Topics',
  downloadPath: '/downloads/Flycensed-Part107-Flashcard-Deck.pdf',
  downloadFilename: 'Flycensed Part 107 Flashcard Deck.pdf',
  pageCount: '91',
  icon: '🗂',
  tips: [
    'Print double-sided to save paper — each category starts on a new page',
    'Study one category at a time for focused learning sessions',
    'Use the checkmarks to track which answers you already know',
    'Pair with the Flycensed app for interactive quiz mode',
  ],
  upsellProducts: [
    { name: 'Part 107 Practice Exams (197 questions)', href: '/store', price: '$9.99' },
    { name: 'Part 107 Cheat Sheet (quick reference)', href: '/store', price: '$4.99' },
    { name: 'Part 107 Complete Study Guide', href: '/store', price: '$14.99' },
  ],
}

export default function FlashcardDeckThankYou() {
  return <ThankYouTemplate config={config} />
}
