import type { Metadata } from 'next'
import ThankYouTemplate from '../ThankYouTemplate'

export const metadata: Metadata = {
  title: 'Download Your Study Guide | Flycensed',
  robots: 'noindex, nofollow',
}

const config = {
  name: 'Part 107 Complete Study Guide',
  tagline: '20 Chapters Covering Every Exam Topic',
  downloadPath: '/downloads/Flycensed-Part107-Study-Guide.pdf',
  downloadFilename: 'Flycensed Part 107 Study Guide.pdf',
  pageCount: '61',
  icon: '📖',
  tips: [
    'Start with chapters in your weakest areas — use the table of contents to navigate',
    'Pay special attention to the highlighted Key Facts boxes in each section',
    'Read one chapter per day for a steady 20-day study plan',
    'Combine with practice exams to test your retention after each chapter',
  ],
  upsellProducts: [
    { name: 'Part 107 Practice Exams (197 questions)', href: '/store', price: '$9.99' },
    { name: 'Part 107 Flashcard Deck (485 cards)', href: '/store', price: '$12.99' },
    { name: 'Part 107 Cheat Sheet (quick reference)', href: '/store', price: '$4.99' },
  ],
}

export default function StudyGuideThankYou() {
  return <ThankYouTemplate config={config} />
}
