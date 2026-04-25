import { CountUpAnimation } from './CountUpAnimation'

export function ProblemSection() {
  return (
    <section
      className="py-20 px-4 bg-gradient-to-b from-brand-dark to-brand-card/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Problem</h2>
          <div className="accent-line" />
        </div>

        <div
          className="bg-brand-card/50 border border-red-500/20 rounded-2xl p-8 md:p-12 mb-12"
        >
          <div
            className="text-center mb-8"
          >
            <div className="text-5xl md:text-6xl font-black text-red-400 mb-2">
              1 in 6
            </div>
            <div className="text-xl text-slate-300">people fail the Part 107 exam</div>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12"
          >
            {[
              { stat: '84.2%', label: 'Pass Rate Gap' },
              { stat: '79.95%', label: 'Average Score' },
              { stat: '10,700+', label: 'Failures in 2024' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center"
              >
                <CountUpAnimation target={parseInt(item.stat)} duration={2} />
                <div className="text-slate-400">{item.label}</div>
              </div>
            ))}
          </div>

          <p
            className="text-lg text-slate-300 text-center"
          >
            Most study apps are just question banks with outdated content. The FAA tests{' '}
            <span className="text-brand-teal font-bold">APPLICATION</span>, not memorization.
          </p>
        </div>
      </div>
    </section>
  )
}
