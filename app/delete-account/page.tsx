'use client'

import Link from 'next/link'

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-[#2DD4BF] hover:text-cyan-400 text-sm font-semibold mb-8 inline-block">
          &larr; Back to Flycensed
        </Link>

        <h1 className="text-4xl font-black mb-2">Delete Your Account</h1>
        <p className="text-slate-500 mb-12">Last updated: March 20, 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <p>
              If you would like to delete your Flycensed account and all associated data, you can do so by following the steps below.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Option 1: Delete from the App</h2>
            <p>
              Open the Flycensed app &rarr; Settings &rarr; scroll to the bottom &rarr; tap <strong className="text-slate-300">&quot;Reset Progress&quot;</strong> to clear all local data. If you have an account, tap <strong className="text-slate-300">&quot;Sign Out&quot;</strong> to disconnect from our servers.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Option 2: Request Deletion via Email</h2>
            <p className="mb-4">
              Send an email to <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400 font-semibold">privacy@flycensed.com</a> with the subject line <strong className="text-slate-300">&quot;Delete My Account&quot;</strong> and include the email address associated with your account.
            </p>
            <p>
              We will process your request within <strong className="text-slate-300">30 days</strong> and send confirmation once your account and all associated data have been permanently deleted.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">What Gets Deleted</h2>
            <p>When your account is deleted, we permanently remove:</p>
            <ul className="list-disc list-inside mt-3 space-y-1">
              <li>Your email address and account credentials</li>
              <li>All study progress data (flashcard mastery, quiz scores, streaks)</li>
              <li>Study plan selections and completion history</li>
              <li>METAR proficiency records</li>
              <li>Any synced data on our servers</li>
            </ul>
            <p className="mt-4">
              <strong className="text-slate-300">Note:</strong> Data stored only on your device (if you never created an account) is not on our servers and can be cleared by uninstalling the app or using the Reset Progress option in Settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Questions?</h2>
            <p>
              Contact us at <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">privacy@flycensed.com</a> with any questions about data deletion.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-[#1E293B] text-slate-500 text-sm">
          <p>&copy; 2026 Stormhaven Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
