'use client'

import Link from 'next/link'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-[#2DD4BF] hover:text-cyan-400 text-sm font-semibold mb-8 inline-block">
          ← Back to Flycensed
        </Link>

        <h1 className="text-4xl font-black mb-2">Privacy Policy</h1>
        <p className="text-slate-500 mb-12">Last updated: March 19, 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <p>
              Flycensed (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is operated by Stormhaven Enterprises LLC. This privacy policy describes how we handle your information when you use the Flycensed mobile application and website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Information We Collect</h2>
            <p className="mb-3">
              <strong className="text-slate-300">Account Information:</strong> If you create an account, we collect your email address and password (stored securely via Supabase authentication with industry-standard encryption).
            </p>
            <p className="mb-3">
              <strong className="text-slate-300">Study Progress:</strong> Your flashcard mastery, quiz scores, study plan completion, METAR proficiency, and streak data are stored locally on your device and optionally synced to our servers if you create an account.
            </p>
            <p>
              We do <strong className="text-slate-300">NOT</strong> collect your location, contacts, photos, browsing history, or any personal data beyond what you provide during account creation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">How We Use Your Information</h2>
            <p className="mb-3">
              Your data is used solely to provide the study experience: tracking your progress, calculating your readiness score, and syncing between devices if you choose to sign in.
            </p>
            <p>
              We do not sell your data to third parties. We do not serve ads. We do not share your information with anyone.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Data Storage</h2>
            <p className="mb-3">
              <strong className="text-slate-300">Local Data:</strong> Study progress is stored on your device using encrypted local storage. This data persists between app sessions and does not require an internet connection.
            </p>
            <p>
              <strong className="text-slate-300">Cloud Data:</strong> If you create an account, your progress is also stored on Supabase servers (hosted in the United States) to enable cross-device sync. Your data is protected by row-level security — only you can access your own records.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Data Deletion</h2>
            <p className="mb-3">
              You can delete all local study progress at any time through Settings → Reset All Progress within the app.
            </p>
            <p>
              To delete your account and all associated cloud data, contact us at <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">privacy@flycensed.com</a> and we will process your request within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong className="text-slate-300">Supabase</strong> — Authentication and cloud data storage</li>
              <li><strong className="text-slate-300">Apple App Store / Google Play</strong> — App distribution and in-app purchases</li>
              <li><strong className="text-slate-300">Vercel</strong> — Website hosting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Children&apos;s Privacy</h2>
            <p>
              Flycensed is intended for users aged 16 and older (the minimum age for a Part 107 certificate). We do not knowingly collect information from children under 13. If we learn that we have collected personal data from a child under 13, we will delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any time. You may also request a copy of all data we hold about you. Contact <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">privacy@flycensed.com</a> for any privacy-related requests.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. Changes will be posted on this page and within the app, and the &quot;last updated&quot; date will be revised. Continued use of the app after changes constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">Contact Us</h2>
            <p>
              Stormhaven Enterprises LLC<br />
              Cochise County, Arizona<br />
              Email: <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">privacy@flycensed.com</a>
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 text-center text-slate-600 text-sm">
          <p>© 2026 Stormhaven Enterprises LLC. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
