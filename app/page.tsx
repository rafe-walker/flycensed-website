import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ProblemSection } from './components/ProblemSection'
import { SolutionSection } from './components/SolutionSection'
import { FeatureDeepDiveSection } from './components/FeatureDeepDiveSection'
import { ByTheNumbersSection } from './components/ByTheNumbersSection'
import { HowItWorksSection } from './components/HowItWorksSection'
import { CredibilitySection } from './components/CredibilitySection'
import { BlogSection } from './components/BlogSection'
import { FaqSection } from './components/FaqSection'
import { FinalCtaSection } from './components/FinalCtaSection'
import { Footer } from './components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeatureDeepDiveSection />
      <ByTheNumbersSection />
      <HowItWorksSection />
      <CredibilitySection />
      <BlogSection />
      <FaqSection />
      <FinalCtaSection />
      <Footer />
    </div>
  )
}