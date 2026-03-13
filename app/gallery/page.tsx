const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20to%20visit%20the%20English%20class'

export default function Gallery() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            Class Highlights
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Inside the <span className="text-orange-500">English Classroom</span>
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            A focused and disciplined learning setup for school English improvement.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: '📘', title: 'Grammar Board Sessions', desc: 'Rule-by-rule explanation with examples.' },
            { icon: '✍️', title: 'Writing Practice Desk', desc: 'Daily answer writing and correction.' },
            { icon: '🗣️', title: 'Speaking Circle', desc: 'Short speaking drills for confidence.' },
            { icon: '📝', title: 'Weekly Test Setup', desc: 'Timed tests on board-style patterns.' },
            { icon: '👨‍🏫', title: 'Personal Doubt Support', desc: 'One-to-one concept clarification.' },
            { icon: '🎯', title: 'Revision Corner', desc: 'Quick revision before exams.' },
          ].map((item) => (
            <div key={item.title} className="bg-slate-50 rounded-xl border border-slate-100 p-5">
              <div className="text-4xl">{item.icon}</div>
              <h2 className="font-semibold text-slate-800 mt-3">{item.title}</h2>
              <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Visit the Class</h3>
          <p className="text-slate-500 mt-2">You can book a quick classroom visit before admission.</p>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-5 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            WhatsApp for Visit
          </a>
        </div>
      </section>
    </div>
  )
}