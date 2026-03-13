const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20to%20know%20about%20English%20results'

export default function Results() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Student Progress
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            English <span className="text-orange-500">Results Snapshot</span>
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Consistent improvement in grammar accuracy, writing marks, and confidence.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { metric: 'Board-Oriented Practice', value: 'Weekly', note: 'Regular answer writing tests' },
            { metric: 'Writing Improvement', value: 'High', note: 'Structured practice format' },
            { metric: 'Grammar Coverage', value: 'Complete', note: 'Core rules with examples' },
            { metric: 'Class Strength', value: 'Small', note: 'Better individual guidance' },
            { metric: 'Doubt Support', value: 'Fast', note: 'WhatsApp based help' },
            { metric: 'Parent Updates', value: 'Regular', note: 'Progress tracking shared clearly' },
          ].map((item) => (
            <div key={item.metric} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
              <p className="text-xs text-slate-400">{item.metric}</p>
              <p className="text-2xl font-bold text-orange-500 mt-1">{item.value}</p>
              <p className="text-sm text-slate-500 mt-2">{item.note}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-orange-500 text-center text-white">
        <h2 className="text-3xl font-bold">Want Similar Improvement?</h2>
        <p className="text-orange-100 mt-2">Take a demo class and discuss your current level.</p>
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
        >
          Ask on WhatsApp
        </a>
      </section>
    </div>
  )
}