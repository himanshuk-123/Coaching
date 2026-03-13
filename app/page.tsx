import Link from 'next/link'

const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20to%20join%20English%20coaching'

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="bg-orange-100 text-orange-700 text-xs font-semibold px-3 py-1 rounded-full">
              English Subject Focused Coaching
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mt-4 leading-tight">
              Learn English with
              <span className="text-orange-500"> Promod Srivastava</span>
            </h1>
            <p className="text-slate-500 mt-4 text-lg leading-relaxed">
              Grammar, writing, spoken English, and board exam preparation in a simple
              and result-oriented format.
            </p>

            <div className="flex flex-wrap gap-6 mt-6">
              {[
                { num: '12+', label: 'Years Teaching' },
                { num: '500+', label: 'Students Guided' },
                { num: '10th & 12th', label: 'Board Support' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-2xl font-bold text-orange-500">{item.num}</p>
                  <p className="text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                Book Free Demo Class
              </a>
              <a
                href="tel:+919838184568"
                className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold text-center transition-colors"
              >
                Call 9838184568
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-lg p-6">
            <h2 className="text-lg font-semibold text-slate-800">What You Get</h2>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <p>1. Daily grammar and writing practice</p>
              <p>2. Weekly tests with feedback</p>
              <p>3. Spoken English confidence sessions</p>
              <p>4. Board-focused answer writing strategy</p>
              <p>5. Personal doubt support on WhatsApp</p>
            </div>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-6 bg-slate-800 hover:bg-slate-900 text-white text-center py-3 rounded-xl text-sm font-semibold transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 text-center">Why Students Choose This Class</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { title: 'Simple Teaching', desc: 'Concepts explained in easy Hindi + English.' },
              { title: 'English Only Focus', desc: 'Complete subject depth without distraction.' },
              { title: 'Small Batches', desc: 'Better personal attention and tracking.' },
              { title: 'Regular Tests', desc: 'Continuous practice for marks improvement.' },
            ].map((item) => (
              <div key={item.title} className="bg-slate-50 border border-slate-100 rounded-xl p-5">
                <h3 className="font-semibold text-slate-800">{item.title}</h3>
                <p className="text-sm text-slate-500 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 px-4 bg-orange-500 text-center text-white">
        <h2 className="text-3xl font-bold">Ready to Improve English?</h2>
        <p className="text-orange-100 mt-2">Talk directly to Promod Srivastava and choose your batch.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-orange-600 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors"
          >
            WhatsApp Now
          </a>
          <Link
            href="/courses"
            className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            View Course Options
          </Link>
        </div>
      </section>
    </div>
  )
}