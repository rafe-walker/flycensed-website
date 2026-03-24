'use client'

export function ByTheNumbersSection() {
  return (
    <section
      className="py-20 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/5 to-cyan-500/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">By The Numbers</h2>
          <div className="accent-line" />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { number: '485', label: 'Flashcards' },
            { number: '201', label: 'Questions' },
            { number: '11', label: 'Decision Chains' },
            { number: '20', label: 'Lessons' },
            { number: '100', label: 'METAR Challenges' },
            { number: '5', label: 'Study Modes' },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-brand-card/50 border border-brand-card rounded-xl p-8 text-center hover:bg-brand-card/70 transition-colors"
            >
              <div className="text-4xl md:text-5xl font-black text-brand-teal mb-2">
                {item.number}
              </div>
              <div className="text-slate-400 font-semibold">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
