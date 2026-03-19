'use client'

import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-slate-200">
      <div className="max-w-3xl mx-auto px-4 py-16">
        <Link href="/" className="text-[#2DD4BF] hover:text-cyan-400 text-sm font-semibold mb-8 inline-block">
          ← Back to Flycensed
        </Link>

        <h1 className="text-4xl font-black mb-2">Terms of Service</h1>
        <p className="text-slate-500 mb-12">Last updated: March 19, 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <p>
              Welcome to Flycensed. By downloading, installing, or using the Flycensed mobile application or website (&quot;Service&quot;), you agree to these Terms of Service (&quot;Terms&quot;). If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">1. Description of Service</h2>
            <p>
              Flycensed is an educational study tool designed to help users prepare for the FAA Part 107 Remote Pilot Certificate knowledge exam. The Service provides flashcards, practice questions, interactive METAR tools, scenario-based training, study plans, and progress tracking.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">2. Educational Disclaimer</h2>
            <p className="mb-3">
              Flycensed is a <strong className="text-slate-300">study aid only</strong>. We do not guarantee that using our app will result in passing the FAA Part 107 exam. The content is based on official FAA study materials and current regulations, but:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Our practice questions are not actual FAA test questions</li>
              <li>FAA regulations may change after our last content update</li>
              <li>Exam content and format are determined solely by the FAA</li>
              <li>Individual results depend on study effort and prior knowledge</li>
            </ul>
            <p className="mt-3">
              Always verify current regulations at <a href="https://www.faa.gov" className="text-[#2DD4BF] hover:text-cyan-400" target="_blank" rel="noopener noreferrer">faa.gov</a> before operating any unmanned aircraft.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">3. User Accounts</h2>
            <p className="mb-3">
              Account creation is optional. If you create an account:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>You must provide accurate information</li>
              <li>You are responsible for maintaining the security of your account</li>
              <li>You must be at least 16 years old (the minimum age for Part 107 certification)</li>
              <li>One account per person</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">4. Acceptable Use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Reverse engineer, decompile, or disassemble the app</li>
              <li>Copy, redistribute, or resell the content (questions, flashcards, lessons)</li>
              <li>Use automated tools to scrape or extract content from the app</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the Service for any unlawful purpose</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">5. Purchases and Refunds</h2>
            <p className="mb-3">
              In-app purchases are processed through the Apple App Store or Google Play Store. All purchases are subject to the respective store&apos;s terms and refund policies.
            </p>
            <p>
              For refund requests, please contact the store where you made the purchase. We cannot process refunds directly for store purchases.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">6. Intellectual Property</h2>
            <p>
              All content in Flycensed — including but not limited to questions, flashcards, lessons, scenarios, algorithms, designs, and code — is the intellectual property of Stormhaven Enterprises LLC. FAA regulations and publicly available government materials referenced in the app remain in the public domain.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">7. Limitation of Liability</h2>
            <p>
              Flycensed and Stormhaven Enterprises LLC are not liable for any direct, indirect, incidental, or consequential damages arising from the use of the Service, including but not limited to failure to pass the FAA Part 107 exam, loss of study progress, or interruption of service. The Service is provided &quot;as is&quot; without warranties of any kind.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">8. Modifications to Service</h2>
            <p>
              We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice. We may also update these Terms from time to time. Continued use after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">9. Termination</h2>
            <p>
              We may terminate or suspend your account at our sole discretion for violations of these Terms. Upon termination, your right to use the Service ceases immediately. You may delete your account at any time by contacting <a href="mailto:privacy@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">privacy@flycensed.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">10. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Arizona, United States. Any disputes shall be resolved in the courts of Cochise County, Arizona.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-slate-200 mb-3">11. Contact</h2>
            <p>
              For questions about these Terms, contact us at:<br /><br />
              Stormhaven Enterprises LLC<br />
              Cochise County, Arizona<br />
              Email: <a href="mailto:support@flycensed.com" className="text-[#2DD4BF] hover:text-cyan-400">support@flycensed.com</a>
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
