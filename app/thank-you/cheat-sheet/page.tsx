import type { Metadata } from 'next'
import ThankYouTemplate from '../ThankYouTemplate'

export const metadata: Metadata = {
  title: 'Download Your Cheat Sheet | Flycensed',
  robots: 'noindex, nofollow',
}

const config = {
  name: 'Part 107 Cheat Sheet',
  tagline: 'Quick Reference Guide for Exam Day',
  downloadPath: '/downloads/Flycensed-Part107-Cheat-Sheet.pdf',
  downloadFilename: 'Flycensed Part 107 Cheat Sheet.pdf',
  pageCount: '15',
  icon: '⚡',
  tips: [
    'Print and laminate for a durable reference you can use anywhere',
    'Review the Quick Numbers Reference table right before your exam',
    'Keep a copy in your drone bag for field reference',
    'Use the topic headers to quickly find specific regulations',
  ],
  upsellProducts: [
    { name: 'Part 107 Flashcard Deck (485 cards)', href: '/store', price: '$12.99' },
    { name: 'Part 107 Practice Exams (197 questions)', href: '/store', price: '$9.99' },
    { name: 'Part 107 Complete Study Guide', href: '/store', price: '$14.99' },
  ],
}

export default function CheatSheetThankYou() {
  return <ThankYouTemplate config={config} />
}
