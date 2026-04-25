import { Target, Brain, BarChart3 } from 'lucide-react'
import { Cloud } from './CloudIcon'

export function SolutionSection() {
  return (
    <section
      id="features"
      className="py-20 px-4"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Flycensed teaches you to <span className="text-brand-teal">THINK</span> like a pilot
          </h2>
          <div className="accent-line" />
        </div>

        <div
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
              <div
                key={i}
                className="bg-brand-card/50 border border-brand-card hover:border-brand-teal/50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/10 group cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-brand-teal/10 rounded-lg group-hover:bg-brand-teal/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand-teal" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-slate-400">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
