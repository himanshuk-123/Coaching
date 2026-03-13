import Link from 'next/link'

const whatsappLink = 'https://wa.me/919838184568?text=Hello,%20I%20want%20batch%20details%20for%20English%20coaching'

export default function Courses() {
  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-orange-50 to-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-3 py-1 rounded-full">
            English Programs
          </span>
          <h1 className="text-4xl font-bold text-slate-800 mt-4">
            Courses by <span className="text-orange-500">Promod Srivastava</span>
          </h1>
          <p className="text-slate-500 mt-3 text-lg">
            Focused batches for school English, grammar, spoken English, and writing skills.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Class 10th English',
              points: ['NCERT chapter explanation', 'Grammar rules + practice', 'Answer writing format'],
              timing: 'Mon-Wed-Fri | 6:30 PM - 7:30 PM',
            },
            {
              title: 'Class 12th English',
              points: ['Board pattern preparation', 'Poetry and prose explanation', 'Long answer writing strategy'],
              timing: 'Mon-Wed-Fri | 7:30 PM - 8:30 PM',
            },
            {
              title: 'Spoken English Foundation',
              points: ['Daily speaking drills', 'Real-life conversation practice', 'Confidence building'],
              timing: 'Tue-Thu-Sat | 7:00 AM - 8:00 AM',
            },
            {
              title: 'Grammar + Writing Booster',
              points: ['Tense and voice mastery', 'Error correction practice', 'Letter and essay writing'],
              timing: 'Sat-Sun | 4:00 PM - 5:30 PM',
            },
          ].map((course) => (
            <div key={course.title} className="bg-slate-50 border border-slate-100 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-slate-800">{course.title}</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                {course.points.map((point) => (
                  <p key={point}>• {point}</p>
                ))}
              </div>
              <p className="text-sm text-orange-600 font-semibold mt-4">{course.timing}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto bg-white border border-slate-100 rounded-2xl p-6 text-center">
          <h3 className="text-2xl font-bold text-slate-800">Admission Support</h3>
          <p className="text-slate-500 mt-2">Free demo class available. Call or WhatsApp for fees and seat availability.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mt-6">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold"
            >
              WhatsApp: 9838184568
            </a>
            <Link
              href="/contact"
              className="border border-orange-500 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-xl font-semibold"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}